import Link from 'next/link';
import { getSortedDocumentsData } from '@/lib/markdown';

export default function Home() {
  const documents = getSortedDocumentsData();

  return (
    <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-12 md:py-24">
      {/* Intro */}
      <div className="mb-16">
        <h1 className="text-xl font-serif font-medium tracking-tight mb-2">Primer</h1>
        <p className="text-muted text-base leading-relaxed">
          A mobile-first reading system for long-form technical documents.
        </p>
      </div>

      {/* Shelf */}
      <div className="flex flex-col gap-6">
        {documents.map((doc) => (
          <Link
            key={doc.slug}
            href={`/${doc.slug}`}
            className="group block py-2 -mx-4 px-4 rounded-xl transition-colors hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10"
          >
            <div className="flex justify-between items-baseline mb-1 gap-4">
              <h2 className="text-lg font-medium tracking-tight text-foreground group-hover:text-foreground">
                {doc.title}
              </h2>
              <span className="text-xs font-medium text-muted whitespace-nowrap">
                {doc.readTime}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <p className="text-sm text-muted line-clamp-2">
                {doc.description}
              </p>
              {doc.verified !== 'verified' && (
                <span className="text-[10px] uppercase tracking-wider text-muted/60 font-medium px-1.5 py-0.5 rounded border border-border shrink-0">
                  {doc.verified}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
