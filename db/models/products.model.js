const { Model, DataTypes, Sequelize} = require('sequelize')
const{CATEGORY_TABLE} = require('./../models/category.model')

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
  },

  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  categoryId: {
    field: 'category',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}

class Products extends Model {
  static associate(models) {
    this.belongsTo(models.Category, {
      as: 'category'
    })

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
