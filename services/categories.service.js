

class CategoriesService{


  generate(){
    const limit = 10;
    for (let i=0; i < limit; i++){
      this.categories.push({
        name: faker.word.sample(),
        id: faker.string.uuid(),
      })
    }
  }

  async create(body){
    const category = { name: body.name, id: faker.string.uuid() }
    this.categories.push(category)
    return category
  }

  async find(){
    return this.categories;
  }

  async findOne(id){
    const result = this.categories.find(item => item.id === id)
    return result
  }

  async update(id, body){
    const index = this.categories.findIndex(item => item.id === id)
    if (index == -1) {
      return "no category found"
    }
    this.categories[index] = { id, name: body.name }
    return "updated"
  }

  async delete(id){
    const index = this.categories.findIndex(item => item.id === id)
    if (index == -1) {
      return "no category found"
  }
  this.categories.splice(index, 1);
  return "deleted"


  }
}

module.exports= CategoriesService;
