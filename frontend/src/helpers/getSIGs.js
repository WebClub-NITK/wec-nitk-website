/**
 * SIG Data Fetching Helpers
 *
 * This module provides functions to fetch SIG (Special Interest Group) data
 * from the Strapi backend, following the established patterns used in other
 * data fetching helpers in this project.
 */

/**
 * Fetches a SIG by the ID of its associated blog post
 *
 * @param {string|number} blogId - The ID of the blog post (slug)
 * @returns {Promise<Object|null>} The SIG data object or null if not found/error
 */
export async function getSIGByBlogId(blogId) {
  try {
    // Validate input parameter
    if (!blogId) {
      console.warn('getSIGByBlogId: blogId parameter is required');
      return null;
    }

    // Use the same backend URL pattern as other helpers
    const backendUrl =
      process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

    // Construct query parameters following Strapi v4 filtering syntax
    // We're looking for SIGs where the blogs relation contains a blog with the specified ID
    const params = new URLSearchParams({
      populate: '*',
      'filters[blogs][id][$eq]': blogId,
    });

    // Fetch data using the same pattern as getBlog, getEvents, etc.
    const response = await fetch(`${backendUrl}/api/sigs?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.STRAPI_API_KEY,
      },
      next: {
        revalidate: parseInt(process.env.REVALIDATE) || 0,
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      console.error(`getSIGByBlogId: HTTP error! status: ${response.status}`);
      return null;
    }

    const data = await response.json();

    // Return the first matching SIG or null if none found
    if (data.data && data.data.length > 0) {
      return data.data[0]; // Return the first match since blog-to-SIG should be 1-to-1 in practice
    }

    // Log for debugging purposes
    console.log(`getSIGByBlogId: No SIG found for blog ID ${blogId}`);
    return null;
  } catch (error) {
    console.error('getSIGByBlogId: Error fetching SIG data:', error);
    return null;
  }
}

/**
 * Fetches all SIGs with their populated relations
 *
 * @returns {Promise<Array>} Array of SIG data objects
 */
export async function getAllSIGs() {
  try {
    const backendUrl =
      process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

    const params = new URLSearchParams({
      populate: '*',
      sort: 'name:asc', // Sort alphabetically by name
    });

    const response = await fetch(`${backendUrl}/api/sigs?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.STRAPI_API_KEY,
      },
      next: {
        revalidate: parseInt(process.env.REVALIDATE) || 0,
      },
    });

    if (!response.ok) {
      console.error(`getAllSIGs: HTTP error! status: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('getAllSIGs: Error fetching SIGs data:', error);
    return [];
  }
}

/**
 * Fetches a single SIG by its ID
 *
 * @param {string|number} sigId - The ID of the SIG
 * @returns {Promise<Object|null>} The SIG data object or null if not found/error
 */
export async function getSIG(sigId) {
  try {
    if (!sigId) {
      console.warn('getSIG: sigId parameter is required');
      return null;
    }

    const backendUrl =
      process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

    const params = new URLSearchParams({
      populate: '*',
    });

    const response = await fetch(`${backendUrl}/api/sigs/${sigId}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.STRAPI_API_KEY,
      },
      next: {
        revalidate: parseInt(process.env.REVALIDATE) || 0,
      },
    });

    if (!response.ok) {
      console.error(`getSIG: HTTP error! status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error('getSIG: Error fetching SIG data:', error);
    return null;
  }
}
