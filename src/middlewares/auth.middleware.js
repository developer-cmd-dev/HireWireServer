import e from "express";
import User from "../models/User.models.js";
import bcrypt from "bcryptjs";
import { CustomError } from "../utils/customError.js";

const authmiddleware = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        req.user = user;
        next(); 

    } catch (error) {
        next(error); 
    }
}

export { authmiddleware }