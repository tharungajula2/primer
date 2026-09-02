import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeReact from 'rehype-react';
import * as jsxRuntime from 'react/jsx-runtime';
import React from 'react';
import { ScrollContainer } from '@/components/ScrollContainer';

// Custom component for tables
const ResponsiveTable = (props: any) => (
  <div className="table-container my-6 w-full max-w-full">
    <table {...props} />
  </div>
);

// Custom component for pre blocks
const ResponsivePre = (props: any) => (
  <div className="my-6 w-full max-w-full">
    <pre {...props} />
  </div>
);

export function extractHeadings(content: string) {
  const headings: { id: string; text: string }[] = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    if (line.startsWith('## ')) {
      const text = line.replace(/^##\s+/, '').trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      headings.push({ id, text });
    }
  }
  return headings;
}

export async function renderMarkdown(content: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeReact, {
      Fragment: React.Fragment,
      jsx: (jsxRuntime as any).jsx,
      jsxs: (jsxRuntime as any).jsxs,
      components: {
        table: ResponsiveTable,
        pre: ResponsivePre,
      },
    });

  const file = await processor.process(content);
  return file.result;
}
