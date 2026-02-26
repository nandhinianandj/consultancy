const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(BASE_DIR, 'public');
const AXELROD_VID_DIR = path.join(BASE_DIR, '..', 'AxelrodEconomy', 'visualizations');

// Ensure public directory exists
fs.mkdirSync(PUBLIC_DIR, { recursive: true });

// Copy latest Axelrod Economy video
const videoSources = ['economy_evolution.mp4', 'network_cliques.mp4', 'status_vs_leisure.mp4'];
let copiedVideo = false;
for (const video of videoSources) {
    const srcPath = path.join(AXELROD_VID_DIR, video);
    if (fs.existsSync(srcPath)) {
        const destPath = path.join(PUBLIC_DIR, 'economy_latest.mp4');
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${srcPath} to ${destPath}`);
        copiedVideo = true;
        break;
    }
}
if (!copiedVideo) {
    console.log('No Axelrod Economy video found for copying.');
}

// Copy Axelrod Echoonomy screenshots
const screenshotSources = ['long_term_evolution.png', 'pumpelsdrop_economy.png', 'tournament_results.png'];
for (const screenshot of screenshotSources) {
    const srcPath = path.join(AXELROD_VID_DIR, screenshot);
    if (fs.existsSync(srcPath)) {
        const destPath = path.join(PUBLIC_DIR, screenshot); // Copy to public dir with same name
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${srcPath} to ${destPath}`);
    }
}

// Placeholder for compass screenshot if it doesn't exist
const compassImagePath = path.join(PUBLIC_DIR, 'dashboard_compass_2026-02-25.png');
if (!fs.existsSync(compassImagePath)) {
    const placeholderSize = { width: 800, height: 600 };
    const placeholderImg = Image.new('RGB', placeholderSize, '#767676'); // Gray placeholder
    const context = placeholderImg.getContext('2d');
    context.font = '40px DejaVu Sans'; // Adjust font as needed
    context.fillStyle = '#cccccc'; // Light gray text
    const text = 'GroundNewsOps Compass Visualization (Placeholder)';
    const textMetrics = context.measureText(text);
    const textX = (placeholderSize.width - textMetrics.width) / 2;
    const textY = (placeholderSize.height - (textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent)) / 2;
    context.fillText(text, textX, textY);
    // Save as PNG
    placeholderImg.write(compassImagePath); 
    console.log(`Created placeholder image at ${compassImagePath}`);
}
