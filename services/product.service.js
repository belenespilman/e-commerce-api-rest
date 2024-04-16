const { faker } = require('@faker-js/faker')

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
      image: faker.image.avatar()
    });
  }
 }

create (body){
  const newProduct = {id: faker.string.uuid(),
    ...body}
  this.products.push(newProduct)
  return newProduct

}

find(){
  return this.products;
}

findOne(id){
  return this.products.find(item => item.id === id)
}

update(id, body){
  const index = this.products.findIndex(item => item.id === id)
  if (index == -1) {
    return "product not found"
  }
    const oldProduct= this.products[index]
    const newProduct = {
      id,
      name: body.name || oldProduct.name,
      price: body.price || oldProduct.price,
      image: body.image || oldProduct.image
    }
    this.products[index] = newProduct
    return "updated"

}

delete(id){
  const index = this.categories.findIndex(item => item.id === id)
  if (index == -1) {
    return "no product found"
  }
  this.categories.splice(index, 1);
return "deleted"
}

}

module.exports = ProductsService;
