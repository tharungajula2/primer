import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export type ContentFormat = 'md' | 'html';
export type ContentSeries = 'masterclass' | 'atom';

export interface Flashcard {
  id: string;
  slug: string;
  section: string;
  sectionId: string;
  sectionIndex: number;
  question: string;
  answer: string;
}

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
  flashcards: Flashcard[];
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

function formatDateString(val: any): string {
  if (!val) return '';
  if (val instanceof Date) {
    return val.toISOString().split('T')[0];
  }
  return String(val).trim();
}

export function extractHtmlFlashcards(content: string, slug: string): Flashcard[] {
  const flashcards: Flashcard[] = [];
  const scriptRegex = /<script\s+id=["']primer-flashcards["']\s+type=["']application\/json["'][^>]*>([\s\S]*?)<\/script>/i;
  const match = scriptRegex.exec(content);

  if (!match) return flashcards;

  try {
    const rawJson = match[1].trim();
    const parsed = JSON.parse(rawJson);

    if (Array.isArray(parsed)) {
      parsed.forEach((item: any, idx: number) => {
        const question = item.question || item.q || '';
        const answer = item.answer || item.a || '';
        const section = item.section || 'Overview';
        const sectionId = section
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');

        if (question || answer) {
          flashcards.push({
            id: `${slug}-fc-${idx + 1}`,
            slug,
            section,
            sectionId,
            sectionIndex: idx + 1,
            question: String(question).trim(),
            answer: String(answer).trim(),
          });
        }
      });
    }
  } catch (err) {
    console.error(`Failed to parse primer-flashcards script in ${slug}:`, err);
  }

  return flashcards;
}

export function extractFlashcards(content: string, slug: string): Flashcard[] {
  const htmlCards = extractHtmlFlashcards(content, slug);
  if (htmlCards.length > 0) {
    return htmlCards;
  }

  const lines = content.split('\n');
  const flashcards: Flashcard[] = [];
  
  let currentSection = 'Overview';
  let currentSectionId = 'overview';
  let sectionIndex = 0;
  let cardIndex = 0;
  
  let inFlashcardBlock = false;
  let blockLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      currentSection = line.replace(/^##\s+/, '').trim();
      currentSectionId = currentSection
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      sectionIndex++;
    }

    if (line.trim().startsWith('```flashcard')) {
      inFlashcardBlock = true;
      blockLines = [];
      continue;
    }

    if (inFlashcardBlock && line.trim() === '```') {
      inFlashcardBlock = false;
      cardIndex++;

      let question = '';
      let answer = '';

      for (const bLine of blockLines) {
        const trimmed = bLine.trim();
        if (trimmed.startsWith('Q:') || trimmed.startsWith('Question:')) {
          question = trimmed.replace(/^(Q:|Question:)\s*/i, '').trim();
        } else if (trimmed.startsWith('A:') || trimmed.startsWith('Answer:')) {
          answer = trimmed.replace(/^(A:|Answer:)\s*/i, '').trim();
        } else if (question && !answer) {
          question += ' ' + trimmed;
        } else if (answer) {
          answer += ' ' + trimmed;
        }
      }

      if (question || answer) {
        flashcards.push({
          id: `${slug}-fc-${cardIndex}`,
          slug,
          section: currentSection,
          sectionId: currentSectionId,
          sectionIndex,
          question: question.trim(),
          answer: answer.trim(),
        });
      }
      continue;
    }

    if (inFlashcardBlock) {
      blockLines.push(line);
    }
  }

  return flashcards;
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

      const format: ContentFormat = matterResult.data.format === 'markdown' 
        ? 'md' 
        : (matterResult.data.format ? matterResult.data.format : (isHtml ? 'html' : 'md'));
      
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
        created: formatDateString(matterResult.data.created),
        updated: formatDateString(matterResult.data.updated || matterResult.data.date),
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

  const format: ContentFormat = matterResult.data.format === 'markdown' 
    ? 'md' 
    : (matterResult.data.format ? matterResult.data.format : (isHtml ? 'html' : 'md'));
  
  const series: ContentSeries = matterResult.data.series 
    ? matterResult.data.series 
    : (format === 'html' ? 'atom' : 'masterclass');

  const flashcards = extractFlashcards(matterResult.content, slug);

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
    created: formatDateString(matterResult.data.created),
    updated: formatDateString(matterResult.data.updated || matterResult.data.date),
    related: parseRelated(matterResult.data.related),
    readTime,
    wordCount,
    content: matterResult.content,
    flashcards,
  };
}

export function getAllFlashcards(): Flashcard[] {
  if (!fs.existsSync(contentDirectory)) return [];

  const fileNames = fs.readdirSync(contentDirectory);
  const allCards: Flashcard[] = [];

  fileNames.forEach((fileName) => {
    if (!fileName.endsWith('.md') && !fileName.endsWith('.html')) return;
    const slug = fileName.replace(/\.(md|html)$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const cards = extractFlashcards(matterResult.content, slug);
    allCards.push(...cards);
  });

  return allCards;
}
