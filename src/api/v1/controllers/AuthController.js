import prisma from "../../../lib/client.js"

export const signin = async(req,res) =>{
    try {
        const body = req.body
        const user = await prisma.user.create({
            data:body
        })
        res.json(body)
    } catch (error) {
        res.json(error)
        
    }
}

