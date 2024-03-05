import jwt from 'jsonwebtoken';


export function sanitizeUser(user) {
    const sanitizedUser = user;
    delete sanitizedUser.password;
    delete sanitizedUser.id;
    return sanitizedUser;
};



export function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };
    const secretKey = process.env.JWT_SECRET;
    return jwt.sign(payload, secretKey);
};
