'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DocumentMeta, ContentSeries } from '@/lib/markdown';

interface ShelfListProps {
  documents: DocumentMeta[];
}

export function ShelfList({ documents }: ShelfListProps) {
  const [selectedSeries, setSelectedSeries] = useState<'all' | ContentSeries>('all');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allTags = useMemo(() => {
    const set = new Set<string>();
    documents.forEach((doc) => {
      doc.tags.forEach((tag) => set.add(tag));
    });
    return Array.from(set).sort();
  }, [documents]);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (selectedSeries !== 'all' && doc.series !== selectedSeries) return false;
      if (selectedTag && !doc.tags.includes(selectedTag)) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(q);
        const matchesDesc = doc.description.toLowerCase().includes(q);
        const matchesTags = doc.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTags) return false;
      }
      return true;
    });
  }, [documents, selectedSeries, selectedTag, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Controls Header: Search & Filters */}
      <div className="space-y-4 pb-4 border-b border-border/50">
        <input
          type="text"
          placeholder="Search library..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3.5 py-2 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
        />

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-muted/70 uppercase tracking-wider text-[10px] mr-1">Series:</span>
          {(['all', 'masterclass', 'atom'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSeries(s)}
              className={`px-2.5 py-1 rounded-full font-medium transition-colors capitalize ${
                selectedSeries === s
                  ? 'bg-foreground text-background'
                  : 'bg-black/5 hover:bg-black/10 text-muted'
              }`}
            >
              {s}
            </button>
          ))}

          {allTags.length > 0 && (
            <>
              <span className="font-semibold text-muted/70 uppercase tracking-wider text-[10px] ml-3 mr-1">Tag:</span>
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag('')}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-foreground/10 text-foreground hover:bg-foreground/20"
                >
                  Clear ({selectedTag}) ×
                </button>
              )}
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-foreground text-background'
                      : 'border border-border text-muted hover:text-foreground hover:border-foreground/40'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Shelf List */}
      <div className="flex flex-col gap-6">
        {filteredDocuments.length === 0 ? (
          <p className="text-sm text-muted py-8 text-center">No notes found matching your search.</p>
        ) : (
          filteredDocuments.map((doc) => (
            <Link
              key={doc.slug}
              href={`/${doc.slug}`}
              className="group block py-3 -mx-4 px-4 rounded-xl transition-colors hover:bg-black/5 active:bg-black/10"
            >
              <div className="flex justify-between items-baseline mb-1 gap-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium tracking-tight text-foreground group-hover:text-foreground">
                    {doc.title}
                  </h2>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/5 text-muted shrink-0">
                    {doc.series}
                  </span>
                </div>
                <span className="text-xs font-medium text-muted whitespace-nowrap">
                  {doc.readTime}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                  {doc.description}
                </p>

                <div className="flex items-center gap-2 flex-wrap text-xs">
                  {doc.verified !== 'verified' && (
                    <span className="text-[10px] uppercase tracking-wider text-muted/60 font-medium px-1.5 py-0.5 rounded border border-border shrink-0">
                      {doc.verified}
                    </span>
                  )}
                  {doc.tags.map((t) => (
                    <span key={t} className="text-[11px] text-muted/80">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
