import Validator from "validatorjs";
import prisma from "../../../lib/client.js";
import pkg from 'validator';
const { toDate} = pkg;



export const empBasicInfo = async (req, res) => {
    const body = req.body;
    const exists = await prisma.empBasicInfo.findFirst({where:{empNo:body.empNo}})
    if(exists){
        return res.status(406).json({error:"EMP_ALREADY_EXISTS"})
    }
    const newvalues  = {
        ...body,
        reportingMgId:parseInt(body.reportingMgId)
    }
    delete newvalues.empSeries;



    const validation = new Validator(newvalues, {
        probationPeriod: 'required|string',
        empNo: 'required|string',
        confirmDate: 'required|date',
        name: 'required|string|min:2',
        email: 'required|email',
        dob: 'required|date',
        mobileNo: 'required|string',
        aadharNo: 'required|string|min:12',
        emergencyName: 'required|string',
        gender: 'required|string|in:male,female,other',
        emergencyNo: 'required|string',
        reportingMgId: 'integer',
        fathersName: 'string',
        status: 'required|string',
        spouseName: 'string',
        doj: 'required|date',
    });

    if (validation.fails()) {
        console.log(validation.errors.all());
        return res.status(400).json(validation.errors.all())
    }



    await prisma.empBasicInfo.create({
        data: newvalues,
    })
        .then((emp) => {
            console.log("emp basic info added");
            res.status(201).json(emp)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
}

export const empPosition = async (req, res) => {
    const body = {
        ...req.body,
        projectDate:toDate(req.body.projectDate).toISOString(),
        locationId:parseInt(req.body.locationId),
        designationId:parseInt(req.body.designationId),
        departmentId:parseInt(req.body.departmentId),
        divisionId:parseInt(req.body.divisionId),
        projectId:parseInt(req.body.projectId)

    };

    const exists = await prisma.employeePosition.findFirst({where:{empNo:body.empNo}})

    if (exists) {
        return res.status(402).json({message:"Already_exist"})
    }

    const validation = new Validator(body, {
        grade: 'required|string',
        empNo:'required|string',
        costCenter: 'required|string',
        designationId: 'integer', 
        locationId: 'required|integer',
        divisionId: 'integer', 
        departmentId: 'integer', 
        shift: 'required|string',
        projectId: 'integer', 
        projectDate: 'date', 
    });

    if (validation.fails()) {
        return res.status(400).json(validation.errors.all())
    }

    const empValidate = await prisma.employeeBasicInfo.findFirst({where:{empNo:body.empNo}})
    if (!empValidate) {
        return res.status(402).json({message:"complete step 1"})
    }




    await prisma.employeePosition.create({
        data: body,
    })
        .then((emp) => {
            console.log("step-2",emp);
            return res.status(201).json(emp)
        })
        .catch((error) => {
            return res.status(400).json(error)
        })
}
export const empStatutory = async (req, res) => {
    const body = req.body;
    const validation = new Validator(body, {
        empNo:'required|string',
        panNo: 'required|string',
        aadharNo: 'required|string|min:12',
        passportNo: 'string',
    });


    const exists = await prisma.employeeStatutory.findFirst({where:{empNo:body.empNo}})

    if (exists) {
        return res.status(402).json({message:"Already_exist"})
    }

    if (validation.fails()) {
        return res.status(409).json(validation.errors.all())
    }
    
    const empValidate1 = await prisma.empBasicInfo.findFirst({where:{empNo:body.empNo}})

    if (!empValidate1) {
        return res.status(402).json({message:"complete step 1"})
    }
    const empValidate2 = await prisma.employeePosition.findFirst({where:{empNo:body.empNo}})

    if (!empValidate2) {
        return res.status(402).json({message:"complete step 2"})
    }
 


    await prisma.employeeStatutory.create({
        data: body,
    })
        .then((emp) => {
            res.status(201).json(emp)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
}
export const empPayment = async (req, res) => {
    const body = req.body;
    
    await prisma.employee.create({
        data: body,
    })
        .then((emp) => {
            return res.status(201).json(emp)
        })
        .catch((error) => {
            return res.status(400).json(error)
        })
}

export const getEmp = async (req, res) => {

    await prisma.employee.findMany({})
        .then((emp) => {
            res.json(emp)
        })
        .catch((error) => {
            console.log(error);
        })
}
export const getEmpOne = async (req, res) => {
    await prisma.employee.findFirst({
        where: {
            empNo: req.param.id
        }
    })
        .then((emp) => {
            res.json(emp)
        })
        .catch((error) => {
            console.log(error);
        })
}
export const updateEmp = (req, res) => {

}
export const deleteEmp = (req, res) => {

}



export const addEmpProj = (req,res) => {

}