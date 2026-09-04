import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeReact from 'rehype-react';
import * as jsxRuntime from 'react/jsx-runtime';
import React from 'react';
import { visit } from 'unist-util-visit';
import { MermaidDiagram } from '@/components/MermaidDiagram';
import { Callout, CalloutType } from '@/components/Callout';
import { ScrollTable } from '@/components/ScrollTable';

function getCodeString(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getCodeString).join('');
  if (React.isValidElement(children) && children.props && (children.props as any).children) {
    return getCodeString((children.props as any).children);
  }
  return '';
}

function remarkDirectiveTransform() {
  return (tree: any) => {
    visit(tree, (node: any) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        const name = node.name;
        if (
          name === 'permanent-rule' ||
          name === 'never-confuse' ||
          name === 'trap' ||
          name === 'mental-model' ||
          name === 'key-insight'
        ) {
          const data = node.data || (node.data = {});
          data.hName = 'callout';
          data.hProperties = {
            type: name,
            ...node.attributes,
          };
        } else if (name === 'left' || name === 'right') {
          const data = node.data || (node.data = {});
          data.hName = 'div';
          data.hProperties = {
            className: `never-confuse-half never-confuse-${name} p-3 rounded-md bg-background/50 border border-border/40`,
          };
          const title = (node.children?.[0]?.value || node.attributes?.title || (name === 'left' ? 'First Concept' : 'Second Concept')).trim();
          // Add header badge if label exists
          if (node.children && node.children.length > 0 && node.children[0].type === 'text') {
            node.children = [
              {
                type: 'html',
                value: `<div class="font-semibold font-sans text-xs uppercase tracking-wide text-foreground/85 mb-1.5">${node.children[0].value}</div>`
              },
              ...node.children.slice(1)
            ];
          }
        }
      }
    });
  };
}

// Custom component for tables
const ResponsiveTable = (props: any) => (
  <ScrollTable>
    <table {...props} />
  </ScrollTable>
);

// Custom component for pre blocks
const ResponsivePre = (props: any) => {
  const children = React.Children.toArray(props.children);
  const codeChild = children.find(
    (child: any) => React.isValidElement(child)
  );

  const isFlashcard =
    props['data-language'] === 'flashcard' ||
    (codeChild && React.isValidElement(codeChild) && (
      (codeChild.props as any)['data-language'] === 'flashcard' ||
      (typeof (codeChild.props as any)?.className === 'string' && (codeChild.props as any).className.includes('language-flashcard'))
    ));

  if (isFlashcard) {
    // Strip flashcard blocks completely from the render tree!
    return null;
  }

  const isMermaid = 
    props['data-language'] === 'mermaid' ||
    (codeChild && React.isValidElement(codeChild) && (
      (codeChild.props as any)['data-language'] === 'mermaid' ||
      (typeof (codeChild.props as any)?.className === 'string' && (codeChild.props as any).className.includes('language-mermaid'))
    ));

  if (isMermaid && codeChild && React.isValidElement(codeChild)) {
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
  
  // Match markdown headers: ## Title
  const mdRegex = /^##\s+(.+)$/gm;
  let match;
  while ((match = mdRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    headings.push({ id, text });
  }

  // Match HTML headers: <h2 ...>Text</h2>
  if (headings.length === 0) {
    const htmlRegex = /<h2(?:\s+id=["']([^"']+)["'])?[^>]*>(.*?)<\/h2>/gi;
    let htmlMatch;
    while ((htmlMatch = htmlRegex.exec(content)) !== null) {
      const rawId = htmlMatch[1];
      const text = htmlMatch[2].replace(/<[^>]*>/g, '').trim();
      const id = rawId || text
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
    .use(remarkDirectiveTransform)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeKatex)
    .use(rehypePrettyCode, {
      theme: 'github-light',
      keepBackground: false,
    })
    .use(rehypeReact, {
      Fragment: React.Fragment,
      jsx: (jsxRuntime as any).jsx,
      jsxs: (jsxRuntime as any).jsxs,
      components: {
        table: ResponsiveTable,
        pre: ResponsivePre,
        callout: (props: any) => <Callout type={props.type as CalloutType}>{props.children}</Callout>,
      },
    });

  const file = await processor.process(content);
  return file.result;
}
