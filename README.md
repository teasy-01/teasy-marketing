# Teasy Marketing - Adult Industry Marketing Agency Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-38B2AC?style=flat&logo=tailwind-css)

## 🎯 Overview

Teasy Marketing is a modern, high-performance website for an adult industry digital marketing agency. Built with React, TypeScript, Vite, and Tailwind CSS, the site showcases marketing services, case studies, and team expertise.

## ✨ Features

- ⚡ **Ultra-Fast**: Built with Vite, ~5ms development server startup
- 🎨 **Beautiful Design**: Tailwind CSS with custom components
- 📱 **Responsive**: Mobile-first design approach
- ♿ **Accessible**: WCAG compliant with Radix UI primitives
- 🔍 **SEO Optimized**: Meta tags, structured data, sitemap
- 🔒 **Secure**: Security headers, HTTPS, XSS protection
- 📊 **Analytics Ready**: Open Graph, Twitter cards, tracking
- ⚙️ **Type Safe**: Full TypeScript support
- 🚀 **Production Ready**: Optimized builds, minified assets

## 🛠 Tech Stack

### Frontend
- **React 18** - Latest React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible components

### Development
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

### Deployment
- **Vercel** - Serverless deployment platform
- **Git** - Version control

## 📦 Installation

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/teasy-marketing.git
cd teasy-marketing

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

## 🚀 Deployment

### Quick Deploy (5 minutes)

1. **Initialize Git and commit:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Teasy Marketing"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/teasy-marketing.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select your repository
   - Click "Deploy"

   **Or use Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Configuration

The project includes optimized configurations:
- `vercel.json` - Deployment settings
- `vite.config.ts` - Build configuration
- `tailwind.config.js` - Styling configuration
- `tsconfig.json` - TypeScript settings

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📁 Project Structure

```
teasy-marketing/
├── components/              # Reusable React components
│   ├── ui/                 # UI components (accordion, buttons, etc.)
│   ├── figma/              # Figma integration
│   ├── Navigation.tsx       # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── CaseStudies.tsx      # Case studies showcase
│   └── ...
├── pages/                   # Page components
│   ├── AboutPage.tsx        # About us page
│   ├── CaseStudy1-3.tsx     # Case study pages
│   ├── ContactPage.tsx      # Contact page
│   └── ...
├── styles/                  # Global styles
│   └── globals.css         # Tailwind setup
├── public/                  # Static assets
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine directives
├── App.tsx                  # Main app component
├── main.tsx                 # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── vercel.json              # Vercel settings
└── README.md               # This file
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint

# Deployment
vercel                   # Deploy to Vercel
vercel --prod           # Deploy to production
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
extend: {
  colors: {
    primary: '#00A5DF',
    // ... more colors
  }
}
```

### Fonts
Add custom fonts in `styles/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Content
Update component content in `pages/` and `components/` directories.

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| Build Time | 1.93s |
| JS Size | 351.87 kB (100.12 kB gzipped) |
| CSS Size | 74.83 kB (12.79 kB gzipped) |
| Total Gzipped | ~113 kB |
| Lighthouse Score | 90+ |

## 🔐 Security

- ✅ Security headers configured
- ✅ HTTPS enforced
- ✅ XSS protection enabled
- ✅ Content-type sniffing prevention
- ✅ Clickjacking protection
- ✅ No sensitive data in client code

## 🌍 SEO

- ✅ Meta tags management
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml included
- ✅ robots.txt configured
- ✅ Open Graph support
- ✅ Twitter card support
- ✅ Canonical URLs

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Documentation

- [START_HERE.md](./START_HERE.md) - Quick start guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [VERCEL_DEPLOYMENT_CHECKLIST.md](./VERCEL_DEPLOYMENT_CHECKLIST.md) - Step-by-step checklist
- [FINAL_CHECKLIST.md](./FINAL_CHECKLIST.md) - Pre-deployment checklist

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📝 License

This project is proprietary. All rights reserved.

## 👥 Team

- **Taylor Moore** - Co-Founder, Creative Direction
- **Alex Lirette** - Co-Founder, Performance & Analytics

## 🆘 Support

For issues or questions:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for troubleshooting
2. Review [vercel.json](./vercel.json) configuration
3. Check Vercel dashboard build logs
4. Contact the development team

## 📞 Contact

- Website: https://teasymarketing.com
- Email: info@teasymarketing.com

---

## 🎉 Getting Started

**New to this project?** Start here:

1. Read [START_HERE.md](./START_HERE.md)
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173
5. Make changes and see them live!

**Ready to deploy?** Follow [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Status**: ✅ Production Ready

Built with ❤️ for the adult industry marketing space.

**Last Updated**: November 2025

