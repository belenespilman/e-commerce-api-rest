const express = require('express');
const CategoriesService = require('../services/categories.service');

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
res.json(categories)
  }
  catch (error){
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
res.json(category)
  }  catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const category= await service.create(body)
    res.status(201).json(category)
  } catch (error) {
    next(error)
  }

})

router.patch('/:id', async  (req, res, next) => {
  try {
    const { id } = req.params;
const body = req.body
res.json(await service.update(id, body))
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
  res.json(await service.delete(id))
  } catch (error) {
    next(error)
  }
})





module.exports= router;
