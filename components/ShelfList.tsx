'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DocumentMeta, ContentSeries } from '@/lib/markdown';

interface ShelfListProps {
  documents: DocumentMeta[];
}

export function ShelfList({ documents }: ShelfListProps) {
  const [selectedSeries, setSelectedSeries] = useState<'all' | ContentSeries>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (selectedSeries !== 'all' && doc.series !== selectedSeries) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(q);
        const matchesDesc = doc.description.toLowerCase().includes(q);
        const matchesTags = doc.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTags) return false;
      }
      return true;
    });
  }, [documents, selectedSeries, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search & Series Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-6 border-b border-border/50">
        <input
          type="text"
          placeholder="Search library..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:max-w-xs px-3 py-1.5 text-xs bg-background border border-border rounded-md text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
        />

        <div className="flex items-center gap-1 shrink-0 self-start sm:self-auto">
          {(['all', 'masterclass', 'atom'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSeries(s)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors capitalize ${
                selectedSeries === s
                  ? 'bg-foreground text-background font-semibold'
                  : 'text-muted hover:text-foreground hover:bg-black/5'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Restrained Document List */}
      <div className="divide-y divide-border/40">
        {filteredDocuments.length === 0 ? (
          <p className="text-xs text-muted py-8 text-center">No notes found matching your search.</p>
        ) : (
          filteredDocuments.map((doc) => (
            <Link
              key={doc.slug}
              href={`/${doc.slug}`}
              className="group block py-3.5 px-2 -mx-2 rounded-lg transition-colors hover:bg-black/5 active:bg-black/10"
            >
              <div className="flex justify-between items-baseline mb-1 gap-4">
                <div className="flex items-baseline gap-2.5 min-w-0">
                  <h2 className="text-base font-medium tracking-tight text-foreground truncate">
                    {doc.title}
                  </h2>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted/60 shrink-0">
                    {doc.series}
                  </span>
                </div>
                <span className="text-xs text-muted shrink-0 whitespace-nowrap">
                  {doc.readTime}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <p className="text-xs text-muted line-clamp-1 leading-normal">
                  {doc.description}
                </p>
                {doc.verified !== 'verified' && (
                  <span className="text-[9px] uppercase tracking-wider text-muted/50 font-mono shrink-0">
                    Unverified
                  </span>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
