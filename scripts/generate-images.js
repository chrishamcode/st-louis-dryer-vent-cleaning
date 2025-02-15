import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function generateImages() {
  // Create the public/images directory if it doesn't exist
  await fs.mkdir('public/images', { recursive: true });

  // Read the SVG files
  const serviceSvg = await fs.readFile('public/images/dryer-vent-cleaning-service.svg');
  const processSvg = await fs.readFile('public/images/dryer-vent-cleaning-process.svg');

  // Generate service image with high quality settings
  await sharp(serviceSvg)
    .resize(1200, 800, {
      fit: 'contain',
      background: { r: 245, g: 245, b: 245, alpha: 1 }
    })
    .sharpen()
    .jpeg({ 
      quality: 100,
      chromaSubsampling: '4:4:4'
    })
    .toFile('public/images/dryer-vent-cleaning-service.jpg');

  // Generate process image with high quality settings
  await sharp(processSvg)
    .resize(1200, 800, {
      fit: 'contain',
      background: { r: 245, g: 245, b: 245, alpha: 1 }
    })
    .sharpen()
    .jpeg({ 
      quality: 100,
      chromaSubsampling: '4:4:4'
    })
    .toFile('public/images/dryer-vent-cleaning-process.jpg');

  console.log('Images generated successfully with high quality settings!');
}

generateImages().catch(console.error);