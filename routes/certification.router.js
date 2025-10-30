const express =require('express');

const {getCertificateSchema, updateCertificationSchema, createCertificationSchema}=require('./../schemas/certificationSchema');

const CertificationService = require('./../services/certification.service');

const router=express.Router();

const service = new CertificationService();

router.get('/',async(req,res, next)=>{
    try {
        const certification = await service.find();
        res.json(certification);
        next(error);
    } catch (error) {
        next(error);
        
    }
})

 router.get('/:id',async(req,res,next)=>{
    try {
        const{id}=req.params;
        const certification= await service.findOne(id);
        res.json(certification);
    } catch (error) {
        next(error);
        
    }
 })


   router.post('/',async(req,res,next)=>{
     
       try {
          const body= req.body;
       const newCertification= await service.create(body);
       res.status(201).json(newCertification);

       } catch (error) {
        next(error);
       }
   })




 router.patch('/:id',async(req,res,next)=>{
    try {
        const {id}=req.params;
        const body=req.body;
        const certification = await service.update(id, body);
        res.json(certification);
    } catch (error) {
        next(error);
        
    }
 })

 router.delete('/:id', async ( req, res ,next)=>{
    try {
        const {id}=req.params;
        await service.delete(id);
        res.status(201).json({id});
    } catch (error) {
        next(error);
    }
 })
 module.exports=router