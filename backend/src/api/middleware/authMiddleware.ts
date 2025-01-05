import { Request, Response, NextFunction } from 'express';
import { verifyToken } from "../../utils/jwt";

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.cookies.token;

    if (!token) {
        res.status(401).json({ message: 'Access Denied: No token provided' });
        return;
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        res.status(401).json({ message: 'Access Denied: Invalid or expired token' });
        return;
    }

    req.body.userId = decoded.userId;
    next();
};
