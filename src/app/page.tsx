'use client';

import { useState } from 'react';
import Quote from '../components/Quote';
import ThemeToggle from '../components/ThemeToggle';
import { getAllQuotes, getQuotesByCategory, getAllCategories } from '../utils/quotes';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = getAllCategories();
  const quotesByCategory = getQuotesByCategory();
  const allQuotes = getAllQuotes();

  const displayQuotes = selectedCategory === 'all' 
    ? allQuotes 
    : quotesByCategory[selectedCategory] || [];

  return (
    <main className="relative max-w-7xl mx-auto">
      <ThemeToggle />
      
      <h1 className="text-4xl md:text-5xl font-medieval text-medieval-primary dark:text-medieval-secondary text-center mb-6">
        Traditional Catholic Quotes
      </h1>

      <nav className="mb-8">
        <ul className="flex flex-wrap justify-center gap-3">
          <li>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-medieval text-sm transition-colors duration-200
                ${selectedCategory === 'all'
                  ? 'bg-medieval-primary dark:bg-medieval-secondary text-medieval-light'
                  : 'bg-medieval-light dark:bg-medieval-dark border border-medieval-primary dark:border-medieval-secondary hover:bg-medieval-primary/10 dark:hover:bg-medieval-secondary/10'
                }`}
            >
              All Quotes
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medieval text-sm transition-colors duration-200
                  ${selectedCategory === category
                    ? 'bg-medieval-primary dark:bg-medieval-secondary text-medieval-light'
                    : 'bg-medieval-light dark:bg-medieval-dark border border-medieval-primary dark:border-medieval-secondary hover:bg-medieval-primary/10 dark:hover:bg-medieval-secondary/10'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
        {displayQuotes.map((quote, index) => (
          <Quote key={index} quote={quote} />
        ))}
      </div>
    </main>
  );
}
