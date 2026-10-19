'use strict';


const sanitizeQuery = (q) => {
  
  return q.replace(/[^a-zA-Z0-9\s]/g, '').slice(0, 50).trim();
};

module.exports = {
  /**
   * Custom search controller
   * @param {object} ctx - The Koa context.
   */
  async find(ctx) {
    const { q } = ctx.query;
    if (!q) {
      return ctx.badRequest('Missing query parameter "q"');
    }

    const cleanQuery = sanitizeQuery(q);

    // Collections to search in
    const collections = [
      { name: 'achievement', fields: ['name', 'user_name', 'body'] },
      { name: 'blog', fields: ['title', 'subheading', 'body'] },
      { name: 'event', fields: ['title', 'body', 'location'] },
      { name: 'faq', fields: ['question', 'answer'] },
      { name: 'hackathon', fields: ['title', 'body'] },
      { name: 'member', fields: ['name'] },
      { name: 'reading-list', fields: ['title', 'body', 'topic'] },
      { name: 'sig', fields: ['name', 'description'] },
      { name: 'tag', fields: ['name'] },
    ];

    let results = [];

    for (const { name, fields } of collections) {
      try {
        const orConditions = fields.map((f) => ({ [f]: { $containsi: cleanQuery } }));

        const data = await strapi.db.query(`api::${name}.${name}`).findMany({
          where: { $or: orConditions },
        });

        if (data.length > 0) {
          results = results.concat(
            data.map((item) => ({
              type: name,
              title: item.title || item.name || 'Untitled',
              id: item.id,
            }))
          );
        }
      } catch (err) {
        strapi.log.warn(`Could not search in collection ${name}: ${err.message}`);
      }
    }

    return results;
  },
};
