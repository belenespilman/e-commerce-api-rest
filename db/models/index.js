const { User, UserSchema } =require('./user.model')
const {Products, ProductsSchema } = require('./products.models')
const { Category, CategorySchema} = require('./category.models')

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Products.init(ProductsSchema, Products.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));

}

module.exports = setupModels;
