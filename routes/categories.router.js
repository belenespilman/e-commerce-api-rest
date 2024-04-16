const express = require('express');
const CategoriesService = require('../services/categories.service');

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res) => {
const categories = await service.find();
res.json(categories)

})

router.get('/:id', async (req, res) => {
const { id } = req.params;
const category = await service.findOne(id);
res.json(category)

})

router.post('/', async (req, res) => {
  const body = req.body;
  const category= await service.create(body)
  res.status(201).json(category)
})

router.patch('/:id', async  (req, res) => {
const { id } = req.params;
const body = req.body
res.json(await service.update(id, body))
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  res.json(await service.delete(id))
})





module.exports= router;
