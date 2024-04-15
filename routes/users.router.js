const express = require('express')
const { faker } = require('@faker-js/faker')
const UsersService = require('../services/users.service')

const router = express.Router()
const service = new UsersService();

router.get('/', (req, res)=> {
  const users = service.find()
  res.json(users);
})


router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    image: faker.image.avatar(),
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const user = service.create(body)
  res.json(user)
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'updated',
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  })
})



module.exports = router;
