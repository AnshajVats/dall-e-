import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';
import sharp from 'sharp'; // Import the 'sharp' image processing library

dotenv.config();

const router = express.Router();
const Dimensions = "1024 x 1024";

router.route('/').get((req, res) => {
    res.send('Hello from DALL-E! You might need to use axios to get the image from the API.');
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const bingResponse = await axios.get(`${process.env.BING_API_ENDPOINT}/images/search`, {
            params: {
                q: prompt,
            },
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY,
            },
        });

        // Assuming the structure is an array with items having a contentUrl property
        const imageUrls = bingResponse.data.value.map(item => item.contentUrl);

        // Process each image URL until a successful one is found
        let processedImageUrl = null;
        for (const imageUrl of imageUrls) {
            processedImageUrl = await processImageWithDimensions(imageUrl, Dimensions);
            if (processedImageUrl) {
                break; // Break the loop if processing is successful
            }
        }

        if (processedImageUrl) {
            res.json({ photo: processedImageUrl });
        } else {
            res.status(500).json({ error: 'Failed to process any of the images.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Function to process the image with specified dimensions
async function processImageWithDimensions(imageUrl, dimensions) {
    try {
        // Fetch the image
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        // Process the image using sharp (resize to specified dimensions)
        const processedImageBuffer = await sharp(response.data)
            .resize({
                width: parseInt(dimensions.split('x')[0], 10),
                height: parseInt(dimensions.split('x')[1], 10),
                fit: 'cover', // or use another sharp transformation based on your needs
            })
            .toBuffer();

        // Convert the processed image buffer to base64
        const base64data = processedImageBuffer.toString('base64');

        return `data:image/jpeg;base64,${base64data}`;
    } catch (error) {
        console.error('Error processing image:', error);
        return null; // Return null if there's an error processing the image
    }
}

export default router;
