import quotes from '../data/quotes.json';
import { Quote, QuotesByCategory } from '../types/quote';

export function getAllQuotes(): Quote[] {
  return quotes as Quote[];
}

export function getQuotesByCategory(): QuotesByCategory {
  const allQuotes = getAllQuotes();
  return allQuotes.reduce((acc: QuotesByCategory, quote: Quote) => {
    if (!acc[quote.category]) {
      acc[quote.category] = [];
    }
    acc[quote.category].push(quote);
    return acc;
  }, {});
}

export function getAllCategories(): string[] {
  const categories = new Set(getAllQuotes().map(quote => quote.category));
  return Array.from(categories).sort();
} 