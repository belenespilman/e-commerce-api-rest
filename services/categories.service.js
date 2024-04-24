const { models } = require('./../libs/sequelize')

class CategoriesService{



  async create(body){
   const res = await models.Categories.create(body);
   return res;
  }

  async find(){
    const res = await models.Categories.findAll();
    return res;
  }

  async findOne(id){
    const res= await models.Categories.findOne({
      where: {
        id : id
      }
    });
    return res;
  }

  async update(id, body){
    const res = await models.Categories.update(body, {
      where: {
        id: id
      }
    })
    return res;
  }

  async delete(id){
    const res = await models.Categories.destroy({
      where: {
        id: id
      }
    })
    return res;
  }
}

module.exports= CategoriesService;
