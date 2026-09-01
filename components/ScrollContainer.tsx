'use client';

import React, { useRef, useState, useEffect } from 'react';

export function ScrollContainer({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });

    const timer = setTimeout(checkScroll, 100);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timer);
    };
  }, []);

  let maskImage = 'none';
  if (canScrollLeft && canScrollRight) {
    maskImage = 'linear-gradient(to right, transparent 0, black 28px, black calc(100% - 28px), transparent 100%)';
  } else if (canScrollLeft) {
    maskImage = 'linear-gradient(to right, transparent 0, black 28px, black 100%)';
  } else if (canScrollRight) {
    maskImage = 'linear-gradient(to right, black 0, black calc(100% - 28px), transparent 100%)';
  }

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-x-auto my-6 no-scrollbar touch-pan-x min-w-0 ${className}`}
      style={{
        maskImage,
        WebkitMaskImage: maskImage,
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {children}
    </div>
  );
}
