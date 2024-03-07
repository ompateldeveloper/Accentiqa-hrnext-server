import { Router } from "express";
import { authRouter } from "./routers/AuthRoutes.js";
import { employeeRouter } from "./routers/EmployeeRoutes.js";
import { AuthMiddleware } from "./middlewares/AuthMiddleware.js";
import { miscRouter } from "./routers/MiscRoutes.js";

const routerv1 =  Router();
routerv1.use('/v1/emp',AuthMiddleware,employeeRouter);
routerv1.use('/v1/misc',AuthMiddleware,miscRouter)
routerv1.use('/v1',authRouter)
export default routerv1;