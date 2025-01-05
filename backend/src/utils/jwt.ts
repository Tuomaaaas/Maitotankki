import jwt from 'jsonwebtoken'
import CustomJwtPayload from "../types/CustomJwtPayload";

const SECRET_KEY = process.env.JWT_SECRET;
const EXPIRATION_TIME = process.env.JWT_EXPIRATION

export const generateToken = (userId: number) => {
    return jwt.sign({ userId }, SECRET_KEY!, { expiresIn: EXPIRATION_TIME })
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, SECRET_KEY!) as CustomJwtPayload
    } catch (error) {
        return null;
    }
}