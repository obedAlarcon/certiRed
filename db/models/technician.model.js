
const {Sequelize, Model, DataTypes}=require('sequelize');


const TECHNICIAN_TABLE ='technician';

const TechnicianSchema ={
    id:{
        allowNull:false,
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },

    userId:{
        allowNull:false,
        type:DataTypes.INTEGER,
        field:'user_id'
    },
    type:{
        allowNull:false,
        type:DataTypes.STRING
    },
    profile:{
        allowNull:false,
        type:DataTypes.STRING

    },
   experience:{
    allowNull:false,
    type:DataTypes.STRING,
   },
   location:{
    allowNull:false,
    type:DataTypes.STRING
   },
   active:{
    allowNull:false,
    type:DataTypes.BOOLEAN
   },
   aviable:{
    allowNull:false,
    type:DataTypes.BOOLEAN
   },
   
   inactiveUntil:{
    allowNull:false,
    type:DataTypes.DATE,
    field:'inactive_until'
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

class Technician extends Model{
  static associate(models){

  }
  static config(sequelize){
    return {
        sequelize,
        tableModel:TECHNICIAN_TABLE,
        modelName:'Technician',
        timeStamps:false
    }
  }
}
module.exports={
    TECHNICIAN_TABLE,
    Technician,
    TechnicianSchema
}