import User from '../models/User.models.js'
import ApiResponse from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/AsyncHandler.js'
import { CustomError } from '../utils/customError.js';

const healthController = asyncHandler(async(req, res)=>{
     res.status(201).json(new ApiResponse(201,"Health is good"))
})

export {healthController}