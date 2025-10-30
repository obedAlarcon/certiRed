const Joi = require('joi');


const id =Joi.number().integer();
const userId=Joi.number().integer();
const typePlan=Joi.string();
const startDate=Joi.date();
const endDate = Joi.date();
const active=Joi.boolean();


const createSubscriptionSchema=Joi.object({
    userId:userId.required(),
    typePlan:typePlan.required(),
    startDate:startDate.required(),
    endDate:endDate.required(),
    active:active.required(),
})

const updateSubscriptionSchema=Joi.object({
    userId:userId,
    typePlan:typePlan,
    startDate:startDate,
    endDate:endDate,
    active:active,
})

const getSubscriptionSchema=Joi.object({
    id:id.required()
})

module.exports={
    createSubscriptionSchema,
    updateSubscriptionSchema,
    getSubscriptionSchema
}