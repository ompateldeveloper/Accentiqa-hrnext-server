import jwt from 'jsonwebtoken'
import prisma from '../../../lib/client.js'

export const AuthMiddleware = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).send('Access_Token_Required')
    }

    const token = authorization.split(' ')[1]
    if(!token) return res.status(401).send('NOT_SIGNEDIN')

    try {
        const {id} = jwt.verify(token, process.env.JWT_SECRET)
        // const isAdmin = await prisma.whitelist.findUnique
        const user = await prisma.user.findUnique({where:{id:id}})
        if(!user) return res.status(401).send('UNAUTHORIZED_TOKEN')
        req.user = user
        next()
    } catch (error) {
        console.error(error)
        res.status(401).send('Unauthorized')
    }
}