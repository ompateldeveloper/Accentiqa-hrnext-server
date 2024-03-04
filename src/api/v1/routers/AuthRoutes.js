import { Router } from "express";
import { signin, signup, getMe } from "../controllers/AuthController.js";

import {AuthMiddleware} from '../middlewares/AuthMiddleware.js'

export const authRouter = Router();

authRouter.post('/auth/signup',signup)
authRouter.post('/auth/signin',signin);
authRouter.get('/auth/me',AuthMiddleware,getMe)