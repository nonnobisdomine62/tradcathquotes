import { getAllCategories } from '../utils/quotes';
import { siteConfig } from '../utils/config';

export default async function sitemap() {
  const baseUrl = siteConfig.url;
  const categories = getAllCategories();

  // Base routes
  const routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Add category routes
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/${encodeURIComponent(category.toLowerCase())}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...categoryRoutes];
} 