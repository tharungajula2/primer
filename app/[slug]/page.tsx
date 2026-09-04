import { notFound } from 'next/navigation';
import { getDocumentData, getSortedDocumentsData } from '@/lib/markdown';
import { extractHeadings, renderMarkdown } from '@/lib/render';
import ClientReader from './ClientReader';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const documents = getSortedDocumentsData();
  return documents.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const doc = getDocumentData(resolvedParams.slug);
  
  if (!doc) {
    return { title: 'Not Found' };
  }

  return {
    title: `${doc.title} - Primer`,
    description: doc.description,
  };
}

function processHtmlAtomContent(rawContent: string): string {
  // 1. Strip <script id="primer-flashcards">...</script> so it does not render
  let clean = rawContent.replace(/<script\s+id=["']primer-flashcards["'][^>]*>[\s\S]*?<\/script>/gi, '');

  // 2. Strip outer doctype/html/head/body tags if present
  clean = clean.replace(/<!DOCTYPE[^>]*>/gi, '');
  clean = clean.replace(/<\/?(html|head|body)[^>]*>/gi, '');

  // 3. Scope CSS rules (body, html, :root) to .atom-content to prevent style leakage
  clean = clean.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, css) => {
    const scopedCss = css
      .replace(/body\s*\{/g, '.atom-content {')
      .replace(/html\s*\{/g, '.atom-content {')
      .replace(/:root\s*\{/g, '.atom-content {');
    return `<style>${scopedCss}</style>`;
  });

  return clean;
}

export default async function DocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = getDocumentData(resolvedParams.slug);

  if (!doc) {
    notFound();
  }

  const headings = extractHeadings(doc.content);

  if (doc.format === 'html') {
    const cleanContent = processHtmlAtomContent(doc.content);
    return (
      <ClientReader doc={doc} headings={headings}>
        <div
          className="atom-content prose w-full min-w-0 max-w-none"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      </ClientReader>
    );
  }

  const reactContent = await renderMarkdown(doc.content);

  return (
    <ClientReader doc={doc} headings={headings}>
      {reactContent}
    </ClientReader>
  );
}
