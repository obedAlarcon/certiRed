const express=require('express');


const {getSubscriptionSchema, updateSubscriptionSchema, createSubscriptionSchema}=require('./../schemas/subscriptionSchema');



const SubscriptionService = require('./../services/subscription.service');

const router = express.Router();

const service = new SubscriptionService();

router.get('/',async(req,res,next)=>{
    try {
        const subscription = await service.find();
        res.json(subscription);

    } catch (error) {
        next(error);
        
    }
})

router.get('/:id', async(req,res,nest)=>{
    try {
        const {id}=req.params;
        const subscription = await service.findOne(id);
        res.json(subscription);
    } catch (error) {
        next(error);
        
    }
})

router.patch('/:id', async(req,res,next)=>{
    try {
        const {id}=req.params;
        const body=req.body
        const subscription = await service.update(id,body);
        res.status(201).json(subscription);
    } catch (error) {
        next(error);
        
    }
})

router.delete('/:id',async(req,res,next)=>{
    try {
         const {id}=req.params;
         await service.delete(id);
         res.status(201).json({id});
    } catch (error) {
        next(error);
        
    }
})

module.exports=router;