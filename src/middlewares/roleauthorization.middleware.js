import ApiResponse from "../utils/ApiResponse.js";
import { CustomError } from "../utils/customError.js";


const roleBasedAuthorization = (...allowedRoles)=>{
    return (req,res,next)=>{
        const user=req.user;
        if(!user) throw new CustomError(404,"User not found");
        if(!allowedRoles.includes(user.data.role))return res.status(403).json(new ApiResponse(403,"Access Denied! Role doesn't match.","false"));
        req.user=user;
    next()
    }

}

export {roleBasedAuthorization}