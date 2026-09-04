import { NextResponse } from 'next/server';
import { getAllFlashcards } from '@/lib/markdown';

export async function GET() {
  const flashcards = getAllFlashcards();
  return NextResponse.json({
    total: flashcards.length,
    flashcards,
  });
}
