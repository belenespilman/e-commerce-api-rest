const { Model, DataTypes, Sequelize} = require('sequelize')

const PRODUCTS_TABLE = 'products'

const ProductsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },

  image: {
    allowNull: false,
    type: DataTypes.STRING,

  },

  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  }

}

class Products extends Model {
  static associate() {

  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'Products',
      timestamps: false
    }
  }
}

module.exports= {PRODUCTS_TABLE, ProductsSchema, Products }
