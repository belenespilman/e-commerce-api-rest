const express = require('express');
const ProductsService = require('./../services/product.service')

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
})



router.get('/:id', async (req, res)=> {
  const { id } = req.params;
 const product = await service.findOne(id);
 res.json(product);

 });


router.post('/', async (req, res) => {
  const body= req.body;
  const newProduct = await service.create(body);
  res.json(newProduct)
})

router.patch('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  res.json(await service.delete(id));
  });



module.exports = router;
