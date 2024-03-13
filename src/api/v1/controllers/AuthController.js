import Validator from "validatorjs";
import prisma from "../../../lib/client.js"
import bcrypt from 'bcrypt'
import { generateToken, sanitizeUser } from "../../../lib/utils.js";
export const signup = async (req, res) => {
    const body = req.body
    const validation = new Validator(body, {
        name: 'required|min:2',
        email: 'required|email',
        password: ['required', 'regex:/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]+$/'],
    });
    

    if (validation.fails()) {
        return res.status(405).json(validation.errors.all())
    }
    const exists = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });
    if (exists) {
        return res.status(403).json({ error: ['ALREADY_EXISTS'] })
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    await prisma.user.create({
        data: {
            ...body,
            password: hashedPassword,
        },
    })
    .then((user)=>{
        const token = generateToken(user)
        const sanitizedUser = sanitizeUser(user)
        res.json({...sanitizedUser,token})
    })
    .catch((error)=>{
        res.status(409).json(error)
    })

}


export const signin = async (req, res) => {
        const body = req.body

        const validation = new Validator(body, {
            email: 'required|email',
            password: ['required', 'regex:/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]+$/'],
        });

        if (validation.fails()) {
            return res.status(405).json(validation.errors.all())
        }

        const user = await prisma.user.findUnique({
            where: {
                email: body.email
            },
        })
        .then(async(user)=>{
            if (user && (await bcrypt.compare(body.password, user.password))) {
                const token = generateToken(user)
                // const sanitizedUser = sanitizeUser(user)
                return res.json({
                    name:user.name,
                    email:user.email,
                    token
                })
            } else {
                
            }
        })
        .catch((error)=>{
            return res.status(409).json(error)
        });

        if (!user) {
            return res.status(402).json({ error: ['USER_NOT_EXIST'] })
        }

}

export const getMe = async (req, res) => {
    try {
        const user = await sanitizeUser(req.user);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json( error);
    }
}