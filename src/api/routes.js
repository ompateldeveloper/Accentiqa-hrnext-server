import { Router } from "express";
import routerv1 from "./v1/routesv1.js";

const router =  Router();
router.use('/api',routerv1)
export default router;