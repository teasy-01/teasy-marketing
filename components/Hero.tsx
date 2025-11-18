import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="bg-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={(e) => {
            // Start playing only after data is loaded
            (e.target as HTMLVideoElement).play().catch(() => {
              // Ignore autoplay errors
            });
          }}
      >
          <source src="/media/teasy-adult-marketing.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-white mb-6" style={{ fontSize: '64px', lineHeight: '1.1' }}>
            The #1 Adult Digital Marketing Agency
          </h1>
          <p className="text-gray-100 mb-10 max-w-2xl" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Where elite adult brands partner with seasoned marketers who understand the adult industry from the inside out.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="bg-[#00A5DF] text-white px-8 py-4 rounded-md hover:bg-[#0094c9] transition-colors inline-block"
            >
              Work With Us
            </Link>
            <a 
              href="/#services" 
              className="bg-white text-black border-2 border-white px-8 py-4 rounded-md hover:bg-gray-100 transition-colors inline-block"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}