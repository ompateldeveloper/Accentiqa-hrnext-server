import { Router } from "express";
import { addEmpProj, deleteEmp, empForm1, empForm2, empForm3, getEmp, getEmpOne, lastStep, updateEmp } from "../controllers/EmployeeController.js";

export const employeeRouter = Router();


employeeRouter.post('/addemployee/form1',empForm1)
employeeRouter.post('/addemployee/form2',empForm2)
employeeRouter.post('/addemployee/form3',empForm3)
employeeRouter.post('/addemployee/laststep',lastStep)


employeeRouter.post('/employeeprojectinfo/',addEmpProj)

employeeRouter.get('/employee/one/:id',getEmpOne);
employeeRouter.get('/employee/all',getEmp);
employeeRouter.put('/employee/update/:id',updateEmp)
employeeRouter.delete('/employee/delete/:id',deleteEmp)