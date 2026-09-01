'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, List, X } from 'lucide-react';
import { DocumentData } from '@/lib/markdown';
import { ThemeToggle } from '@/components/ThemeToggle';
import clsx from 'clsx';

interface ClientReaderProps {
  doc: DocumentData;
  headings: { id: string; text: string }[];
  children: React.ReactNode;
}

export default function ClientReader({ doc, headings, children }: ClientReaderProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [scrolledPastHeader, setScrolledPastHeader] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHeader(window.scrollY > 150);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 0.1 }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return setProgress(0);
      setProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showTocButton = headings.length >= 4;

  return (
    <div className="flex-1 flex flex-col w-full min-w-0">
      {/* Top Bar */}
      <header 
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolledPastHeader 
            ? "bg-background/80 backdrop-blur-md border-b border-border py-3" 
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-2xl mx-auto px-3 md:px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden min-w-0">
            <Link 
              href="/" 
              className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 transition-colors shrink-0"
              aria-label="Back to shelf"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            
            <h1 
              className={clsx(
                "font-medium text-sm truncate transition-opacity duration-300 min-w-0",
                scrolledPastHeader ? "opacity-100" : "opacity-0"
              )}
            >
              {doc.title}
            </h1>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {showTocButton && (
              <button
                onClick={() => setIsTocOpen(true)}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 transition-colors"
                aria-label="Table of contents"
              >
                <List className="w-5 h-5" />
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-foreground/20 w-full">
          <div 
            className="h-full bg-foreground transition-all duration-75 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-2xl mx-auto px-3 md:px-4 pt-24 pb-32 min-w-0 flex-1">
        {/* Document Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-4 leading-tight">
            {doc.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-6">
            {doc.description}
          </p>
          <div className="flex items-center gap-4 text-sm font-medium text-muted/80">
            <span>{doc.readTime}</span>
            <span>&middot;</span>
            <span>{doc.wordCount.toLocaleString()} words</span>
          </div>
        </header>

        {/* Rendered Markdown Body */}
        <article className="prose w-full min-w-0">
          {children}
        </article>
      </main>

      {/* TOC Sheet Overlay */}
      {isTocOpen && (
        <div 
          className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center sm:items-center p-4 bg-background/60 backdrop-blur-sm"
          onClick={() => setIsTocOpen(false)}
        >
          <div 
            className="bg-background border border-border rounded-2xl w-full max-w-sm max-h-[80vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-semibold text-base">Table of Contents</h2>
              <button 
                onClick={() => setIsTocOpen(false)}
                className="p-2 -mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="overflow-y-auto p-4 space-y-1 no-scrollbar">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsTocOpen(false);
                    const el = document.getElementById(heading.id);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={clsx(
                    "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    activeId === heading.id 
                      ? "bg-foreground/10 text-foreground" 
                      : "text-muted hover:bg-foreground/5 hover:text-foreground"
                  )}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
