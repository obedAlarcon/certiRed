const {Sequelize, Model, DataTypes}=require('sequelize');

const CERTIFICATION_TABLE = 'certification';

const CertificationSchema={
    id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER,

    },
    techId:{
        allowNull:false,
        type:DataTypes.INTEGER,
        field:'tech_id',
    },
    certificate:{
        allowNull:false,
        type:DataTypes.STRING
    },
    entity:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    issueDate:{
        allowNull:false,
        type:DataTypes.DATE,
        field:'issue_date',
    },
    expirationDate:{
        allowNull:false,
        type:DataTypes.DATE,
        field:'expiration_date'
    },
    fielUrl:{
        allowNull:false,
        type:DataTypes.STRING,
        field:'fiel_url'
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

class Certification extends Model{
    static associate(models){

    }

    static config (sequelize){
        return{
            sequelize,
            tableName:CERTIFICATION_TABLE,
            modelName:'Certification',
            timeStamps:false
        }
    }
}
module.exports={
    CERTIFICATION_TABLE,
    Certification,
    CertificationSchema
}