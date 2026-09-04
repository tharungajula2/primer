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

export default async function DocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = getDocumentData(resolvedParams.slug);

  if (!doc) {
    notFound();
  }

  const headings = extractHeadings(doc.content);

  if (doc.format === 'html') {
    return (
      <ClientReader doc={doc} headings={headings}>
        <div
          className="atom-content prose w-full min-w-0 max-w-none"
          dangerouslySetInnerHTML={{ __html: doc.content }}
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
