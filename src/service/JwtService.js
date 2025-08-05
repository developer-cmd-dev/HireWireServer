import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config()


class JwtService{


    constructor(secret,expiresIn="1h"){
        this.secret=secret
        this.expiresIn=expiresIn
    }

    sign(payload){
        jwt.sign(payload,this.secret,{expiresIn:this.expiresIn});
    }

    verify(token){
        return jwt.verify(token,this.secret);
    }

    decode(token){
        return jwt.decode(token,this.secret)
    }


}

export default new JwtService(process.env.JWT_SECRET_KEY,"1h")