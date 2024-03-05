import { Router } from "express";
import { addEmp, deleteEmp, getEmp, getEmpOne, updateEmp } from "../controllers/EmployeeController.js";

export const employeeRouter = Router();


employeeRouter.post('/addemployee/form1',addEmp)
employeeRouter.post('/addemployee/form2',addEmp)
employeeRouter.post('/addemployee/form3',addEmp)


employeeRouter.post('/employeeprojectinfo/',addEmp)

employeeRouter.post('/employee/add',addEmp)
employeeRouter.get('/employee/one/:id',getEmpOne);
employeeRouter.get('/employee/all',getEmp);
employeeRouter.put('/employee/update/:id',updateEmp)
employeeRouter.delete('/employee/delete/:id',deleteEmp)