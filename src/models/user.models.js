import {DataTypes} from 'sequelize'
import {sequelize} from './sequalize.js'
import bcrypt from 'bcryptjs';



const User = sequelize.define("user", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: {
      msg:"This email is already registered. Please use a different email.",
    },
    validate: { isEmail: true },
    
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  role: { 
    type: DataTypes.ENUM("ADMIN", "RECRUITER", "CANDIDATE"),
    defaultValue:"CANDIDATE",
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  is_company_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: "user",
  timestamps: true, 
  hooks:{
    beforeCreate:async(user)=>{
      if(user.password){
        const salt= await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(user.password,salt);
      }
    },
    beforeUpdate:async(user)=>{
         if(user.changed("password")){
        const salt= await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(user.password,salt);
      }
    }
  }
},
);


export default User;