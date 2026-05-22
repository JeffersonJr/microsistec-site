// Vercel Serverless Function — wraps the TanStack Start SSR handler.
// This file is built by Vite (ssr env) and served as a Vercel Function.
// Vercel detects the .vercel/output structure when the build outputs one,
// otherwise it uses this api/ route pattern as a catch-all.

import type { IncomingMessage, ServerResponse } from "node:http";

// Lazily load the SSR handler to avoid top-level await at module init.
let handler: ((req: Request) => Promise<Response>) | undefined;

async function getHandler() {
  if (!handler) {
    // server-entry is the virtual module compiled by TanStack Start's Vite plugin.
    // After `vite build`, it resolves to the bundled server assets.
    const mod = await import("@tanstack/react-start/server-entry") as any;
    const entry = (mod.default ?? mod) as { fetch: (req: Request) => Promise<Response> };
    handler = entry.fetch.bind(entry);
  }
  return handler;
}

// Node.js → Web Request adapter for Vercel's Node.js runtime
function nodeToWebRequest(req: IncomingMessage, body?: Buffer): Request {
  const protocol = (req.headers["x-forwarded-proto"] as string) ?? "https";
  const host = (req.headers["x-forwarded-host"] as string) ?? req.headers.host ?? "localhost";
  const url = `${protocol}://${host}${req.url ?? "/"}`;

  const headers = new Headers();
  for (const [key, val] of Object.entries(req.headers)) {
    if (val == null) continue;
    if (Array.isArray(val)) {
      for (const v of val) headers.append(key, v);
    } else {
      headers.set(key, val);
    }
  }

  return new Request(url, {
    method: req.method ?? "GET",
    headers,
    body: body && body.length > 0 ? body : undefined,
    // @ts-expect-error — duplex is required for Node.js streams in some runtimes
    duplex: "half",
  });
}

async function readBody(req: IncomingMessage): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export default async function vercelHandler(req: IncomingMessage, res: ServerResponse) {
  try {
    const fn = await getHandler();
    const body = await readBody(req);
    const webRequest = nodeToWebRequest(req, body);
    const webResponse = await fn(webRequest);

    res.statusCode = webResponse.status;
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const responseBody = await webResponse.arrayBuffer();
    res.end(Buffer.from(responseBody));
  } catch (err) {
    console.error("[vercel-handler] Unhandled error:", err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Internal Server Error");
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
