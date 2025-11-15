import { ImageWithFallback } from './figma/ImageWithFallback';

const ctaImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop';

export function CTABanner() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-1 md:order-1">
            <h2 className="text-white mb-6" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              Your Growth Engine Starts Here.
            </h2>
            <p className="text-gray-300 mb-10" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              Talk with our experts and see what happens when real industry knowledge meets performance-driven marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-[#00A5DF] text-white px-8 py-4 rounded-md hover:bg-[#0094c9] transition-colors inline-block text-center"
              >
                Work With Us
              </a>
              <a 
                href="#case-studies" 
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-md hover:bg-white hover:text-black transition-colors inline-block text-center"
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