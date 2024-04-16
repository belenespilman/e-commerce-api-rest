const express = require('express')
const UsersService = require('../services/users.service')

const router = express.Router()
const service = new UsersService();

router.get('/', async (req, res)=> {
  const users = await service.find()
  res.json(users);
})

router.get('/:id',async (req, res) => {
  const { id } = req.params;
  const user = await service.findOne(id)
  res.json(user)
})


router.post('/', async (req, res) => {
  const body = req.body;
  const user = await service.create(body)
  res.json(user)
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json(await service.update(id, body))
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  res.json(await service.delete(id))
});



module.exports = router;
