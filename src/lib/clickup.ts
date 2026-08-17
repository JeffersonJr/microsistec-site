/**
 * Client-side helper that sends lead data directly to the ClickUp API.
 *
 * Uses VITE_-prefixed env vars so they are available in the browser.
 * The ClickUp Personal API Token is used for authentication.
 */

const CLICKUP_API_TOKEN = import.meta.env.VITE_CLICKUP_API_TOKEN ?? "";
const CLICKUP_LIST_ID = import.meta.env.VITE_CLICKUP_LIST_ID ?? "";

interface LeadData {
  nome: string;
  telefone: string;
  email: string;
  cnpj?: string;
}

export async function sendLeadToClickUp(lead: LeadData): Promise<void> {
  if (!CLICKUP_API_TOKEN || !CLICKUP_LIST_ID) {
    console.warn("[ClickUp] Missing VITE_CLICKUP_API_TOKEN or VITE_CLICKUP_LIST_ID");
    return;
  }

  const customFields = [];
  
  if (lead.telefone) {
    customFields.push({
      id: "18b57b65-8a2a-41e4-8114-d4a5e4945f56", // Telefone
      value: lead.telefone
    });
  }
  
  if (lead.email) {
    customFields.push({
      id: "9902a72d-5372-40c6-b579-6d98801f6c49", // E-mail
      value: lead.email
    });
  }
  
  if (lead.cnpj) {
    customFields.push({
      id: "41046864-b5f9-4375-bb29-ebe6752f2c03", // CNPJ/CPF
      value: lead.cnpj
    });
  }

  const response = await fetch(
    `https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: CLICKUP_API_TOKEN,
      },
      body: JSON.stringify({
        name: `Lead Site: ${lead.nome}`,
        description: "Lead gerado através do formulário do site.",
        custom_fields: customFields,
      }),
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`[ClickUp] API error [${response.status}]:`, errorBody);
    throw new Error("Erro ao registrar lead no ClickUp.");
  }
}
