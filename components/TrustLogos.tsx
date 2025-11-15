export function TrustLogos() {
  const logos = [
    { image: null, alt: "OnlyFans" },
    { image: null, alt: "Fansly" },
    { image: null, alt: "Scrile" },
    { image: null, alt: "LoyalFans" }
  ];

  return (
    <section className="bg-black border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-center text-white mb-10 tracking-wide uppercase" style={{ fontSize: '14px' }}>
          Mentioned by Leading Brands
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-20 w-48 text-gray-400 border border-gray-700 rounded-md bg-gray-900 px-6"
            >
              <span style={{ fontSize: '14px' }}>{logo.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}