const express = require('express')
const UsersService = require('../services/users.service')

const router = express.Router()
const service = new UsersService();

router.get('/', (req, res)=> {
  const users = service.find()
  res.json(users);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id)
  res.json(user)
})


router.post('/', (req, res) => {
  const body = req.body;
  const user = service.create(body)
  res.json(user)
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json(service.update(id, body))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json(service.delete(id))
});



module.exports = router;
