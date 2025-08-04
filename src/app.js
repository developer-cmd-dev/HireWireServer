import express,{urlencoded} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import userRouter from './routes/healthcheck.routes.js'
const app=express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({
    limit:'50kb'
}));
app.use(cookieParser)
app.use(express.urlencoded({extended:true,limit:'50kb'}));

app.use('/app/v1',userRouter)


export default app;