'use strict';

const {USER_TABLE, UserSchema} = require('./../models/user.model')
const {CATEGORY_TABLE, CategorySchema} = require('./../models/category.models')
const {PRODUCTS_TABLE, ProductsSchema} = require('./../models/products.models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE, UserSchema);
    await queryInterface.dropTable(PRODUCTS_TABLE, ProductsSchema);
    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema);
  }
};
