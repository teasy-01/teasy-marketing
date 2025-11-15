import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const COOKIE_CONSENT_KEY = 'teasy_cookie_consent';

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-black text-white z-50 shadow-lg border-t-2 border-[#00A5DF]"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Cookie className="w-8 h-8 text-[#00A5DF]" />
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-white mb-2" style={{ fontSize: '18px' }}>
              We Use Cookies
            </h3>
            <p className="text-gray-300" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept", you consent to our use of cookies. Learn more in our{' '}
              <a href="#privacy-policy" className="text-[#00A5DF] hover:underline">
                Privacy Policy
              </a>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptCookies}
              className="bg-[#00A5DF] text-white px-6 py-3 hover:bg-[#0094cc] transition-colors whitespace-nowrap"
              style={{ fontSize: '16px' }}
            >
              Accept All
            </button>
            <button
              onClick={declineCookies}
              className="bg-gray-800 text-white px-6 py-3 hover:bg-gray-700 transition-colors whitespace-nowrap"
              style={{ fontSize: '16px' }}
            >
              Decline
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 md:relative md:top-0 md:right-0 text-gray-400 hover:text-white transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}