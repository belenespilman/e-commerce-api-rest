const { User, UserSchema } =require('./user.model')
const {Products, ProductsSchema } = require('./products.model')
const { Category, CategorySchema} = require('./category.model')
const {Customer, CustomerSchema} = require('./costumers.model')

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Products.init(ProductsSchema, Products.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Products.associate(sequelize.models);

}

module.exports = setupModels;
