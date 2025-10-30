const express =require('express');

const{getUserSchema,updateUserSchema,createUserSchema}=require('./../schemas/userSchema');
const UserService = require('../../portafolio/portafolio/services/user.service');
const router=express.Router();


const service = new UserService();


router.get('/', async(req, res, next)=>{
    try {
        const user= await service.find();
        res.json(user);
    } catch (error) {
        next(error);
    }
})

router.get('/:id', async(req, res,next)=>{
    try {
        const {id}=req.params;
        const user= await service.findOne(id);
        res.json(user)
    } catch (error) {
        next(error)
    }
})


router.post('/',async( req, res, next)=>{
    try {
        const body=req.body;
        const newUser= await service.create(body);
       res.status(201).json(newUser);

    } catch (error) {
        next(error);
    }
})


router.patch('/:id',async(req, res,next)=>{
    try {
        const {id}=req.params;
        const body=req.body;
        const user= await service.update(id,body);
        res.json(user)
    } catch (error) {
        next(error);
    }
})

router.delete('/:id',async(req,res,next)=>{
    try {
        const {id}=req.params;
        await service.delete(id);
        res.status(201).json(id);
    } catch (error) {
        next(error);
    }
})

module.exports=router;