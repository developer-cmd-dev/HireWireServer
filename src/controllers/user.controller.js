import User from '../models/User.models.js'

const getAllUsers = async(res,req)=>{
    
    return User.findAll;
}

export {getAllUsers}