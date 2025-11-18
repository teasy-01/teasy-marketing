import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { AlertCircle, Home, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEOHead
        title="404 - Page Not Found | TEASY Marketing"
        description="The page you're looking for doesn't exist. Return to TEASY Marketing homepage or explore our adult industry marketing services."
        canonical="https://teasymarketing.com/404"
      />
      <Navigation />
      <main className="flex-grow flex items-center justify-center">
        <section className="bg-white w-full">
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <div className="flex justify-center mb-8">
              <AlertCircle className="w-24 h-24 text-[#00A5DF]" />
            </div>
            
            <h1 className="text-black mb-6" style={{ fontSize: '96px', lineHeight: '1.1' }}>
              404
            </h1>
            
            <h2 className="text-black mb-6">
              Page Not Found
            </h2>
            
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might be incorrect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-[#00A5DF] text-white px-8 py-4 hover:bg-[#0094cc] transition-colors"
              >
                <Home className="w-5 h-5" />
                <span style={{ fontSize: '18px' }}>Go to Homepage</span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 hover:bg-gray-900 transition-colors"
              >
                <Search className="w-5 h-5" />
                <span style={{ fontSize: '18px' }}>Contact Us</span>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-16 pt-16 border-t border-gray-200">
              <p className="text-gray-500 mb-6" style={{ fontSize: '16px' }}>
                Popular Pages
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <Link
                  to="/adult-seo"
                  className="text-gray-600 hover:text-[#00A5DF] transition-colors"
                  style={{ fontSize: '16px' }}
                >
                  Adult SEO
                </Link>
                <Link
                  to="/adult-social-media"
                  className="text-gray-600 hover:text-[#00A5DF] transition-colors"
                  style={{ fontSize: '16px' }}
                >
                  Social Media
                </Link>
                <Link
                  to="/adult-website-design"
                  className="text-gray-600 hover:text-[#00A5DF] transition-colors"
                  style={{ fontSize: '16px' }}
                >
                  Website Design
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-[#00A5DF] transition-colors"
                  style={{ fontSize: '16px' }}
                >
                  About Us
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-[#00A5DF] transition-colors"
                  style={{ fontSize: '16px' }}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#00A5DF] transition-colors"
                  style={{ fontSize: '16px' }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
