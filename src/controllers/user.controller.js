import User from '../models/User.models.js'
import ApiResponse from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/AsyncHandler.js'
import { CustomError } from '../utils/customError.js';
import JwtService from '../service/JwtService.js';
import bcrypt from 'bcryptjs';
const getAllUsers = asyncHandler(async (req, res) => {
    const user = await User.findAll({ attributes: { exclude: ['password', 'role', 'createdAt', 'updatedAt'] } });
    res.status(201).json(new ApiResponse(201, user))
})


const signUp = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password, role, isActive } = req.body;
    const response = await User.create({
        firstname,
        lastname,
        email,
        password,
        role,
        isActive,
    })
    const userData = response.toJSON()
    delete userData.password
    res.status(200).json(new ApiResponse(201, userData));
})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) throw new CustomError(404, "Invalid Credentials");
    const userdata = await User.findOne({ where: { email } });
    if (!userdata) throw new CustomError(401, "User not found");
    const isPasswordCorrect = await bcrypt.compare(password, userdata.password);
    if (!isPasswordCorrect) throw new CustomError(404, "Wrong Password");
    const generatetoken = JwtService.sign({email:userdata.email,role:userdata.role});
    if(generatetoken==""||!generatetoken) throw new CustomError(500,"Internal Server error");
    res.set("Access-Token",generatetoken)
    res.status(200).json(new ApiResponse(200,"", "Login successful"))
})


export { getAllUsers, signUp, login }