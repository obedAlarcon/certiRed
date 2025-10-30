



class TechnicianService{


   async create(data){
    const newTechnician = await models.Technician.create(data);

    return newTechnician;
   }

   async find(){
    const response = await models.Technician.findAll()
    return response;
   }

  async findOne(id){
    const technician = await models.Technician.findByPk(id);
    if(!technician){
        throw boom.notFound('technician not found');
    }
    return technician;
  }

    async update(id, changes){
        const technician = await this.findOne(id);
        const response=await technician.update(changes);
        return response;
    }
  async delete(id){
    const technician= await this.findOne(id);
    await technician.destroy();
    return {id}
  }



}
module.exports=TechnicianService;