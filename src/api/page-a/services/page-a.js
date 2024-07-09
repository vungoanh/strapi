'use strict';

/**
 * page-a service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-a.page-a');
