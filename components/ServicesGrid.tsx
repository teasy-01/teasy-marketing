import { Search, TrendingUp, Target, BarChart3, Mail, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function ServicesGrid() {
  const services: Service[] = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Adult SEO",
      description: "Increase organic traffic and visibility with search strategies built specifically for how adult brands rank, convert, and outperform competitors.",
      link: "/adult-seo"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Adult Social Media Marketing",
      description: "Grow your brand across major platforms with tailored social strategies built to boost engagement, authority, and long-term audience loyalty.",
      link: "/adult-social-media"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Adult Website Design",
      description: "We design modern, high-performing websites that elevate your brand, improve conversions, and deliver a seamless experience for adult audiences.",
      link: "/adult-website-design"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Adult Email Marketing",
      description: "Turn your audience into repeat buyers with targeted email campaigns that drive conversions, nurture relationships, and retain long-term customers.",
      link: "/adult-email-marketing"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Adult Content Marketing",
      description: "Strengthen your brand with strategic content that educates, engages, and positions you as a leading authority within the adult industry.",
      link: "/adult-content-marketing"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Adult PR",
      description: "Amplify your reputation with strategic PR campaigns that secure media coverage, build credibility, and elevate your presence across the adult space.",
      link: "/adult-pr"
    }
  ];

  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-black mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>Our Adult Marketing Services</h2>
          <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Our solutions blend a decade of insider expertise with modern strategy to drive real performance for adult brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={index}
              className="p-8 border border-gray-800 rounded-lg hover:border-[#00A5DF] transition-colors bg-black"
            >
              <div className="text-[#00A5DF] mb-4">
                {service.icon}
              </div>
              <h3 className="text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                {service.description}
              </p>
              <Link 
                to={service.link}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00A5DF] text-white rounded-lg hover:bg-[#0094c9] transition-colors"
              >
                Learn More
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}