import { Request, Response } from "express";
const { User } = require('../../models');

// @ts-ignore
export const getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.body.userId;

        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.json(user.get()); // Send user profile
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
