const boom = require('@hapi/boom');


class CertificationService{
  

    async create(){
        const newCertification= await models.create(data);
        return newCertification;

    }

    async find(){
        const response= await models.Certification.findAll();
        return response;
    }
  async findOne(id){
    const certification = await Certification.findByPk(id);
    if(!certification){
        throw boom.notFound('cetification not found');
    }

    return certification;
  }
  
  async update(id, changes){
    const certification = await this.findOne(id);
    const response = await certification.update(changes);
    return response
  }




}
module.exports = CertificationService;