import { uploadAndAnalyzeImage } from "../src/services/coordinatorService";
const path = require('path');
const fs = require('fs');
const { Farm } = require('../src/models');

(async () => {
    try {
        const fileBuffer = fs.readFileSync(path.resolve(__dirname, '..', 'src', 'uploads', 'argos_image.png'));

        const farm = await Farm.findOne({
            where: { id: 1},
            attributes: [ 'id', 'name', 'uuid' ]
        })

        const result = await uploadAndAnalyzeImage(fileBuffer, farm.get());

        if (result.success) {
            console.log('Image uploaded successfully. Image path: ', result.data);
        } else {
            console.error('Error:', result.error);
        }
    } catch (error) {
        console.error('Unexpected error:', error);
    }
})();