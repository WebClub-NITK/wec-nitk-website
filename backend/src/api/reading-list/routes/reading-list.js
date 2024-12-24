'use strict';

/**
 * reading-list router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::reading-list.reading-list');
