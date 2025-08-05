import e from 'express';
import User from '../models/User.models.js'
import ApiResponse from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/AsyncHandler.js'
import { CustomError } from '../utils/customError.js';


const getAllUsers = asyncHandler(async (req, res) => {
    const user= await User.findAll({attributes:{exclude:['password','role','createdAt','updatedAt']}});
    res.status(201).json(new ApiResponse(201,user ))
})


const signUp = asyncHandler(async (req, res) => {
    const {firstname,lastname,email,password,role,isActive}=req.body;
    const response = await User.create({
        firstname,
        lastname,
        email,
        password,
        role,
        isActive,
    })
    const userData=response.toJSON()
    delete userData.password
    res.status(200).json(new ApiResponse(201, userData));
})

const login =asyncHandler(async(req,res)=>{
    res.status(200).json(new ApiResponse(200,"","login successfully"));
})


export { getAllUsers, signUp,login }