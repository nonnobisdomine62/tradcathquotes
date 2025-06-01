'use client';

import { useState } from 'react';
import { Quote as QuoteType } from '../types/quote';

export default function Quote({ quote }: { quote: QuoteType }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${quote.text}\n— ${quote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div 
      onClick={handleCopy}
      className="mb-4 p-6 bg-medieval-parchment dark:bg-medieval-accent/20 rounded-lg shadow-lg border border-medieval-secondary/30 cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-[1.01] relative group"
    >
      <blockquote className="font-text text-lg italic mb-4">
        {quote.text}
      </blockquote>
      <cite className="block font-medieval text-sm text-medieval-primary dark:text-medieval-secondary">
        — {quote.author}
      </cite>
      
      {/* Copy indicator */}
      <div className={`absolute top-2 right-2 transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <span className="bg-medieval-primary dark:bg-medieval-secondary text-medieval-light px-3 py-1 rounded-full text-sm font-medieval">
          {copied ? 'Copied!' : 'Click to copy'}
        </span>
      </div>
    </div>
  );
} 