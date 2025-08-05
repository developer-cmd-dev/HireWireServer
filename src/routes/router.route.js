import { Router } from "express";
import { healthController } from "../controllers/health.controller.js";
import {signUp,getAllUsers, login} from "../controllers/user.controller.js"
import { authmiddleware } from "../middlewares/auth.middleware.js";


const router=Router();

router.route("/health-check").get(healthController)

router.route("/auth/signup").post(signUp)
router.route("/auth/login").get(authmiddleware,login)
router.route("/auth/getallusers").get(getAllUsers)


export {router}