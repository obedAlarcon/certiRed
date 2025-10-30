const boom = require('@hapi/boom');

class SubscriptionService{

   
    async create(data){
        const newSubscription = await models.Subscription.create(data);
        return newSubscription;
    }
  

    async find(){
        const response = await models.Subscription.findAll();
        return response;
    }

    async findOne(id){
        const response = await models.Subscription.findByPk(id);
      if(!subscription){
        throw boom.notFound(' subscription not found')
      }
        return response;
    }

    async update(id, changes){
        const subscription = await this.findOne(id);
        const response = await subscription.update(changes);
        return response;
    }


    async delete(id){
         const subscription = await this.delete(id);
         await subscription.destroy();
         return {id}
    }
}


module.exports = SubscriptionService;