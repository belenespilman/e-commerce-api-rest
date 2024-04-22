const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool')

class ProductsService {
//gestionar productos
  constructor () {
    this.pool = pool
    this.pool.on('error', (err) => console.error(err));
  }



async create (body){

 const query = `INSERT INTO products (name, image, price ) VALUES ('${body.name}', '${body.image}', ${body.price});`
 const res =  await this.pool.query(query);
 return res.rows;
}

async find(){
  const query = 'SELECT * FROM products';
  const res = await this.pool.query(query);
  return res.rows;
}

async findOne(id){
  const query = `SELECT * FROM products WHERE id = ${id}`
  const res = await this.pool.query(query);
  const product= res.rows;
  if (!product) {
    throw boom.notFound('Product not found');
  }
  if (product.isBlocked) {
    throw boom.conflict('This product is blocked');
  }
  return product;
}

async update(id, body){
  const query = {
    text: 'UPDATE products SET title = $1, completed = $2 WHERE id = $3',
    values: [body.title, body.completed, id],
  };
  const res = await this.pool.query(query);
  return res.rows;

}

async delete(id){
  const query = `DELETE FROM products WHERE id = ${id}`
  const res= await this.pool.query(query);
  return res.rows;

}

}

module.exports = ProductsService;
