'use strict';

/**
 * hackathon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hackathon.hackathon');
