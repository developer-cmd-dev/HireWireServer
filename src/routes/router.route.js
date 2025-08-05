import { Router } from "express";
import { healthController } from "../controllers/health.controller.js";
import {signUp,getAllUsers} from "../controllers/user.controller.js"


const router=Router();

router.route("/health-check").get(healthController)

router.route("/auth/signup").post(signUp)


export {router}