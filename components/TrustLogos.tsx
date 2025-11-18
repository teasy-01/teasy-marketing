export function TrustLogos() {
  const logos = [
    { image: '/media/xbiz-logo.png', alt: "XBIZ" },
    { image: '/media/laweekly-logo.png', alt: "LA Weekly" },
    { image: '/media/avn-logo.png', alt: "AVN" },
    { image: '/media/fhm-logo.png', alt: "FHM" }
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
              className="flex items-center justify-center h-20 w-48 border border-gray-700 rounded-md bg-gray-900 px-6"
            >
              {logo.image ? (
                <img 
                  src={logo.image} 
                  alt={logo.alt}
                  className={`object-contain filter brightness-0 invert relative z-10 ${
                    logo.alt === "AVN" 
                      ? "max-h-12 max-w-32" 
                      : "max-h-full max-w-full"
                  }`}
                  loading="lazy"
                  width="192"
                  height="80"
                />
              ) : (
                <span className="text-gray-400" style={{ fontSize: '14px' }}>{logo.alt}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}