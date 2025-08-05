import e from "express";
import User from "../models/User.models.js";
import bcrypt from "bcryptjs";
import { CustomError } from "../utils/customError.js";
import JwtService from "../service/JwtService.js";

const authmiddleware = async (req, res, next) => {

        const authHeader=req.headers.authorization
        if(!authHeader||!authHeader.startsWith("Bearer ")) return next(new CustomError(404,"Invalid Token"));

        try {
            const extractToken=authHeader.split(" ")[1];
            const decode=JwtService.verify(extractToken);
        
        req.user=decode;
        next()
        } catch (error) {
            next(new CustomError(404,"Invalid or expired token"))
        }

}

export { authmiddleware }