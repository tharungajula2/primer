import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeReact from 'rehype-react';
import * as jsxRuntime from 'react/jsx-runtime';
import React from 'react';
import { MermaidDiagram } from '@/components/MermaidDiagram';

function getCodeString(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getCodeString).join('');
  if (React.isValidElement(children) && children.props && (children.props as any).children) {
    return getCodeString((children.props as any).children);
  }
  return '';
}

// Custom component for tables
const ResponsiveTable = (props: any) => (
  <div className="table-container my-6 w-full max-w-full">
    <table {...props} />
  </div>
);

// Custom component for pre blocks
const ResponsivePre = (props: any) => {
  const children = React.Children.toArray(props.children);
  const codeChild = children.find(
    (child: any) =>
      React.isValidElement(child) &&
      typeof (child.props as any)?.className === 'string' &&
      (child.props as any).className.includes('language-mermaid')
  );

  if (codeChild && React.isValidElement(codeChild)) {
    const rawChart = getCodeString((codeChild.props as any).children).trim();
    return <MermaidDiagram chart={rawChart} />;
  }

  return (
    <div className="my-6 w-full max-w-full overflow-x-auto">
      <pre {...props} />
    </div>
  );
};

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
    .use(remarkMath)
    .use(remarkDirective)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeKatex)
    .use(rehypeHighlight, { ignoreMissing: true })
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
