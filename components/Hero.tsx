const heroImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop';

export function Hero() {
  return (
    <section className="bg-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
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
            <a 
              href="#contact" 
              className="bg-[#00A5DF] text-white px-8 py-4 rounded-md hover:bg-[#0094c9] transition-colors inline-block"
            >
              Work With Us
            </a>
            <a 
              href="#services" 
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