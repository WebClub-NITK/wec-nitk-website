'use strict';

/**
 * reading-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reading-list.reading-list');
