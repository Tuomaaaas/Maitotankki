import AWS from 'aws-sdk';
import filetype from 'magic-bytes.js'
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({ region: process.env.AWS_REGION })
const bucketName = process.env.AWS_BUCKET_NAME

const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png'];
const SUPPORTED_VIDEO_TYPES = ['video/mp4', 'video/quicktime'];

async function uploadImageToS3(folderName: string, fileBuffer: Buffer, fileName: string) {
    if (!folderName || !fileBuffer || !fileName) {
        return {
            success: false,
            error: 'Folder name, file buffer and file name must be provided!',
        };
    }

    const [fileInfo] = filetype(fileBuffer);
    const mime = fileInfo?.mime;

    if (!mime || !SUPPORTED_IMAGE_TYPES.includes(mime)) {
        return {
            success: false,
            error: 'Unsupported image type!',
        };
    }

    if (!bucketName) {
        throw new Error('Bucket name is not defined in the environment variables!');
    }

    const s3Key = `${folderName}/${fileName}`;

    const params = {
        Bucket: bucketName,
        Key: s3Key,
        Body: fileBuffer,
        ContentType: mime
    }

    try {
        const data = await s3.upload(params).promise();

        return {
            success: true,
            data: data.Location,
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

async function uploadVideoTos3(folderName: string, fileBuffer: Buffer, fileName: string) {
    if (!folderName || !fileBuffer || !fileName) {
        return {
            success: false,
            error: 'Folder name, file buffer and file name must be provided!',
        };
    }

    const [fileInfo] = filetype(fileBuffer);
    const mime = fileInfo?.mime;

    if (!mime || !SUPPORTED_VIDEO_TYPES.includes(mime)) {
        return {
            success: false,
            error: 'Unsupported video type!',
        };
    }

    if (!bucketName) {
        throw new Error('Bucket name is not defined in the environment variables!');
    }

    const s3Key = `${folderName}/${fileName}`;

    const params = {
        Bucket: bucketName,
        Key: s3Key,
        Body: fileBuffer,
        ContentType: mime
    }

    try {
        const data = await s3.upload(params).promise();

        return {
            success: true,
            data: data.Location,
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