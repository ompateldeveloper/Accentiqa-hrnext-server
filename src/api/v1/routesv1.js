import { Router } from "express";
import { authRouter } from "./routers/AuthRoutes.js";

const routerv1 =  Router();
routerv1.use('/v1',authRouter)
export default routerv1;