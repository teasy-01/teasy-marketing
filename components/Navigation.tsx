import { Logo } from './Logo';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsServicesOpen(false); // Reset desktop services state
            setIsMobileServicesOpen(false); // Reset mobile services state
          }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-6 py-4" style={{ display: 'block' }}>
            {/* Services Section */}
            <div style={{ 
              position: 'static', 
              width: '100%', 
              marginBottom: isMobileServicesOpen ? '280px' : '24px',
              display: 'block',
              float: 'none',
              clear: 'both',
              zIndex: '1'
            }}>
              <button 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 0',
                  background: 'transparent',
                  border: 'none',
                  color: '#d1d5db',
                  cursor: 'pointer',
                  marginBottom: '0',
                  position: 'relative',
                  zIndex: '1',
                  flexDirection: 'row',
                  verticalAlign: 'middle'
                }}
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                <span style={{ display: 'inline-block', lineHeight: '1.5' }}>Services</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  style={{ flexShrink: 0, marginLeft: 'auto', display: 'inline-flex', alignItems: 'center' }}
                />
              </button>
              {isMobileServicesOpen && (
                <div 
                  className="mobile-services-submenu"
                  style={{ 
                    marginTop: '8px',
                    marginBottom: '48px',
                    paddingLeft: '16px',
                    paddingBottom: '24px',
                    position: 'relative',
                    width: '100%',
                    display: 'block',
                    float: 'none',
                    clear: 'both',
                    zIndex: '1'
                  }}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      style={{ 
                        fontSize: '14px', 
                        padding: '8px 0', 
                        display: 'block',
                        width: '100%',
                        color: '#9ca3af',
                        textDecoration: 'none',
                        position: 'relative',
                        zIndex: '1'
                      }}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors block"
              style={{ marginBottom: '16px', padding: '8px 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-300 hover:text-white transition-colors block"
              style={{ marginBottom: '16px', padding: '8px 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <a 
              href="/#case-studies-section" 
              className="text-gray-300 hover:text-white transition-colors block"
              style={{ marginBottom: '16px', padding: '8px 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="/#testimonials-section" 
              className="text-gray-300 hover:text-white transition-colors block"
              style={{ marginBottom: '16px', padding: '8px 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="/#faq-section" 
              className="text-gray-300 hover:text-white transition-colors block"
              style={{ marginBottom: '16px', padding: '8px 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Link 
              to="/contact" 
              className="bg-[#00A5DF] text-white px-6 py-3 rounded-md hover:bg-[#0094c9] transition-colors block"
              style={{ 
                marginTop: '16px',
                textAlign: 'center',
                display: 'block',
                width: '100%'
              }}
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
