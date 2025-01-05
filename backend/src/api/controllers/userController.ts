import { Request, Response } from "express";
const { User } = require('../../models');


export const getProfile = async (req: Request, res: Response) => {
    const userId = req.body.userId;

    try {
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.json(user.get());
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                message: error.message || 'Internal Server Error'
            });
        }
    }
};
