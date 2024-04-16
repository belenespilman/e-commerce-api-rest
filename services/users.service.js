const { faker } = require('@faker-js/faker')

class UsersService {
  constructor () {
    this.users = [];
    this.generate();

  }

  generate(){
    const limit = 20
    for (let i= 0; i < limit; i++) {
      this.users.push({
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        image: faker.image.avatar(),
        id: faker.string.uuid()
      })
    }
  }

  create(body){
    const user = {name: body.name, lastname: body.lastname , image: body.image,  id: faker.string.uuid()}
    this.users.push(user)
    return user

      }

  find (){
    return this.users
  }

  findOne(id){
    const result = this.users.find(item => item.id === id)
    return result
  }

  update(id, body){
    const index = this.users.findIndex(item => item.id === id)
    if (index == -1) {
      return "not found"
    }
    const oldUser = this.users[index]
    const newUser = {
      id,
      name: body.name || oldUser.name,
      lastname: body.lastname || oldUser.lastname,
      image: body.image || oldUser.image
    }

    this.users[index] = newUser
    return "updated"
  }

  delete(id){
    const index = this.users.findIndex(item => item.id === id)
    if (index == -1) {
      return "no user was found"
    }
    this.users.splice(index, 1);
    return "deleted"
  }





}

module.exports = UsersService;
