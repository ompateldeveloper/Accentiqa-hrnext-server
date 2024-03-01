import { Router } from "express";
import { signin } from "../controllers/AuthController.js";

export const authRouter = Router();

authRouter.post('/auth/signin',signin)