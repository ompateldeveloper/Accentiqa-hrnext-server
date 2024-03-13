import { v4 } from "uuid";
import prisma from "../../../lib/client.js";

export const genEmpNo = async(req,res)=>{
    return res.json({uuid:v4()})
}

export const getMisc = async (req, res) => {
    const choice = req.params.field;
    switch (choice) {
        case 'departments':
            await prisma.department.findMany({})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'designations':
            await prisma.designation.findMany({})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'divisions':
            await prisma.division.findMany({})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'projects':
            await prisma.project.findMany({})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'reportingmanager':
            await prisma.reportingManager.findMany({})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        default:
            break;
    }    
}

export const addMisc = async (req, res) => {
    const choice = req.params.field;
    switch (choice) {
        case 'departments':
            await prisma.department.create({data:req.body})
            .then((data)=>{return res.status(201).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'designations':
            await prisma.designation.create({data:req.body})
            .then((data)=>{return res.status(201).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'divisions':
            await prisma.division.create({data:req.body})
            .then((data)=>{return res.status(201).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'projects':
            await prisma.project.create({data:req.body})
            .then((data)=>{return res.status(201).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'reportingmanager':
            await prisma.reportingManager.create({data:req.body})
            .then((data)=>{return res.status(201).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        default:
            break;
    }    
}

export const updateMisc = async (req, res) => {
    const choice = req.params.field;
    const id = parseInt(req.params.id);
    // console.log(choice,id);
    switch (choice) {
        case 'departments':
            await prisma.department.update({where:{id},data:{name:req.body.name}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'designations':
            await prisma.designation.update({where:{id},data:{name:req.body.name}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'divisions':
            await prisma.division.update({where:{id},data:{name:req.body.name}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'projects':
            await prisma.project.update({where:{id},data:{name:req.body.name}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'reportingmanager':
            await prisma.reportingManager.update({where:{id},data:{name:req.body.name}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        default:
            break;
    }    
}

export const deleteMisc = async (req, res) => {
    const choice = req.params.field;
    const id = parseInt(req.params.id);
    switch (choice) {
        case 'departments':
            await prisma.department.delete({where:{id}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'designations':
            await prisma.designation.delete({where:{id}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'divisions':
            await prisma.division.delete({where:{id}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'projects':
            await prisma.project.delete({where:{id}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        case 'reportingmanager':
            await prisma.reportingManager.delete({where:{id}})
            .then((data)=>{return res.status(200).json(data)})
            .catch((error)=>{return res.status(400).json(error)})
            break;
        default:
            break;
    }    
}