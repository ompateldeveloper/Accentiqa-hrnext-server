import prisma from "../../../lib/client.js";

export const getDept = async (req, res) => {
    await prisma.department.findMany({})
        .then((emp) => {
            res.json(emp)
        })
        .catch((error) => {
            console.log(error);
        })

}
export const getdiv = async (req, res) => {
    await prisma.division.findMany({})
        .then((emp) => {
            res.json(emp)
        })
        .catch((error) => {
            console.log(error);
        })

}
export const getDesig = async (req, res) => {
    await prisma.designation.findMany({})
        .then((emp) => {
            res.json(emp)
        })
        .catch((error) => {
            console.log(error);
        })

}
export const getProj = async (req, res) => {
    await prisma.project.findMany({})
        .then((emp) => {
            res.json(emp)
        })
        .catch((error) => {
            console.log(error);
        })

}

export const addMisc = async (req, res) => {
    const choice = req.params.field;
    switch (choice) {
        case 'departments':
            await prisma.department.create({data:req.body})
            .then((data)=>{console.log(data) ; return})
            .catch((error)=>{console.log(error) ; return})
            break;
        case 'designations':
            await prisma.designation.create({data:req.body})
            .then((data)=>{console.log(data) ; return})
            .catch((error)=>{console.log(error) ; return})
            break;
        case 'divisions':
            await prisma.division.create({data:req.body})
            .then((data)=>{console.log(data) ; return})
            .catch((error)=>{console.log(error) ; return})
            break;
        case 'projects':
            await prisma.project.create({data:req.body})
            .then((data)=>{console.log(data) ; return})
            .catch((error)=>{console.log(error) ; return})
            break;
        case 'reportingmanager':
            await prisma.reportingManager.create({data:req.body})
            .then((data)=>{console.log(data) ; return})
            .catch((error)=>{console.log(error) ; return})
            break;
        default:
            break;
    }
    return res.status(201).json({message:"created"})
    
}