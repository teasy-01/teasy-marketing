#!/bin/bash

# Teasy Marketing - Vercel Deployment Script
# This script automates the deployment process

set -e

echo "🚀 Teasy Marketing - Vercel Deployment Script"
echo "=============================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📍 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already initialized"
fi

echo ""
echo "📍 Checking for uncommitted changes..."
if [ -n "$(git status --porcelain)" ]; then
    echo "Adding files to Git..."
    git add .
    echo "Committing changes..."
    git commit -m "Deploy Teasy Marketing to Vercel"
    echo "✅ Changes committed"
else
    echo "✅ No uncommitted changes"
fi

echo ""
echo "📍 Checking if Vercel CLI is installed..."
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
    echo "✅ Vercel CLI installed"
else
    echo "✅ Vercel CLI is installed"
fi

echo ""
echo "📍 Building project for production..."
npm run build
echo "✅ Build complete"

echo ""
echo "📍 Deploying to Vercel..."
echo ""
echo "You will be prompted to:"
echo "1. Login to Vercel (if not already logged in)"
echo "2. Set up a new project or link to existing"
echo "3. Confirm deployment settings"
echo ""
echo "Press Enter to continue..."
read

vercel --prod

echo ""
echo "=============================================="
echo "✅ Deployment Complete!"
echo "=============================================="
echo ""
echo "Your site is now live on Vercel!"
echo ""
echo "Next steps:"
echo "1. Check your Vercel dashboard: https://vercel.com/dashboard"
echo "2. Add a custom domain (optional)"
echo "3. Configure environment variables (if needed)"
echo ""
echo "For more info, see DEPLOYMENT.md"

