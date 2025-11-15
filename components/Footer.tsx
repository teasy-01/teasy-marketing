import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo and Company Description */}
          <div>
            <div className="mb-6">
              <Logo variant="dark" className="w-full max-w-[240px]" />
            </div>
            <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Teasy Marketing is the leading adult industry marketing agency, combining a decade of insider experience, data-driven strategy, and full-stack digital solutions to help studios and brands grow, scale, and dominate online.
            </p>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h4 className="text-black mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#adult-seo" className="text-gray-600 hover:text-[#00A5DF]">Adult SEO</a></li>
              <li><a href="#adult-social-media" className="text-gray-600 hover:text-[#00A5DF]">Adult Social Media</a></li>
              <li><a href="#adult-website-design" className="text-gray-600 hover:text-[#00A5DF]">Adult Website Design</a></li>
              <li><a href="#adult-email-marketing" className="text-gray-600 hover:text-[#00A5DF]">Adult Email Marketing</a></li>
              <li><a href="#adult-content-marketing" className="text-gray-600 hover:text-[#00A5DF]">Adult Content Marketing</a></li>
              <li><a href="#adult-pr" className="text-gray-600 hover:text-[#00A5DF]">Adult PR</a></li>
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div>
            <h4 className="text-black mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-[#00A5DF]">About Us</a></li>
              <li><a href="#blog" className="text-gray-600 hover:text-[#00A5DF]">Blog</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[#00A5DF]">Contact</a></li>
              <li><a href="#terms-of-service" className="text-gray-600 hover:text-[#00A5DF]">Terms of Service</a></li>
              <li><a href="#privacy-policy" className="text-gray-600 hover:text-[#00A5DF]">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500" style={{ fontSize: '14px' }}>
            © 2025 TEASY. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#linkedin" className="text-gray-500 hover:text-[#00A5DF] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#twitter" className="text-gray-500 hover:text-[#00A5DF] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#facebook" className="text-gray-500 hover:text-[#00A5DF] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#instagram" className="text-gray-500 hover:text-[#00A5DF] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}