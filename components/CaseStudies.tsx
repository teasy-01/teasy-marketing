import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudy1Image = '/media/adult-talent-agency.jpg';
const caseStudy2Image = '/media/online-creator.jpg';
const caseStudy3Image = '/media/snapchat-marketing.jpg';

interface CaseStudy {
  image: string;
  industry: string;
  title: string;
  result1: string;
  result2: string;
  result3: string;
  link: string;
}

export function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      image: caseStudy1Image,
      industry: "Adult Talent Agency",
      title: "From Startup to Industry Leader in 12 Months",
      result1: "Top 3 rankings for major keywords",
      result2: "500+ qualified creator applicants",
      result3: "285% increase in brand mentions",
      link: "/case-study-1"
    },
    {
      image: caseStudy2Image,
      industry: "Online Creator",
      title: "From Hidden to Thriving: Tripling Revenue in 8 Months",
      result1: "425% increase in social media followers",
      result2: "680% more traffic to subscription platform",
      result3: "3.2x revenue growth",
      link: "/case-study-2"
    },
    {
      image: caseStudy3Image,
      industry: "Snapchat Marketing",
      title: "Explosive Snapchat Growth Through Adult SEO",
      result1: "540% increase in Snapchat followers",
      result2: "890% growth in organic traffic",
      result3: "12x more qualified client inquiries",
      link: "/case-study-3"
    }
  ];

  return (
    <section id="case-studies-section" className="bg-white py-32">{/* White background */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-black mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>Adult Industry Case Studies</h2>
          <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Real results from real clients—showing exactly how we help adult brands grow, convert, and dominate their markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article 
              key={index}
              className="group border border-gray-800 rounded-lg overflow-hidden hover:border-[#00A5DF] transition-colors bg-black"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-[#00A5DF] mb-2 tracking-wide uppercase" style={{ fontSize: '12px' }}>
                  {study.industry}
                </p>
                <h3 className="text-white mb-4">{study.title}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-300 flex items-start gap-2" style={{ fontSize: '14px' }}>
                    <span className="text-[#00A5DF] mt-1">✓</span>
                    {study.result1}
                  </li>
                  <li className="text-gray-300 flex items-start gap-2" style={{ fontSize: '14px' }}>
                    <span className="text-[#00A5DF] mt-1">✓</span>
                    {study.result2}
                  </li>
                  <li className="text-gray-300 flex items-start gap-2" style={{ fontSize: '14px' }}>
                    <span className="text-[#00A5DF] mt-1">✓</span>
                    {study.result3}
                  </li>
                </ul>
                <Link 
                  to={study.link} 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00A5DF] text-white rounded-lg hover:bg-[#0094c9] transition-colors"
                >
                  Read Full Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}