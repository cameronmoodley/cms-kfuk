'use strict';

/**
 * Slides.js controller
 *
 * @description: A set of functions called "actions" for managing `Slides`.
 */

module.exports = {

  /**
   * Retrieve slides records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.slides.search(ctx.query);
    } else {
      return strapi.services.slides.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a slides record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.slides.fetch(ctx.params);
  },

  /**
   * Count slides records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.slides.count(ctx.query);
  },

  /**
   * Create a/an slides record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.slides.add(ctx.request.body);
  },

  /**
   * Update a/an slides record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.slides.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an slides record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.slides.remove(ctx.params);
  }
};
