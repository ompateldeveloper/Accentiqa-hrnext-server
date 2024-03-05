import Validator from "validatorjs";
import prisma from "../../../lib/client.js";




export const empForm1 = async(req,res)=>{
    
}



export const addEmp = async (req, res) => {
    const body = req.body;
    const validation = new Validator(body, {
        empSeries: 'required|string',
        probationPeriod: 'required|string',
        empNo: 'required|string',
        confirmDate: 'required|date',
        name: 'required|string|min:2',
        email: 'required|email',
        dob: 'required|date',
        mobileNo: 'required|string',
        aadharNo: 'required|string|min:16',
        emergencyName: 'required|string',
        gender: 'required|string|in:male,female,other',
        emergencyNo: 'required|string',
        reportingMgId: 'required|integer',
        fathersName: 'string',
        status: 'required|string',
        spouseName: 'string',
        doj: 'required|date',
        grade: 'required|string',
        costCenter: 'required|string',
        designationId: 'required|integer',
        location: 'required|string',
        divisionId: 'required|integer',
        departmentId: 'required|integer',
        project: 'string',
        projectDate: 'date',
        panNo: 'required|string',
        passportNo: 'string',
    });

    if (validation.fails()) {
        return res.status(400).json(validation.errors.all())
    }

    await prisma.employee.create({
        data: body,
    })
        .then((emp) => {
            res.status(201).json(emp)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
}

export const getEmp = async (req, res) => {

    await prisma.employee.findMany({})
    .then((emp) => {
        res.json(emp)
    })
    .catch((error)=>{
        console.log(error);
    })
}
export const getEmpOne = async (req, res) => {
    await prisma.employee.findFirst({where:{
        empNo:req.param.id
    }})
    .then((emp) => {
        res.json(emp)
    })
    .catch((error)=>{
        console.log(error);
    })
}
export const updateEmp = (req, res) => {

}
export const deleteEmp = (req, res) => {

}
