/**
 * Formats a title into a URL-friendly slug
 * @param {string} title - The blog title to format
 * @returns {string} - Formatted title with dashes, lowercase, no special chars
 */
export const formatTitleForSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/-+/g, '-') // Replace multiple dashes with single dash
      .trim();
  };
  
  /**
   * Creates a blog slug in the format: blog-title-id
   * @param {string} title - The blog title
   * @param {string|number} id - The blog ID
   * @returns {string} - Formatted slug
   */
  export const createBlogSlug = (title, id) => {
    const formattedTitle = formatTitleForSlug(title);
    return `${formattedTitle}-${id}`;
  };
  
  /**
   * Extracts the ID from a blog slug
   * @param {string} slug - The full blog slug
   * @returns {string} - The extracted ID
   */
  export const getBlogIdFromSlug = (slug) => {
    return slug.split('-').pop();
  };