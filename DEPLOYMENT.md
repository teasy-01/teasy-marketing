# Teasy Marketing - Deployment Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- Vercel account (https://vercel.com)

## Local Development

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Deploy via Git (Recommended)

1. Initialize a Git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Teasy Marketing website"
   ```

2. Push to GitHub, GitLab, or Bitbucket:
   ```bash
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

3. Go to https://vercel.com and sign in

4. Click "Add New..." → "Project"

5. Select your repository

6. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`
   - **Output Directory**: `dist`

7. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

## Project Structure

```
teasy-marketing/
├── components/          # Reusable React components
│   ├── ui/             # UI component library
│   └── figma/          # Figma integration components
├── pages/              # Page components
├── public/             # Static assets
├── styles/             # Global CSS and Tailwind styles
├── main.tsx            # React entry point
├── App.tsx             # Main App component
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vercel.json         # Vercel deployment configuration
└── package.json        # Dependencies and scripts
```

## Environment Variables

To add environment variables:

1. Create a `.env.local` file in the root directory (this file is ignored by Git)
2. Add your environment variables in the format: `VITE_VARIABLE_NAME=value`
3. Access them in your code via `import.meta.env.VITE_VARIABLE_NAME`

Note: Only variables prefixed with `VITE_` are exposed to the client.

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Radix UI** - Unstyled, accessible component primitives
- 📱 **Responsive Design** - Mobile-first responsive layouts
- 🔍 **SEO Optimized** - Meta tags, structured data, and sitemap

## Build Process

The build process:

1. Compiles TypeScript and JSX files
2. Optimizes and bundles JavaScript
3. Processes Tailwind CSS
4. Generates production-ready assets in `dist/`
5. Minifies code for faster loading

## Performance Tips

- Images are served from Unsplash CDN for optimal performance
- CSS is purged to only include used styles
- JavaScript is tree-shaken to remove unused code
- Assets are cached by Vercel's CDN

## Troubleshooting

### Build Fails

1. Clear `node_modules`:
   ```bash
   rm -rf node_modules
   npm install
   ```

2. Clear Vite cache:
   ```bash
   rm -rf dist
   ```

3. Check Node.js version:
   ```bash
   node --version  # Should be 18+
   ```

### Port Already in Use

If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Deployment Issues

1. Check that all environment variables are set in Vercel dashboard
2. Verify build command succeeds locally
3. Check Vercel deployment logs for specific errors

## Support

For issues or questions, contact the development team or refer to:
- Vite Documentation: https://vitejs.dev
- Vercel Documentation: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com
- React Documentation: https://react.dev

