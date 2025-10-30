const { Technician, TechnicianSchema } = require('./technician.model');
const {Subscription, SubscriptionSchema}=require('./subscription.model');
const {User, UserSchema}=require('./user.model');
const {Company, CompanySchema}=require('./company.model');
 const {Certification, CertificationSchema}=require('./certification.model');


  function setupModels(sequelize){
    User.init(UserSchema,User.config(sequelize));
    Technician.init(TechnicianSchema, Technician.config(sequelize));
    Subscription.init(SubscriptionSchema, Subscription.config(sequelize));
    Company.init(CompanySchema, Company.config(sequelize));
    Certification.init(CertificationSchema, Certification.config(sequelize));


    
  }

module.exports=setupModels;