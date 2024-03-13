import { Router } from "express";
import { addMisc, genEmpNo, deleteMisc, updateMisc, getMisc } from "../controllers/MiscController.js";


export const miscRouter = Router();

miscRouter.get('/empnogen',genEmpNo)
miscRouter.get('/:field',getMisc)
miscRouter.post('/:field',addMisc)
miscRouter.delete('/:field/:id',deleteMisc)
miscRouter.put('/:field/:id',updateMisc)


