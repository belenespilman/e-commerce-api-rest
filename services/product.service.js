const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom');

class ProductsService {
//gestionar productos
  constructor () {
    this.products = [];
    this.generate();
  }

  generate (){
  const limit = 100;
  for(let i=0; i < limit; i++){
    this.products.push({
      id: faker.string.uuid(),
      name:faker.commerce.productName(),
      price:parseInt(faker.commerce.price(), 10),
      image: faker.image.avatar(),
      isBlocked: faker.datatype.boolean()
    });
  }
 }

async create (body){
  const newProduct = {id: faker.string.uuid(),
    ...body}
  this.products.push(newProduct)
  return newProduct

}

async find(){
  const products =  this.products;
  if (!products) {
    throw boom.notFound("Products not found");
  }
  return products;
}

async findOne(id){
  const product = this.products.find(item => item.id === id)
  if (!product) {
    throw boom.notFound('Product not found');
  }
  if (product.isBlocked) {
    throw boom.conflict('This product is blocked');
  }
  return product;
}

async update(id, body){
  const index = this.products.findIndex(item => item.id === id)
  if (index == -1) {
    throw boom.notFound("product not found");
  }
    const oldProduct= this.products[index]
    const newProduct = {
      id,
      name: body.name || oldProduct.name,
      price: body.price || oldProduct.price,
      image: body.image || oldProduct.image
    }
    this.products[index] = newProduct
    return newProduct;

}

async delete(id){
  const index = this.categories.findIndex(item => item.id === id)
  if (index == -1) {
    throw boom.notFound('product not found');
  }
  this.categories.splice(index, 1);
return "deleted"
}

}

module.exports = ProductsService;
