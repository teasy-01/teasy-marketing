# Push Changes to GitHub

Due to an xcrun error with macOS Command Line Tools, please run these commands manually:

## Step 1: Fix xcrun (if needed)
```bash
sudo xcode-select --reset
# OR
xcode-select --install
```

## Step 2: Push to GitHub
```bash
cd "/Users/bizmanager/Desktop/Teasy Marketing"
git add .
git commit -m "Update media assets: replace images with videos, add team photos, update logos and CTAs"
git push origin main
```

## Summary of Changes Made:
- Replaced hero images with videos on all service pages
- Added team member photos (Taylor, Alex, Chelsey, Hannah, Katie, Malisa)
- Updated navigation logo to teasy-marketing-logo.png
- Updated footer logo to teasy-marketing-box-logo.png
- Updated CTA banner image to cta-marketing.jpg
- Converted and updated case study images
- Updated TrustLogos with brand logos (XBIZ, LA Weekly, AVN, FHM)
- Updated copyright year to 2026
- Reduced testimonials to 3 reviews
