const Joi = require('joi');

const id = Joi.string();
const name= Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  image: image.required(),
  price: price.required()
})

const updateProductSchema = Joi.object({
  name: name,
  completed: Joi.boolean()

})

const getProductSchema = Joi.object({
  id: id.required(),

});


module.exports = {createProductSchema, updateProductSchema, getProductSchema}
