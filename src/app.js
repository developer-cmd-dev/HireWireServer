import express,{urlencoded} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import userRouter from './routes/healthcheck.routes.js'
import { errorHandler } from './middlewares/error.middleware.js';
import { asyncHandler } from './utils/AsyncHandler.js';
const app=express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({
    limit:'50kb'
}));
app.use(cookieParser())
app.use(express.urlencoded({extended:true,limit:'50kb'}));

app.use('/api/v1',userRouter)
app.use(errorHandler)


export default app;