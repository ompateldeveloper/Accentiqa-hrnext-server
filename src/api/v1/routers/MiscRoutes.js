import { Router } from "express";
import { getDept, getDesig, getProj, getdiv,addMisc } from "../controllers/MiscController.js";


export const miscRouter = Router();
miscRouter.get('/departments',getDept)
miscRouter.get('/divisions',getdiv)
miscRouter.get('/designations',getDesig)
miscRouter.get('/projects',getProj)
miscRouter.post('/:field',addMisc)


