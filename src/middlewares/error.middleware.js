import { CustomError } from "../utils/customError.js";


const errorHandler =(err,req,res,next)=>{
    if(err instanceof CustomError){
        res.status(err.statusCode).json({
            success:err.success,
            message:err.message,
            errors:err.errors,
            stack:err.stack
        })
    }else if(  err.name === "SequelizeUniqueConstraintError") {
        return res.status(400).json({
            success: false,
            message: err.errors[0].message || "Duplicate value entered"
        });
    }
    else{
    res.status(500).json({
            success:false,
            message:"Internal server error",
            stack: process.env.NODE_ENV === "development" ? err.stack : undefined,

    })
}
}

export {errorHandler}