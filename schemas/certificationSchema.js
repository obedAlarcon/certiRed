const Joi= require('joi');


const id =Joi.number().integer();
const techId=Joi.number().integer();
const certificate =Joi.string();
const entity=Joi.string();
const issueDate=Joi.date();
const expirationDate=Joi.date();
const fielUrl=Joi.string();


const createCertificationSchema=Joi.object({
    techId:techId.required(),
    certificate:certificate.required(),
    entity:entity.required(),
    issueDate:issueDate.required(),
    expirationDate:expirationDate.required(),
    fielUrl:fielUrl.required(),
})

const updateCertificationSchema=Joi.object({
    techId:techId,
    certificate:certificate,
    entity:entity,
    issueDate:issueDate,
    expirationDate:expirationDate,
    fielUrl:fielUrl,
})

const getCertificateSchema=Joi.object({
    id:id.required(),
})

module.exports={
    createCertificationSchema,
    updateCertificationSchema,
    getCertificateSchema
}