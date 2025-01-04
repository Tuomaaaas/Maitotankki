import { uploadImageToS3 } from "./s3Service";
import analyzeImageFromS3 from "./rekognitionService";
import { Response } from '../types/response';
import { v4 as uuidv4 } from 'uuid';
const { FileUpload, Rekognition} = require('../models')

interface Farm {
    id: number;
    name: string;
    uuid: string;
}

async function uploadAndAnalyzeImage(image: Buffer, farm: Farm): Promise<Response<string>> {
    if (!image || !farm) {
        return {
            success: false,
            error: 'Farm and image must be provided!',
        };
    }

    const s3Result = await uploadImageToS3(farm.uuid, image)

    if (!s3Result.success) {
        return s3Result
    }

    const filepath = s3Result.data

    if (!filepath) {
        return {
            success: false,
            error: 'No file path provided!'
        };
    }

    const fileUpload = await FileUpload.create({ file_uuid: uuidv4(), file_path: filepath})

    if (!fileUpload) {
        return {
            success: false,
            error: 'Error saving the file details to the database!'
        };
    }

    const rekognitionResult = await analyzeImageFromS3(filepath)

    if (!rekognitionResult.success) {
        return {
            success: rekognitionResult.success,
            error: rekognitionResult.error
        };
    }

    const analyzeResult = await Rekognition.create({ rekognition_uuid: uuidv4(), file_upload_id: fileUpload.id, farm_id: farm.id, result: rekognitionResult.data})

    if (!analyzeResult) {
        return {
            success: false,
            error: 'Error saving the analyzation results to the database!'
        };
    }

    return {
        success: true,
        data: filepath
    }
}

export { uploadAndAnalyzeImage }