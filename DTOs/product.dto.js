const Joi = require('joi');

const id = Joi.string();
const name= Joi.string().min(3).max(15);
const description= Joi.string().min(6)
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  image: image.required(),
  description: description.required(),
  price: price.required()
})

const updateProductSchema = Joi.object({
  name: name,
  description: description,
  completed: Joi.boolean()

})

const getProductSchema = Joi.object({
  id: id.required(),

});


module.exports = {createProductSchema, updateProductSchema, getProductSchema}
