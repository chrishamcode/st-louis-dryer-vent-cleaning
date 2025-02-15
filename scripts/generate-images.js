import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function generateImages() {
  // Create the public/images directory if it doesn't exist
  await fs.mkdir('public/images', { recursive: true });

  // Generate service image - Technician with cleaning rod
  const serviceImage = sharp({
    create: {
      width: 1200,
      height: 800,
      channels: 4,
      background: { r: 245, g: 245, b: 245, alpha: 1 }
    }
  })
  .composite([
    {
      input: Buffer.from(`
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
          <rect width="1200" height="800" fill="#f5f5f5"/>
          <!-- Wall and Dryer Vent -->
          <rect x="200" y="200" width="800" height="400" fill="#e0e0e0"/>
          <circle cx="400" cy="400" r="50" fill="#666"/>
          <!-- Cleaning Rod -->
          <rect x="400" y="390" width="400" height="20" fill="#444" transform="rotate(15, 400, 400)"/>
          <!-- Technician -->
          <path d="M700 300 Q750 250 800 300 L800 500 L700 500 Z" fill="#2B3F6B"/>
          <circle cx="750" cy="250" r="40" fill="#FFD6B1"/>
          <!-- Safety Equipment -->
          <rect x="730" y="240" width="40" height="20" fill="#fff"/>
        </svg>`),
      top: 0,
      left: 0
    }
  ])
  .sharpen()
  .jpeg({ quality: 90 });

  // Generate process image - Shop vac setup
  const processImage = sharp({
    create: {
      width: 1200,
      height: 800,
      channels: 4,
      background: { r: 245, g: 245, b: 245, alpha: 1 }
    }
  })
  .composite([
    {
      input: Buffer.from(`
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
          <rect width="1200" height="800" fill="#f5f5f5"/>
          <!-- Shop Vac -->
          <path d="M300 500 L400 500 L420 700 L280 700 Z" fill="#2B2B2B"/>
          <circle cx="350" cy="600" r="80" fill="#2B2B2B"/>
          <!-- Hose -->
          <path d="M400 550 Q500 500 600 550 Q700 600 800 550" 
                stroke="#444" stroke-width="40" fill="none"/>
          <!-- Dryer Vent Opening -->
          <rect x="750" y="500" width="100" height="100" rx="10" fill="#666"/>
          <!-- Wall -->
          <rect x="700" y="400" width="200" height="300" fill="#e0e0e0"/>
        </svg>`),
      top: 0,
      left: 0
    }
  ])
  .sharpen()
  .jpeg({ quality: 90 });

  // Save the images
  await serviceImage.toFile('public/images/dryer-vent-cleaning-service.jpg');
  await processImage.toFile('public/images/dryer-vent-cleaning-process.jpg');

  console.log('Images generated successfully!');
}

generateImages().catch(console.error);