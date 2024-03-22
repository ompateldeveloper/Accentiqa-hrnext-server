import Validator from "validatorjs";
import prisma from "../../../lib/client.js"
import bcrypt from 'bcrypt'
import { generateToken, sanitizeUser } from "../../../lib/utils.js";
import Joi from 'joi';

export const signup = async (req, res) => {
    const body = req.body;

    const schema = Joi.object({
        name: Joi.string().min(2).required().messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name is required',
            'string.min': 'Name must be at least {{#limit}} characters long',
            'any.required': 'Name is required'
        }),
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.empty': 'Email is required',
            'string.email': 'Email must be a valid email address',
            'any.required': 'Email is required'
        }),
        password: Joi.string().min(8).pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d\\W_]+$')).required().messages({
            'string.base': 'Password must be a string',
            'string.empty': 'Password is required',
            'string.min': 'Password must contain at 8 Alphaneumerics',
            'string.pattern.base': 'Password must contain at least one letter and one digit',
            'any.required': 'Password is required'
        }),
    });

    const { error, value } = schema.validate(body,{ abortEarly: false });

    if (error) {
        const errors = error.details.reduce((acc, currentError) => {
            acc[currentError.context.key] = currentError.message;
            return acc;
          }, {});
        return res.status(400).json({ errors });
    }

    const exists = await prisma.user.findUnique({
        where: {
            email: value.email,
        },
    });

    if (exists) {
        return res.status(403).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(value.password, 10);

    try {
        const user = await prisma.user.create({
            data: {
                ...value,
                password: hashedPassword,
            },
        });

        const token = generateToken(user);
        const sanitizedUser = sanitizeUser(user);

        return res.json({ ...sanitizedUser, token });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const signin = async (req, res) => {
    const body = req.body;

    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.empty': 'Email is required',
            'string.email': 'Email must be a valid email address',
            'any.required': 'Email is required'
        }),
        password: Joi.string().min(8).pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d\\W_]+$')).required().messages({
            'string.base': 'Password must be a string',
            'string.empty': 'Password is required',
            'string.min': 'Password must contain at 8 Alphaneumerics',
            'string.pattern.base': 'Password must contain at least one letter and one digit',
            'any.required': 'Password is required'
        }),
    });

    const { error, value } = schema.validate(body);

    if (error) {
        const errors = error.details.reduce((acc, currentError) => {
            acc[currentError.context.key] = currentError.message;
            return acc;
          }, {});
        return res.status(400).json({ errors });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: value.email,
        },
    });

    if (!user || !(await bcrypt.compare(value.password, user.password))) {
        return res.status(401).json({ message: ['Invalid credentials'] });
    }

    const token = generateToken(user);

    return res.json({
        name: user.name,
        email: user.email,
        token,
    });
};


export const getMe = async (req, res) => {
    try {
        const user = await sanitizeUser(req.user);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json(error);
    }
}