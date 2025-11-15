interface ProcessStep {
  number: string;
  title: "Discovery & Audit" | "Strategic Planning" | "Implementation" | "Optimization & Scale" | "Reporting & Growth";
  description: string;
}

export function Process() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We begin by analyzing your brand's current digital presence, identifying gaps, strengths, and hidden opportunities to understand exactly where you stand and what's needed for accelerated growth."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Using our audit findings, we craft a tailored strategy that aligns with your goals, audience behavior, and market trends—ensuring every move is intentional, targeted, and built for impact."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our team executes the full strategy with precision—optimizing pages, launching campaigns, refining creative, and deploying tools that set your brand up for performance-driven results across every channel."
    },
    {
      number: "04",
      title: "Optimization & Scale",
      description: "We constantly refine based on real data, adjusting campaigns, testing new angles, and expanding what works—allowing your brand to scale effectively and sustainably over time."
    },
    {
      number: "05",
      title: "Reporting & Growth",
      description: "You receive transparent, data-rich reports that show what's working, what's improving, and where we're heading next—keeping your brand aligned with long-term growth objectives."
    }
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-black mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>Our Marketing Process</h2>
          <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Our process blends data, creativity, and industry insight to build marketing that actually performs.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start p-8 bg-black border border-gray-800 rounded-lg hover:border-[#00A5DF] transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#00A5DF] text-white rounded-lg flex items-center justify-center">
                  <span style={{ fontSize: '20px' }}>{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-3">{step.title}</h3>
                <p className="text-gray-300" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}