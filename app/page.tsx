import Link from 'next/link';
import { getSortedDocumentsData } from '@/lib/markdown';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  const documents = getSortedDocumentsData();

  return (
    <div className="flex-1 flex flex-col w-full min-w-0">
      {/* Top Header */}
      <header className="w-full py-4 border-b border-border/50">
        <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight text-foreground">Primer</span>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Shelf Content */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-8 md:py-16 min-w-0">
        {/* Intro */}
        <div className="mb-12">
          <p className="text-muted text-base leading-relaxed">
            A mobile-first reading system for long-form technical documents.
          </p>
        </div>

        {/* Shelf List */}
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
    </div>
  );
}
