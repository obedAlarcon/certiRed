const Joi = require('joi');


const id =Joi.number().integer();
const userId = Joi.number().integer();
const type= Joi.string();
const profile=Joi.string();
const experience=Joi.string();
const location=Joi.string();
const active= Joi.boolean();
const aviable=Joi.boolean();
const inactiveUntil=Joi.date();


const createTechnicianSchema=Joi.object({
    userId:userId.required(),
    type:type.required(),
    profile:profile.required(),
    experience:experience.required(),
    location:location.required(),
    active:active.required(),
    aviable:aviable.required(),
    inactiveUntil:inactiveUntil.required(),

})

const updateTechnicianSchema=Joi.object({
    userId:userId,
    type:type,
    profile:profile,
    experience:experience,
    location:location,
    active:active,
    aviable:aviable,
    inactiveUntil:inactiveUntil,
})

const getTechnicianSchema=Joi.object({
    id:id.required()
})

module.exports={
    createTechnicianSchema,
    updateTechnicianSchema,
    getTechnicianSchema
    
}