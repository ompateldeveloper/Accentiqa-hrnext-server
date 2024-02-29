import { Router } from "express";
import routerv1 from "./v1/routes";

const router =  Router();
router.get('/api',routerv1)
export default router;