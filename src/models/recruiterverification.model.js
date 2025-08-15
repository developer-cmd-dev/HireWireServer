import { DataTypes } from 'sequelize'
import {sequelize} from './sequalize.js'

const RecruiterVerfication=sequelize.define("recruiter_verfication",{

    recruiter_verification_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    gstNo:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    website:{
        type:DataTypes.STRING,
        allowNull:false
    },
    documents:{
        type:DataTypes.JSON,
        allowNull:false
    }
},
{
    timestamps:true,
    tableName:"recruiter_verification"
})

export default RecruiterVerfication;