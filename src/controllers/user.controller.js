import User from '../models/User.models.js'
import ApiResponse from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/AsyncHandler.js'

const getAllUsers = asyncHandler(async(req, res)=>{
     res.status(201).json(new ApiResponse(201,{"message":"Everything is ok"},))
})

export {getAllUsers}