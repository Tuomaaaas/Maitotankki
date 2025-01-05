import AWS from 'aws-sdk';
import { TextDetectionList } from 'aws-sdk/clients/rekognition';
import dotenv from "dotenv";
import { Response } from '../types/response';

dotenv.config();

const rekognition = new AWS.Rekognition({ region: process.env.AWS_REGION })
const bucketName = process.env.AWS_BUCKET_NAME

async function analyzeImageFromS3(objectKey: string):Promise<Response<TextDetectionList | string>> {
    if (!bucketName || !objectKey) {
        return {
            success: false,
            error: 'Bucket name and object key must be provided',
        };
    }

    try {
        const params = {
            Image: {
                S3Object: {
                    Bucket: bucketName,
                    Name: objectKey,
                }
            }
        };

        const rekognitionData = await rekognition.detectText(params).promise()

        return {
            success: true,
            data: rekognitionData.TextDetections
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error('Error analyzing image:', errorMessage);

        return {
            success: false,
            error: errorMessage,
        };
    }
}

function extractTemperatureFromResult(rekognitionResponse: TextDetectionList): number | null {
    for (const item of rekognitionResponse) {
        const detectedText = item.DetectedText;

        const match = detectedText?.match(/([-+]?\d*\.?\d+)\s*[CС]/);

        if (match) {
            return parseFloat(match[1]);
        }
    }

    return null;
}

export default analyzeImageFromS3;
export { extractTemperatureFromResult }