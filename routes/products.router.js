const express = require('express');
const ProductsService = require('./../services/product.service')
const validatorHandler = require('./../middlewares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema } = require('./../DTOs/product.dto')



const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error)
  }

})



router.get('/:id',
validatorHandler(getProductSchema, 'params'),
async (req, res, next)=> {
    try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product)
  } catch (error) {
    next(error);
  }
 }
);


router.post('/',
validatorHandler(createProductSchema, 'body'),
async (req, res) => {
  const body= req.body;
  const newProduct = await service.create(body);
  res.json(newProduct)
})

router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res) => {
  try {
  const { id } = req.params;
  const body = req.body;
  res.json(await service.update(id, body));
} catch (error) {
  res.status(404).json({
    messsage: error.message
  });
}
});

router.delete('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res) => {
  const { id } = req.params;
  res.json(await service.delete(id));
  });



module.exports = router;
