import {Request, Response, RequestHandler} from "express";
const { FarmUser, Farm } = require('../../models');


export const getFarm: RequestHandler = async (req: Request, res: Response) => {
    const userId = req.body.userId;

    try {
        const farmUser = await FarmUser.findOne({
            where: { user_id: userId },
            attributes: ['farm_id']
        })

        if (!farmUser) {
            res.status(404).json({ message: "No farm allocation found for the user!" });
            return;
        }

        const farmId = farmUser?.farm_id;

        const farm = await Farm.findByPk(farmId)

        if (!farm) {
            res.status(404).json({ message: "Farm not found!" });
            return;
        }

        res.json(farm);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error'
            });
        }
    }
}

export const updateFarm: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { farmId, farmName, cameraUrl, isCameraActive } = req.body

        if (!farmId || !farmName) {
            res.status(400).json({ message: "Invalid parameters!" });
            return;
        }

        const farm = await Farm.findByPk(farmId);

        if (!farm) {
            res.status(404).json({ message: "Farm not found!" });
            return;
        }

        farm.farmName = farmName
        farm.camera_url = cameraUrl
        farm.is_camera_active = isCameraActive

        await farm.save()

        res.json(farm);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error'
            });
        }
    }
}