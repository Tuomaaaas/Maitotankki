import { Request, Response } from "express";
import { generateToken } from "../../utils/jwt";
const { User } = require('../../models')


export const login = async (req: Request, res: Response) => {
    const { firstName, lastName } = req.body

    try {
        const user = await User.findOne({where: {first_name: firstName, last_name: lastName}})

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user.id)

        const jwtExpiration = parseInt(process.env.JWT_EXPIRATION || "3600");
        const maxAge = jwtExpiration * 1000;

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: maxAge,
            sameSite: 'strict'
        });

        res.json({ message: 'Login successful' });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                message: error.message || 'Internal Server Error'
            });
        }
    }
}


export const logout = (req: Request, res: Response) => {
    try {
        res.clearCookie('token', { path: '/' });
        res.json({ message: 'Logout successful' });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                message: error.message || 'Internal Server Error'
            });
        }
    }
}