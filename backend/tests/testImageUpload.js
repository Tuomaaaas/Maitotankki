import { uploadImageToS3 } from "../src/services/s3Service.ts";
const path = require('path');
const fs = require('fs');

(async () => {
    try {
        const folderName = 'testing';
        const fileBuffer = fs.readFileSync(path.resolve(__dirname, '..', 'src', 'uploads', 'IMAGE PATH HERE!'));
        const fileName = 'test_image.jpg';

        const result = await uploadImageToS3(folderName, fileBuffer, fileName);
        if (result.success) {
            console.log('Image uploaded successfully. S3 URL:', result.data);
        } else {
            console.error('Error:', result.error);
        }
    } catch (error) {
        console.error('Unexpected error:', error);
    }
})();