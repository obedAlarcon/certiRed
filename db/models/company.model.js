const {Sequelize, Model, DataTypes}=require('sequelize');

const COMPANY_TABLE = 'company';

const CompanySchema={

    id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    userId:{
        allowNull:false,
        type:DataTypes.INTEGER,
        field:'user_id',
    },
    name:{
        allowNull:false,
        type:DataTypes.STRING,

    },
    nit:{
        allowNull:false,
        type:DataTypes.STRING
    },
    phone:{
        allowNull:false,
        type:DataTypes.STRING
    },
    email:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true
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

class Company extends Model{
    static associate(mopdels){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName:COMPANY_TABLE,
            modelName:'Company',
            temeStamps:false
        }
    }
}

module.exports={
    COMPANY_TABLE,
    Company,
    CompanySchema
}