import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo and Company Description */}
          <div>
            <div className="mb-6">
              <img 
                src="/media/teasy-marketing-box-logo.png" 
                alt="TEASY Marketing" 
                className="w-full max-w-[240px] h-auto"
                loading="lazy"
                width="240"
                height="60"
              />
            </div>
            <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Teasy Marketing is the leading adult industry marketing agency, combining a decade of insider experience, data-driven strategy, and full-stack digital solutions to help studios and brands grow, scale, and dominate online.
            </p>
          </div>
          
          {/* Column 2: Services */}
          <nav aria-label="Footer services navigation">
            <h4 className="text-black mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/adult-seo" className="text-gray-600 hover:text-[#00A5DF]">Adult SEO</Link></li>
              <li><Link to="/adult-social-media" className="text-gray-600 hover:text-[#00A5DF]">Adult Social Media</Link></li>
              <li><Link to="/adult-website-design" className="text-gray-600 hover:text-[#00A5DF]">Adult Website Design</Link></li>
              <li><Link to="/adult-email-marketing" className="text-gray-600 hover:text-[#00A5DF]">Adult Email Marketing</Link></li>
              <li><Link to="/adult-content-marketing" className="text-gray-600 hover:text-[#00A5DF]">Adult Content Marketing</Link></li>
              <li><Link to="/adult-pr" className="text-gray-600 hover:text-[#00A5DF]">Adult PR</Link></li>
            </ul>
          </nav>
          
          {/* Column 3: Company */}
          <nav aria-label="Footer company navigation">
            <h4 className="text-black mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-[#00A5DF]">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-[#00A5DF]">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-[#00A5DF]">Contact</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-[#00A5DF]">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-[#00A5DF]">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500" style={{ fontSize: '14px' }}>
            © 2026 TEASY. All rights reserved.
          </p>
          
          <nav aria-label="Social media links">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/109954300/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00A5DF] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}