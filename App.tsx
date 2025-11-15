import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustLogos } from './components/TrustLogos';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContentShowcase } from './components/ContentShowcase';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { OrganizationSchema, WebsiteSchema } from './components/StructuredData';
import AdultSEOPage from './pages/AdultSEOPage';
import AdultSocialMediaPage from './pages/AdultSocialMediaPage';
import AdultWebsiteDesignPage from './pages/AdultWebsiteDesignPage';
import AdultEmailMarketingPage from './pages/AdultEmailMarketingPage';
import AdultContentMarketingPage from './pages/AdultContentMarketingPage';
import AdultPRPage from './pages/AdultPRPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostSEO from './pages/BlogPostSEO';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy2 from './pages/CaseStudy2';
import CaseStudy3 from './pages/CaseStudy3';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';
import { CookieConsent } from './components/CookieConsent';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Define section IDs that exist on the home page
  const homeSections = ['services', 'case-studies', 'testimonials', 'faq', 'process', 'why-choose-us'];

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      
      if (!hash) {
        setCurrentPage('home');
        window.scrollTo(0, 0);
        return;
      }

      // Check if it's a home page section
      if (homeSections.includes(hash)) {
        // Navigate to home if not already there
        if (currentPage !== 'home') {
          setCurrentPage('home');
          // Wait for home page to render, then scroll to section
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          // Already on home, just scroll to section
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        // It's a page route, change page and scroll to top
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  // Route to Adult SEO page
  if (currentPage === 'adult-seo') {
    return <AdultSEOPage />;
  }

  // Route to Adult Social Media page
  if (currentPage === 'adult-social-media') {
    return <AdultSocialMediaPage />;
  }

  // Route to Adult Website Design page
  if (currentPage === 'adult-website-design') {
    return <AdultWebsiteDesignPage />;
  }

  // Route to Adult Email Marketing page
  if (currentPage === 'adult-email-marketing') {
    return <AdultEmailMarketingPage />;
  }

  // Route to Adult Content Marketing page
  if (currentPage === 'adult-content-marketing') {
    return <AdultContentMarketingPage />;
  }

  // Route to Adult PR page
  if (currentPage === 'adult-pr') {
    return <AdultPRPage />;
  }

  // Route to About page
  if (currentPage === 'about') {
    return <AboutPage />;
  }

  // Route to Contact page
  if (currentPage === 'contact') {
    return <ContactPage />;
  }

  // Route to Blog page
  if (currentPage === 'blog') {
    return <BlogPage />;
  }

  // Route to Blog Post SEO page
  if (currentPage === 'blog-post-seo') {
    return <BlogPostSEO />;
  }

  // Route to Case Study 1 page
  if (currentPage === 'case-study-1') {
    return <CaseStudy1 />;
  }

  // Route to Case Study 2 page
  if (currentPage === 'case-study-2') {
    return <CaseStudy2 />;
  }

  // Route to Case Study 3 page
  if (currentPage === 'case-study-3') {
    return <CaseStudy3 />;
  }

  // Route to Privacy Policy page
  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicyPage />;
  }

  // Route to Terms of Service page
  if (currentPage === 'terms-of-service') {
    return <TermsOfServicePage />;
  }

  // Route to Not Found page
  if (currentPage === 'not-found') {
    return <NotFoundPage />;
  }

  // Default home page
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="The #1 Adult Industry Marketing Agency - TEASY"
        description="Premium marketing agency specializing in adult industry SEO, social media, content marketing, and digital strategy."
        canonical="https://teasymarketing.com"
        keywords="adult industry marketing, adult SEO, OnlyFans marketing, adult social media, adult content marketing"
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <Navigation />
      <main>
        <Hero />
        <TrustLogos />
        <ServicesGrid />
        <WhyChooseUs />
        <ContentShowcase />
        <CaseStudies />
        <Process />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}