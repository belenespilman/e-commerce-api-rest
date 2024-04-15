const express = require('express');
const CategoriesService = require('../services/categories.service');

const router = express.Router();
const service = new CategoriesService();

router.get('/', (req, res) => {
const categories = service.find();
res.json(categories)

})

router.get('/:id', (req, res) => {
const { id } = req.params;
const category = service.findOne(id);
res.json(category)

})

router.post('/', (req, res) => {
  const body = req.body;
  const category= service.create(body)
  res.status(201).json(category)
})

router.patch('/:id', (req, res) => {
const { id } = req.params;
const body = req.body
res.json(service.update(id, body))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json(service.delete(id))
})





module.exports= router;
