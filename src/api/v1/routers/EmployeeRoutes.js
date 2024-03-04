import { Router } from "express";
import { addEmp, deleteEmp, getEmp, updateEmp } from "../controllers/EmpController.js";

export const employeeRouter = Router();

employeeRouter.post('/emp/',addEmp)
employeeRouter.get('/emp/:id',getEmp);
employeeRouter.put('/emp/',updateEmp)
employeeRouter.delete('/emp/:id',deleteEmp)