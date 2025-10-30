 const Joi= require('joi');


 const id = Joi.number().integer();
 const userId= Joi.number().integer();
 const name = Joi.string();
 const nit =Joi.string();
 const phone = Joi.string();
 const email = Joi.string().email();
 


 const createCompanySchema=Joi.object({
    userId:userId.required(),
    name:name.required(),
    nit:nit.required(),
    phone:phone.required(),
    email:email.required(),
 })

 const updateCompanySchema=Joi.object({
    userId:userId,
    name:name,
    nit:nit,
    phone:phone,
    email:email,
 })

 const getCompanySchema=Joi.object({
    id:id.required(),
 })

 module.exports={
    createCompanySchema,
    updateCompanySchema,
    getCompanySchema
 }