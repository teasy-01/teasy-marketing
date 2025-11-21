import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="bg-black relative min-h-[650px] md:min-h-0">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/media/teasy-adult-marketing-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={(e) => {
            // Start playing only after data is loaded
            (e.target as HTMLVideoElement).play().catch(() => {
              // Ignore autoplay errors
            });
          }}
          onPosterLoad={() => {
            // Poster loaded successfully
          }}
          onPosterError={() => {
            // Poster failed to load, ensure black background shows
          }}
      >
          <source src="/media/teasy-adult-marketing.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 h-full min-h-[650px] md:min-h-0 flex items-center">
        <div className="max-w-4xl w-full">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#00A5DF] text-white rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
            TEASY Marketing
          </div>
          <h1 className="text-white mb-6 text-[50px] md:text-[64px]" style={{ lineHeight: '1.1' }}>
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