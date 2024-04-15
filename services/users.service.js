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

  findOne(){}

  update(){}

  delete(){}





}

module.exports = UsersService;
