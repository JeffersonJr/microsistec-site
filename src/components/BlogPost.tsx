import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

interface BlogPostProps {
  fileName: string;
}

export default function BlogPost({ fileName }: BlogPostProps) {
  const [post, setPost] = useState({ title: '', date: '', content: '' });

  useEffect(() => {
    // Busca o arquivo markdown localizado na pasta pública ou importado via build
    fetch(`/content/blog/${fileName}.md`)
      .then((response) => response.text())
      .then((text) => {
        const { data, content } = matter(text);
        setPost({ 
          title: data.title || '', 
          date: data.date || '', 
          content: content || ''
        });
      })
      .catch((err) => console.error("Erro ao carregar o post:", err));
  }, [fileName]);

  return (
    <article className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div className="prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
