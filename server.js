import app from './src/app.js'
import {sequelize} from './src/models/sequalize.js'
import dotenv from "dotenv";
dotenv.config();
const PORT= 3000;

sequelize.sync({alter:true}).then(()=>{
    console.log("Database Synced");
    
    app.listen(PORT,()=>console.log(`☺Server is running on ${PORT} `))
}).catch(err=>console.log(err))