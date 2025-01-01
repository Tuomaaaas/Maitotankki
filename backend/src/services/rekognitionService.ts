import AWS from 'aws-sdk';
import { TextDetectionList } from 'aws-sdk/clients/rekognition';
import dotenv from "dotenv";
import { Response } from '../types/response';

dotenv.config();

const rekognition = new AWS.Rekognition({ region: process.env.AWS_REGION })

async function analyzeImageFromS3(bucketName:string, objectKey: string):Promise<Response<TextDetectionList>> {
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

export default analyzeImageFromS3;