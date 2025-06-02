export interface Quote {
  text: string;
  author: string;
  category: string;
}
 
export type QuotesByCategory = {
  [key: string]: Quote[];
}; 