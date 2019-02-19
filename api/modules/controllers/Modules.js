'use strict';

/**
 * Modules.js controller
 *
 * @description: A set of functions called "actions" for managing `Modules`.
 */

module.exports = {

  /**
   * Retrieve modules records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.modules.search(ctx.query);
    } else {
      return strapi.services.modules.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a modules record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.modules.fetch(ctx.params);
  },

  /**
   * Count modules records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.modules.count(ctx.query);
  },

  /**
   * Create a/an modules record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.modules.add(ctx.request.body);
  },

  /**
   * Update a/an modules record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.modules.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an modules record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.modules.remove(ctx.params);
  }
};
