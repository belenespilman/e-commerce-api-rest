'use strict';

const {PRODUCTS_TABLE, ProductsSchema } = require('./../models/products.model')
const { CATEGORY_TABLE, CategorySchema} = require('./../models/category.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCTS_TABLE, 'description', ProductsSchema.description);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PRODUCTS_TABLE,'description', ProductsSchema.description);
  }
};
