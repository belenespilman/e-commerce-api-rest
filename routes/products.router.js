const express = require('express');
const ProductsService = require('./../services/product.service')

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
})



router.get('/:id', (req, res)=> {
  const { id } = req.params;
 const product = service.findOne(id);
 res.json(product);

 });


router.post('/', (req, res) => {
  const body= req.body;
  const newProduct = service.create(body);
  res.json(newProduct)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json(service.update(id, body));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json(service.delete(id));
  });



module.exports = router;
