const express=require('express');

const {getTechnicianSchema, updateTechnicianSchema,createTechnicianSchema}=require('./../schemas/technicianSchema');

const TechnicianService = require('./../services/technician.service');


const router = express.Router();

const service = new TechnicianService();


router.get('/', async( req, res, next)=>{
    try {
        const technician = await service.find();
        res.json(technician);
    } catch (error) {
        next(error);
        
    }
})


router.get('/:id', async(req, res, nest)=>{
    try {
        const {id}=req.params;
        const technician = await service.findOne(id);
        res.json(technician)
    } catch (error) {
        next (error);
        
    }
})

  router.post('/',async(req,res,next)=>{
    try {
         const body=req.body;
         const newTechnician = await service.create(body);
         res.status(201).json(newTechnician);
    } catch (error) {
        next(error);
        
    }
  })


  router.patch('/:id', async(req,res,nex)=>{
    try {
        const {id}=req.params;
        const body=req.body;
        const technician= await service.findOne(id, body);
        res.json(technician);
    } catch (error) {
        next(error);
        
    }
  })

  router.delete('/:id', async(req,res,next)=>{
    try {
        const {id}=req.params;
        await service.delete(id);
        res.status(201).json({id});
    } catch (error) {
        next(error);
        
    }
  })

  module.exports=router;