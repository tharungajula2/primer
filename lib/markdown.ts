import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface DocumentMeta {
  slug: string;
  title: string;
  description: string;
  order: number;
  collection: string;
  verified: string;
  readTime: string;
  wordCount: number;
}

export interface DocumentData extends DocumentMeta {
  content: string;
}

// Rough estimate of words per minute for reading
const WPM = 225;

function calculateReadTime(text: string): { readTime: string, wordCount: number } {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / WPM);
  return { 
    readTime: `${minutes} min read`,
    wordCount: words
  };
}

export function getSortedDocumentsData(): DocumentMeta[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allDocumentsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      const { readTime, wordCount } = calculateReadTime(matterResult.content);

      return {
        slug,
        title: matterResult.data.title || slug,
        description: matterResult.data.description || '',
        order: matterResult.data.order ?? 99999, // default to large number if missing
        collection: matterResult.data.collection || 'default',
        verified: matterResult.data.verified || 'unverified',
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
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  const { readTime, wordCount } = calculateReadTime(matterResult.content);

  return {
    slug,
    title: matterResult.data.title || slug,
    description: matterResult.data.description || '',
    order: matterResult.data.order ?? 99999,
    collection: matterResult.data.collection || 'default',
    verified: matterResult.data.verified || 'unverified',
    readTime,
    wordCount,
    content: matterResult.content,
  };
}
