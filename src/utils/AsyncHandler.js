const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        console.log(req.url);
        Promise.resolve(requestHandler(req,res,next)).catch(error=>next(error));
    }
}

export{asyncHandler}