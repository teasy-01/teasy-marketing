import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustLogos } from './components/TrustLogos';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { OrganizationSchema, WebsiteSchema } from './components/StructuredData';
import { CookieConsent } from './components/CookieConsent';

// Lazy load below-the-fold components
const ServicesGrid = lazy(() => import('./components/ServicesGrid').then(m => ({ default: m.ServicesGrid })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const ContentShowcase = lazy(() => import('./components/ContentShowcase').then(m => ({ default: m.ContentShowcase })));
const CaseStudies = lazy(() => import('./components/CaseStudies').then(m => ({ default: m.CaseStudies })));
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CTABanner = lazy(() => import('./components/CTABanner').then(m => ({ default: m.CTABanner })));

// Lazy load all pages for code splitting
const AdultSEOPage = lazy(() => import('./pages/AdultSEOPage'));
const AdultSocialMediaPage = lazy(() => import('./pages/AdultSocialMediaPage'));
const AdultWebsiteDesignPage = lazy(() => import('./pages/AdultWebsiteDesignPage'));
const AdultEmailMarketingPage = lazy(() => import('./pages/AdultEmailMarketingPage'));
const AdultContentMarketingPage = lazy(() => import('./pages/AdultContentMarketingPage'));
const AdultPRPage = lazy(() => import('./pages/AdultPRPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostSEO = lazy(() => import('./pages/BlogPostSEO'));
const BlogPostTeasyAgency = lazy(() => import('./pages/BlogPostTeasyAgency'));
const CaseStudy1 = lazy(() => import('./pages/CaseStudy1'));
const CaseStudy2 = lazy(() => import('./pages/CaseStudy2'));
const CaseStudy3 = lazy(() => import('./pages/CaseStudy3'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#00A5DF]"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

function HomePage() {
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
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <ServicesGrid />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <ContentShowcase />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <CaseStudies />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <Process />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <CTABanner />
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  const homeSections = ['services', 'case-studies-section', 'testimonials-section', 'faq-section', 'process', 'why-choose-us'];

  useEffect(() => {
    // Handle hash navigation for home page sections
    const hash = window.location.hash.slice(1);
    if (pathname === '/' && hash && homeSections.includes(hash)) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top for page changes - use multiple methods for reliability
      // Immediate scroll without animation
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Also scroll after a small delay to ensure content is loaded
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adult-seo" element={<AdultSEOPage />} />
          <Route path="/adult-social-media" element={<AdultSocialMediaPage />} />
          <Route path="/adult-website-design" element={<AdultWebsiteDesignPage />} />
          <Route path="/adult-email-marketing" element={<AdultEmailMarketingPage />} />
          <Route path="/adult-content-marketing" element={<AdultContentMarketingPage />} />
          <Route path="/adult-pr" element={<AdultPRPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog-post-seo" element={<BlogPostSEO />} />
              <Route path="/blog-post-teasy-agency" element={<BlogPostTeasyAgency />} />
          <Route path="/case-study-1" element={<CaseStudy1 />} />
          <Route path="/case-study-2" element={<CaseStudy2 />} />
          <Route path="/case-study-3" element={<CaseStudy3 />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}