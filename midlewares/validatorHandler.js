const boom =require('@hapi/boom');

function validatorHandler(){
    return(req,res,next)=>{
        const data=req[property]
        const {error}= isSchema.validate(data,{abortEarly:false})
        if(error){
            next(boom.badRequest(error))
        }
        next()
    }
}
module.exports= validatorHandler