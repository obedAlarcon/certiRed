const Joi = require('joi');

const id=Joi.number().integer();
const name=Joi.string();
const email= Joi.string().email();
const password = Joi.string();
const phone=Joi.string();
const role =Joi.string();
const verified=Joi.boolean();


const createUserSchema=Joi.object({
    id:id.required(),
    name:name.required(),
    email:email.required(),
    password:password.required(),
    phone:phone.required(),
    role:role.required(),
    verified:verified.required(),

})


const updateUserSchema=Joi.object({
    name:name,
    email:email,
    phone:phone,
    role:role,
    verified:verified,
})

const getUserSchema=Joi.object({
    id:id.required()
})

module.exports={
    createUserSchema,
    updateUserSchema,
    getUserSchema
}