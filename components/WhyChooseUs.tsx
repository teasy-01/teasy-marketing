import { Award, Users, Zap, Shield } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function WhyChooseUs() {
  const features: Feature[] = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "10+ Years of Industry Insight",
      description: "A decade of hands-on experience with adult brands, creators, and platforms."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Dual-Sided Expertise",
      description: "SEO, affiliate, and creator marketing combined for a complete growth advantage."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Data-Led Decisions",
      description: "Strategies rooted in analytics, performance testing, and real market behavior."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Built for Adult Brands",
      description: "Marketing tailored specifically to how adult audiences search, engage, and convert."
    }
  ];

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-white mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>Why Choose TEASY</h2>
          <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Built by two industry veterans, Teasy brings a decade of real adult-marketing experience that traditional agencies simply don't have.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <article key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00A5DF] text-white rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}