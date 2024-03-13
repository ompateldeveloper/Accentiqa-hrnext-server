import Validator from "validatorjs";
import prisma from "../../../lib/client.js";
import pkg from 'validator';
const { toDate} = pkg;



export const empForm1 = async (req, res) => {
    const body = req.body;
    const rmi = parseInt(body.reportingMgId)
    console.log(body.reportingMgId);
    const exists = await prisma.employeeStep3.findFirst({where:{empNo:body.empNo}})
    if(exists){
        return res.status(406).json({error:"EMP_ALREADY_EXISTS"})
    }
    const newvalues  = {
        ...body,
        reportingMgId:rmi
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



    await prisma.employeeStep1.create({
        data: newvalues,
    })
        .then((emp) => {
            console.log("emp",emp);
            res.status(201).json(emp)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
}

export const empForm2 = async (req, res) => {
    const body = {
        ...req.body,
        projectDate:toDate(req.body.projectDate).toISOString(),
        designationId:parseInt(req.body.designationId),
        departmentId:parseInt(req.body.departmentId),
        divisionId:parseInt(req.body.divisionId),
        projectId:parseInt(req.body.projectId)

    };

    const exists = await prisma.employeeStep2.findFirst({where:{empNo:body.empNo}})

    if (exists) {
        return res.status(402).json({message:"Already_exist"})
    }

    const validation = new Validator(body, {
        grade: 'required|string',
        empNo:'required|string',
        costCenter: 'required|string',
        designationId: 'integer', 
        location: 'required|string',
        divisionId: 'integer', 
        departmentId: 'integer', 
        shift: 'required|string',
        projectId: 'integer', 
        projectDate: 'date', 
    });

    if (validation.fails()) {
        return res.status(400).json(validation.errors.all())
    }

    const empValidate = await prisma.employeeStep1.findFirst({where:{empNo:body.empNo}})
    if (!empValidate) {
        return res.status(402).json({message:"complete step 1"})
    }




    await prisma.employeeStep2.create({
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
export const empForm3 = async (req, res) => {
    const body = req.body;
    const validation = new Validator(body, {
        empNo:'required|string',
        panNo: 'required|string',
        aadharNo: 'required|string|min:12',
        passportNo: 'string',
    });


    const exists = await prisma.employeeStep3.findFirst({where:{empNo:body.empNo}})

    if (exists) {
        return res.status(402).json({message:"Already_exist"})
    }

    if (validation.fails()) {
        return res.status(409).json(validation.errors.all())
    }
    
    const empValidate1 = await prisma.employeeStep1.findFirst({where:{empNo:body.empNo}})

    if (!empValidate1) {
        return res.status(402).json({message:"complete step 1"})
    }
    const empValidate2 = await prisma.employeeStep2.findFirst({where:{empNo:body.empNo}})

    if (!empValidate2) {
        return res.status(402).json({message:"complete step 2"})
    }
 


    await prisma.employeeStep3.create({
        data: body,
    })
        .then((emp) => {
            res.status(201).json(emp)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
}
export const lastStep = async (req, res) => {
    const body = req.body;
    const empStep1 = await prisma.employeeStep1.findFirst({where:{empNo:body.empNo}})
    const empStep2 = await prisma.employeeStep2.findFirst({where:{empNo:body.empNo}})
    const empStep3 = await prisma.employeeStep3.findFirst({where:{empNo:body.empNo}})

    delete empStep1.id;
    delete empStep1.createdAt;
    delete empStep1.updatedAt;
    delete empStep2.id;
    delete empStep2.createdAt;
    delete empStep2.updatedAt;
    delete empStep3.id;
    delete empStep3.createdAt;
    delete empStep3.updatedAt;

    const payload = {
        ...empStep1,
        ...empStep2,
        ...empStep3,
    }
    console.log(payload);
    
    await prisma.employee.create({
        data: payload,
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