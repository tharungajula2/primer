import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeReact from 'rehype-react';
import * as jsxRuntime from 'react/jsx-runtime';
import React from 'react';

// A custom component for tables to ensure they wrap in an overflow container
const ResponsiveTable = (props: any) => (
  <div className="w-full overflow-x-auto my-6 -mx-4 px-4 sm:mx-0 sm:px-0">
    <table {...props} className="w-full text-sm sm:text-base whitespace-nowrap" />
  </div>
);

// A custom component for pre blocks to ensure they scroll
const ResponsivePre = (props: any) => (
  <div className="w-full overflow-x-auto my-6 -mx-4 px-4 sm:mx-0 sm:px-0">
    <pre {...props} />
  </div>
);

// We need to extract the TOC (all h2 elements) during processing
// We can do this by examining the MDAST or simply parsing the output.
// Instead of a custom plugin, we'll parse the headings from the raw markdown for simplicity.
export function extractHeadings(content: string) {
  const headings: { id: string; text: string }[] = [];
  const lines = content.split('\n');
  
  // Note: this simple regex works because the spec says:
  // "## for numbered sections. These are the only headings in the table of contents."
  // And they are not indented.
  for (const line of lines) {
    if (line.startsWith('## ')) {
      const text = line.replace(/^##\s+/, '').trim();
      // Simple slugify matching rehype-slug
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
        // Enforce tabular-nums on numeric columns by adding it to all td/th for simplicity,
        // or just apply it generally in CSS (which we did via tabular-nums in Tailwind if needed).
        // For tables, Tailwind's proportional fonts might not have tabular nums by default, 
        // so we can explicitly add the class.
        td: (props: any) => <td {...props} className="tabular-nums border-b border-border p-3" />,
        th: (props: any) => <th {...props} className="font-semibold text-left border-b border-border p-3" />,
      },
    });

  const file = await processor.process(content);
  return file.result;
}
