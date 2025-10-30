const boom = require('@hapi/boom');


class CompanyService{

    async create( data){
      const newCompany = await models.create(data);
       return newCompany
    }
   
 async find(){
    const response = await models.Company.findAll();
    return response;
 }
  
 async findOne(id){
    const company = await models.Company.findByPk(id);
    if(!company){
        throw boom.notFound('company not found')
    }
    return company;
 }

 async update(id,changes){
    const company= await this.findOne(id);
    const response = await company.update(id,changes);
    return response;
 }
  
 async delete(id){
    const company = await this.findOne(id);
    await company.destroy();
    return {id}
 }



}
module.exports=CompanyService;