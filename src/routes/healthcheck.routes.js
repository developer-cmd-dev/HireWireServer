import {Router} from 'express'
import { getAllUsers } from '../controllers/user.controller.js';


const router = Router();

router.route("/user").get(getAllUsers);

export default router;