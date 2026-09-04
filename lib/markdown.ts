import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export type ContentFormat = 'markdown' | 'html';
export type ContentSeries = 'masterclass' | 'atom';

export interface DocumentMeta {
  slug: string;
  title: string;
  description: string;
  order: number;
  collection: string;
  verified: string;
  format: ContentFormat;
  series: ContentSeries;
  tags: string[];
  created: string;
  updated: string;
  related: string[];
  readTime: string;
  wordCount: number;
}

export interface DocumentData extends DocumentMeta {
  content: string;
}

// Rough estimate of words per minute for reading
const WPM = 225;

function calculateReadTime(text: string): { readTime: string, wordCount: number } {
  // Strip HTML tags for clean word count calculation if HTML document
  const cleanText = text.replace(/<[^>]*>/g, ' ');
  const words = cleanText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WPM));
  return { 
    readTime: `${minutes} min read`,
    wordCount: words
  };
}

function parseTags(rawTags: any): string[] {
  if (Array.isArray(rawTags)) {
    return rawTags.map(t => String(t).trim()).filter(Boolean);
  }
  if (typeof rawTags === 'string' && rawTags.trim()) {
    return rawTags.split(',').map(t => t.trim()).filter(Boolean);
  }
  return [];
}

function parseRelated(rawRelated: any): string[] {
  if (Array.isArray(rawRelated)) {
    return rawRelated.map(r => String(r).trim()).filter(Boolean);
  }
  if (typeof rawRelated === 'string' && rawRelated.trim()) {
    return rawRelated.split(',').map(r => r.trim()).filter(Boolean);
  }
  return [];
}

export function getSortedDocumentsData(): DocumentMeta[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allDocumentsData = fileNames
    .filter(fileName => (fileName.endsWith('.md') || fileName.endsWith('.html')) && !fileName.startsWith('_'))
    .map((fileName) => {
      const isHtml = fileName.endsWith('.html');
      const slug = fileName.replace(/\.(md|html)$/, '');

      // Read file content
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      const { readTime, wordCount } = calculateReadTime(matterResult.content);

      const format: ContentFormat = matterResult.data.format 
        ? matterResult.data.format 
        : (isHtml ? 'html' : 'markdown');
      
      const series: ContentSeries = matterResult.data.series 
        ? matterResult.data.series 
        : (format === 'html' ? 'atom' : 'masterclass');

      return {
        slug,
        title: matterResult.data.title || slug,
        description: matterResult.data.description || '',
        order: matterResult.data.order ?? 99999, // default to large number if missing
        collection: matterResult.data.collection || 'default',
        verified: matterResult.data.verified || 'unverified',
        format,
        series,
        tags: parseTags(matterResult.data.tags),
        created: matterResult.data.created || '',
        updated: matterResult.data.updated || matterResult.data.date || '',
        related: parseRelated(matterResult.data.related),
        readTime,
        wordCount
      };
    });

  // Sort documents by order
  return allDocumentsData.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else if (a.order > b.order) {
      return 1;
    } else {
      return 0;
    }
  });
}

export function getDocumentData(slug: string): DocumentData | null {
  let fullPath = path.join(contentDirectory, `${slug}.md`);
  let isHtml = false;

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(contentDirectory, `${slug}.html`);
    isHtml = true;
  }
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  const { readTime, wordCount } = calculateReadTime(matterResult.content);

  const format: ContentFormat = matterResult.data.format 
    ? matterResult.data.format 
    : (isHtml ? 'html' : 'markdown');
  
  const series: ContentSeries = matterResult.data.series 
    ? matterResult.data.series 
    : (format === 'html' ? 'atom' : 'masterclass');

  return {
    slug,
    title: matterResult.data.title || slug,
    description: matterResult.data.description || '',
    order: matterResult.data.order ?? 99999,
    collection: matterResult.data.collection || 'default',
    verified: matterResult.data.verified || 'unverified',
    format,
    series,
    tags: parseTags(matterResult.data.tags),
    created: matterResult.data.created || '',
    updated: matterResult.data.updated || matterResult.data.date || '',
    related: parseRelated(matterResult.data.related),
    readTime,
    wordCount,
    content: matterResult.content,
  };
}
