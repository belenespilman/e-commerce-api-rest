const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')

class ProductsService {



async create (body){
  const res = await models.Products.create(body);
  return res;
}

async find(){
  const res = await models.Products.findAll();
  return res;
}

async findOne(id){
  const res = await models.Products.findOne(
    {
      where: {
      id: id
      }
     })
  return res;
}

async update(id, body){
  const res = await models.Products.update(body, {
    where: {
      id: id
    }
  })
  return res;
}

async delete(id){
  const res = await models.Products.destroy({where: {id: id}})
return res;
}

}

module.exports = ProductsService;
