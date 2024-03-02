import Validator from "validatorjs";
import prisma from "../../../lib/client.js"

export const signin = async(req,res) =>{
    try {
        const body = req.body

        const validation = new Validator(body, {
            name: 'required|min:2',
            email: 'required|email',
            password: ['required','regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$/'],
        });
    
        if (validation.fails()) {
            return res.status(400).json(validation.errors.all())
        }

        const user = await prisma.user.create({
            data:body
        })
        res.json(user)
    } catch (error) {
        res.status(400).json(error)
        
    }
}

