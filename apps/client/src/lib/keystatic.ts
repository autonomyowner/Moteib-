import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

// Create a reader instance
export const reader = createReader(process.cwd(), keystaticConfig);

// Helper to get all published articles
export async function getPublishedArticles() {
  const articles = await reader.collections.articles.all();

  return articles
    .filter((article) => article.entry.published)
    .sort((a, b) => {
      const dateA = new Date(a.entry.publishedDate || 0);
      const dateB = new Date(b.entry.publishedDate || 0);
      return dateB.getTime() - dateA.getTime();
    });
}

// Helper to get a single article by slug
export async function getArticleBySlug(slug: string) {
  try {
    const article = await reader.collections.articles.read(slug);
    return article;
  } catch (error) {
    console.error('Error reading article:', error);
    return null;
  }
}

// Helper to get all article slugs (for static generation)
export async function getAllArticleSlugs() {
  const articles = await reader.collections.articles.all();
  return articles
    .filter((article) => article.entry.published)
    .map((article) => article.slug);
}
