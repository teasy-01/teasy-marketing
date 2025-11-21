import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = [
  '/',
  '/adult-seo',
  '/adult-social-media',
  '/adult-website-design',
  '/adult-email-marketing',
  '/adult-content-marketing',
  '/adult-pr',
  '/about',
  '/contact',
  '/blog',
  '/blog-post-seo',
  '/case-study-1',
  '/case-study-2',
  '/case-study-3',
  '/privacy-policy',
  '/terms-of-service',
];

const distDir = join(__dirname, '../dist');
const baseUrl = process.env.BASE_URL || 'http://localhost:4173';

// Start preview server
function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log('🚀 Starting preview server...');
    const server = spawn('npx', ['vite', 'preview', '--host', '--port', '4173'], {
      stdio: 'pipe',
      shell: true,
    });

    let serverReady = false;

    server.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('localhost:4173')) {
        if (!serverReady) {
          serverReady = true;
          console.log('✅ Preview server started');
          resolve(server);
        }
      }
    });

    server.stderr.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('localhost:4173')) {
        if (!serverReady) {
          serverReady = true;
          console.log('✅ Preview server started');
          resolve(server);
        }
      }
    });

    // Fallback: resolve after 5 seconds
    setTimeout(() => {
      if (!serverReady) {
        serverReady = true;
        console.log('✅ Preview server assumed ready');
        resolve(server);
      }
    }, 5000);
  });
}

// Check if preview server is ready
async function waitForServer(url, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        console.log('✅ Preview server is ready');
        return true;
      }
    } catch (error) {
      // Server not ready yet
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  throw new Error('Preview server did not start in time');
}

async function prerender() {
  console.log('🚀 Starting SSG prerender...');
  
  // Check if server is already running
  let serverProcess = null;
  try {
    await waitForServer(baseUrl, 2);
    console.log('📡 Using existing preview server');
  } catch (error) {
    // Start our own server
    serverProcess = await startPreviewServer();
    await waitForServer(baseUrl);
  }
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({ width: 1920, height: 1080 });

  for (const route of routes) {
    try {
      console.log(`📄 Prerendering: ${route}`);
      
      const url = `${baseUrl}${route}`;
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Wait for React to render and lazy components to load
      await page.waitForTimeout(3000);

      // Get rendered HTML
      const html = await page.content();

      // Determine file path
      let filePath;
      if (route === '/') {
        filePath = join(distDir, 'index.html');
      } else {
        const dirPath = join(distDir, route);
        mkdirSync(dirPath, { recursive: true });
        filePath = join(dirPath, 'index.html');
      }

      // Fix relative paths in HTML (ensure they're absolute from root)
      const fixedHtml = html
        .replace(/href="\//g, 'href="/')
        .replace(/src="\//g, 'src="/')
        .replace(/srcset="\//g, 'srcset="/');

      // Write HTML file
      writeFileSync(filePath, fixedHtml, 'utf-8');
      console.log(`✅ Generated: ${filePath}`);
    } catch (error) {
      console.error(`❌ Error prerendering ${route}:`, error.message);
    }
  }

  await browser.close();
  
  // Kill server if we started it
  if (serverProcess) {
    console.log('🛑 Stopping preview server...');
    serverProcess.kill();
  }
  
  console.log('✨ SSG prerender complete!');
  console.log(`📦 Static files generated in: ${distDir}`);
}

// Start prerender process
prerender().catch((error) => {
  console.error('❌ Prerender failed:', error);
  process.exit(1);
});


