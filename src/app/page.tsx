'use client';

import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';
import GitHubButton from '../components/GitHubButton';
import { getAllQuotes } from '../utils/quotes';

export default function Home() {
  const totalQuotes = getAllQuotes().length;

  return (
    <main className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
      <ThemeToggle />
      <GitHubButton />
      
      <div className="text-center space-y-8 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medieval text-medieval-primary dark:text-medieval-secondary mb-8 leading-tight">
          Traditional Catholic Quotes
        </h1>

        <p className="text-xl md:text-2xl font-text text-medieval-accent dark:text-medieval-light leading-relaxed mb-12">
          Discover a curated collection of traditional Catholic quotes from saints, doctors of the Church, and Church Fathers.
        </p>

        <div className="font-medieval text-lg text-medieval-primary/80 dark:text-medieval-secondary/80 mb-12">
          {totalQuotes} timeless quotes to explore
        </div>

        <Link 
          href="/quotes"
          className="inline-block px-8 py-4 text-xl font-medieval text-medieval-light bg-medieval-primary dark:bg-medieval-secondary rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-medieval-secondary/30"
        >
          Explore Quotes
        </Link>

        <div className="mt-16 pt-8 border-t border-medieval-primary/20 dark:border-medieval-secondary/20">
          <blockquote className="italic font-text text-lg text-medieval-accent/80 dark:text-medieval-light/80">
            "The saints are few, but we must live with the few if we would be saved with the few."
            <footer className="mt-2 font-medieval text-sm text-medieval-primary dark:text-medieval-secondary">
              — Saint Alphonsus Maria Liguori, Doctor of the Church
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-medieval-light/50 to-transparent dark:from-medieval-dark/50 pointer-events-none" />
    </main>
  );
}
