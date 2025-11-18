import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const ctaImage = '/media/cta-marketing.jpg';

export function CTABanner() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Content Side */}
          <div className="order-1 md:order-1">
            <h2 className="text-white mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your Growth Engine Starts Here.
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg leading-relaxed">
              Talk with our experts and see what happens when real industry knowledge meets performance-driven marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                to="/contact" 
                className="bg-[#00A5DF] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-[#0094c9] transition-colors inline-block text-center text-sm sm:text-base font-medium"
              >
                Work With Us
              </Link>
              <a 
                href="/#case-studies-section" 
                className="bg-transparent text-white border-2 border-white px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-white hover:text-black transition-colors inline-block text-center text-sm sm:text-base font-medium"
              >
                See More Results
              </a>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="order-2 md:order-2">
            <ImageWithFallback 
              src={ctaImage}
              alt="Professional model in modern studio setting"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}