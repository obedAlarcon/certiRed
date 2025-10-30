const {Sequelize, Model}= require('sequelize');


const USER_TABLE = 'user';

const UserSchema={
    id:{
        AllowNull:false,
        type:DataTypes. INTEGER,
        autoIncrement:true,
        primaryKey:true,

    },
    name:{
        AllowNull:false,
       type: DataTypes.STRING,

    },
    email:{
        AllowNull:false,
        DataTypes:STRING,
        Unique:true
    },
    password:{
        AllowNull:false,
        type:DataTypes.STRING,
    },
    phone:{
        AllowNull:false,
        type:DataTypes.STRING,

    },
    role:{
        AllowNull:false,
        type:DataTypes.STRING,
    },
    verified:{
        AllowNull:false,
        type:DataTypes.BOOLEAN
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

class User extends Model{
    static associate(models){

    }

 static config(sequelize){
    return{
        sequelize,
        tableName:USER_TABLE,
        modelTable:'User',
        timeStamps:false
    }
 }



}

module.exports ={
    USER_TABLE,
    User,
    UserSchema
}