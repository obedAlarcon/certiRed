const express= require('express');

const usersRouter=require('./users.router');
const technicianRouter=require('./technician.router');
 const subscriptionRouter=require('./subscription.router');
 const companyRouter=require('./company.router');
 const certificationRouter=require('./certification.router');


 function routerApi(app){
    const router = express.Router();

    app.use('/api/v1',router);

    router.use('/users',usersRouter);
    router.use('/technician',technicianRouter);
    router.use('/subscription',subscriptionRouter);
    router.use('/company',companyRouter);
    router.use('/certification',certificationRouter);
 }
 module.exports=routerApi;