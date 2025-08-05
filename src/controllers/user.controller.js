import User from '../models/User.models.js'
import ApiResponse from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/AsyncHandler.js'
import { CustomError } from '../utils/customError.js';

const getAllUsers = asyncHandler(async(req, res)=>{
    const users =await User.findAll();
    if(users.length==0) throw new CustomError(404,"user is empty")
     res.status(201).json(new ApiResponse(201,users))
})

export {getAllUsers}