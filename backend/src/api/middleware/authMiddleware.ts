import { Request, Response, NextFunction } from 'express'
import { verifyToken } from "../../utils/jwt";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }

    const decoded = verifyToken(token)

    if (!decoded) {
        return res.status(401).json({ message: 'Access Denied: Invalid or expired token' });
    }

    req.body.userId = decoded.userId;

    next()
}