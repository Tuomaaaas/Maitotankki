import {Request, Response, RequestHandler} from "express";
const { Rekognition } = require('../../models');


export const getRekognitions: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { limit, farmId } = req.query

        if (!limit || !farmId) {
            res.status(400).json({ message: "Invalid parameters!" });
            return;
        }

        const limitValue = typeof limit === 'string' ? parseInt(limit, 10) : NaN;

        const rekognitions = await Rekognition.findAll({
            where: {
                farm_id: farmId
            },
            limit: limitValue,
            order: [
                ['updatedAt', 'DESC']
            ]
        });

        if (!rekognitions) {
            res.status(404).json({ message: "No rekognitions found!" });
            return;
        }

        res.json(rekognitions)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error'
            });
        }
    }
}