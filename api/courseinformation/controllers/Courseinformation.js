'use strict';

/**
 * Courseinformation.js controller
 *
 * @description: A set of functions called "actions" for managing `Courseinformation`.
 */

module.exports = {

  /**
   * Retrieve courseinformation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.courseinformation.search(ctx.query);
    } else {
      return strapi.services.courseinformation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a courseinformation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.courseinformation.fetch(ctx.params);
  },

  /**
   * Count courseinformation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.courseinformation.count(ctx.query);
  },

  /**
   * Create a/an courseinformation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.courseinformation.add(ctx.request.body);
  },

  /**
   * Update a/an courseinformation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.courseinformation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an courseinformation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.courseinformation.remove(ctx.params);
  }
};
