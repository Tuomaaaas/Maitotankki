import jwt from 'jsonwebtoken'
import CustomJwtPayload from "../types/CustomJwtPayload";
import dotenv from 'dotenv'
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;
const EXPIRATION_TIME = process.env.JWT_EXPIRATION

if (!SECRET_KEY || !EXPIRATION_TIME) {
    throw new Error('SECRET_KEY or EXPIRATION_TIME is not defined!');
}

export const generateToken = (userId: number) => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: EXPIRATION_TIME })
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, SECRET_KEY) as CustomJwtPayload
    } catch (error) {
        return null;
    }
}