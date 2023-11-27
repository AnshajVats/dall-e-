# DALL-E Image Generator

## Overview

This project is a web application that leverages bing image search to generate images based on user prompts. Users can input a prompt, and the application will use the Bing Image Search API to find an image related to the prompt. The image is then passed to the DALL-E model, and the generated image is displayed to the user.

## Technologies Used

- Frontend: React.js
- Backend: Node.js with Express.js
- Database: MongoDB
- Image Processing: Cloudinary
- External APIs: OpenAI DALL-E, Bing Image Search

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Cloudinary Account
- OpenAI API Key
- Bing Image Search API Key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dalle-image-generator.git
   cd dalle-image-generator
   ```

# Install backend dependencies

cd server
npm install

# Install frontend dependencies

cd ../client
npm install

PORT=8080
MONGODB_URI=mongodb://localhost:27017/dalle_database
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
CLOUDINARY_UPLOAD_PRESET=your-cloudinary-upload-preset
BING_API_ENDPOINT=https://api.bing.microsoft.com/v7.0/images/search
BING_API_KEY=your-bing-api-key
OPENAI_API_KEY=your-openai-api-key

# Start the backend server

cd server
npm start

# Start the frontend development server

cd ../client
npm start

Usage
Access the web application in your browser.

Enter a prompt in the input field and click on the "Generate Image" button.

The application will use the Bing Image Search API to find an image related to the prompt. The image will then be processed by the OpenAI DALL-E model, and the generated image will be displayed.
