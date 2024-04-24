
const { models } = require('./../libs/sequelize')

class UsersService {


  async create(body){
    const res = await models.User.create(body)
    return res

      }

  async find () {
    const res = await models.User.findAll({
      include: ['customer']
    });
    return res;
  }

  async findOne(id){
    const res= await models.User.findOne({
      where: {
        id: id
      }
   })

    return res
  }

  async update(id, body){
    await models.User.update(
    body, {
      where: {
        id: id
      }
    })

    return "updated"
  }

  async delete(id){
    await models.User.destroy({where: {id: id}} )
    return 'deleted'
  }





}

module.exports = UsersService;
