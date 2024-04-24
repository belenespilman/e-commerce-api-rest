'use strict';

const {PRODUCTS_TABLE, ProductsSchema } = require('./../models/products.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(PRODUCTS_TABLE, 'categoryId', ProductsSchema.categoryId)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(PRODUCTS_TABLE, 'categoryId', ProductsSchema.categoryId)

  }
};
