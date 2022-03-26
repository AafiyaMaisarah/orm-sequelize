import {DataTypes, INTEGER, Sequelize} from 'sequelize';

const sequelize = new Sequelize("acess","root","root",{
host:'localhost',
dialect:'mysql',
port:'3306'
});
const User = sequelize.define('user',{
    user_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
   address: {
       type:DataTypes.STRING,
       defaultvalue:'NA'
   }
    },{

    


   
       timestamps:false
   
    
    
})
const Todo = sequelize.define('todo',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        defaultvalue:"-"
    }
})
sequelize.sync({})
.then(res=>console.log("user model sync succeess",res))
.catch(err=>console.log("failed to sync user model",err))
sequelize
.authenticate()
.then(() => console.log("connection successful to the database"))
.catch(err => console.log("connection to db failed",err));