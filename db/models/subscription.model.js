const {Sequelize,Model, DataTypes}=require('sequelize');

const SUBSCRIPTION_TABLE='subscription';

const SubscriptionSchema={
    id:{
        AllowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    userId:{
        AllowNull:false,
        type:DataTypes.INTEGER,
        field:'user_id'
    },
    typePlan:{
        AllowNull:false,
        type:DataTypes.STRING,
        field:'type_plan'
    },

    startDate:{
        AllowNull:false,
        type:DataTypes.DATE,
        field:'start_date',
    },
    endDate:{
        AllowNull:false,
        type:DataTypes.DATE,
        filed:'end_date'

    },
    active:{
        AllowNull:false,
        type:DataTypes.BOOLEAN,

    },
     createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
    }
}

class Subscription extends Model {
    static associate(models){

    }
    static config (sequelize){
        return{
            sequelize,
            tableName:SUBSCRIPTION_TABLE,
            modelName:'Subscription',
            temeStamps:false
        }
    }
}
module.exports={
    SUBSCRIPTION_TABLE,
    Subscription,
    SubscriptionSchema
}