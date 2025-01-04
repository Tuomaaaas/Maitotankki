import AWS from 'aws-sdk';
import filetype from 'magic-bytes.js'
import generateFileName from "./fileNameGeneratorService";
import { Response } from '../types/response';
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({ region: process.env.AWS_REGION })
const bucketName = process.env.AWS_BUCKET_NAME

const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png'];
const SUPPORTED_VIDEO_TYPES = ['video/mp4', 'video/quicktime'];

async function uploadImageToS3(farmUUID: string, fileBuffer: Buffer): Promise<Response<string>> {
    if (!farmUUID || !fileBuffer) {
        return {
            success: false,
            error: 'Farm UUID and file buffer must be provided!',
        };
    }

    const filename = generateFileName()

    if (!filename) {
        return {
            success: false,
            error: 'Filename not valid!'
        };
    }

    const [fileInfo] = filetype(fileBuffer);
    const mime = fileInfo?.mime;

    if (!mime || !SUPPORTED_IMAGE_TYPES.includes(mime)) {
        return {
            success: false,
            error: 'Unsupported image type or failed to detect MIME type!'
        };
    }

    if (!bucketName) {
        return {
            success: false,
            error: 'Invalid bucket name!'
        };
    }

    const s3Key = `${farmUUID}/${filename}`;

    const params = {
        Bucket: bucketName,
        Key: s3Key,
        Body: fileBuffer,
        ContentType: mime
    };

    try {
        await s3.upload(params).promise();

        return {
            success: true,
            data: s3Key,
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error('Error uploading the image:', errorMessage);

        return {
            success: false,
            error: errorMessage,
        };
    }
}

async function uploadVideoTos3(farmUUID: string, fileBuffer: Buffer) {
    if (!farmUUID || !fileBuffer) {
        return {
            success: false,
            error: 'Farm UUID and file buffer must be provided!',
        };
    }

    const filename = generateFileName()

    if (!filename) {
        return {
            success: false,
            error: 'Filename not valid!'
        };
    }

    const [fileInfo] = filetype(fileBuffer);
    const mime = fileInfo?.mime;

    if (!mime || !SUPPORTED_VIDEO_TYPES.includes(mime)) {
        return {
            success: false,
            error: 'Unsupported video type or failed to detect MIME type!'
        };
    }

    if (!bucketName) {
        return {
            success: false,
            error: 'Invalid bucket name!'
        };
    }

    const s3Key = `${farmUUID}/${filename}`;

    const params = {
        Bucket: bucketName,
        Key: s3Key,
        Body: fileBuffer,
        ContentType: mime
    };

    try {
        await s3.upload(params).promise();

        return {
            success: true,
            data: s3Key,
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error('Error uploading the video:', errorMessage);

        return {
            success: false,
            error: errorMessage,
        };
    }
}

export { uploadImageToS3, uploadVideoTos3 }