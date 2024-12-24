'use strict';

/**
 * sig service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sig.sig');
