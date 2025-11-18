import { Logo } from './Logo';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Adult SEO', href: '/adult-seo' },
    { name: 'Adult Social Media', href: '/adult-social-media' },
    { name: 'Adult Website Design', href: '/adult-website-design' },
    { name: 'Adult Email Marketing', href: '/adult-email-marketing' },
    { name: 'Adult Content Marketing', href: '/adult-content-marketing' },
    { name: 'Adult PR', href: '/adult-pr' }
  ];

  return (
    <nav className="border-b border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isServicesOpen && (
              <nav className="absolute top-full left-0 pt-2 z-50" aria-label="Services submenu">
                <ul className="w-64 bg-black border border-gray-800 rounded-md shadow-lg py-2">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.href}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
                        style={{ fontSize: '14px' }}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
            Blog
          </Link>
          <a href="/#case-studies-section" className="text-gray-300 hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="/#testimonials-section" className="text-gray-300 hover:text-white transition-colors">
            Testimonials
          </a>
          <a href="/#faq-section" className="text-gray-300 hover:text-white transition-colors">
            FAQ
          </a>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
          <Link 
            to="/contact" 
            className="bg-[#00A5DF] text-white px-6 py-2 rounded-md hover:bg-[#0094c9] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-6 py-4 flex flex-col gap-4">
            {/* Services Section */}
            <div>
              <button 
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 w-full text-left"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <ul className="mt-2 ml-4 flex flex-col gap-2">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.href}
                        className="text-gray-400 hover:text-white transition-colors py-2"
                        style={{ fontSize: '14px' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <a 
              href="/#case-studies-section" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="/#testimonials-section" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="/#faq-section" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-[#00A5DF] text-white px-6 py-3 rounded-md hover:bg-[#0094c9] transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}