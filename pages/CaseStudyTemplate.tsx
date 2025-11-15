import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyData {
  industry: string;
  title: string;
  subtitle: string;
  image: string;
  clientBackground: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

export function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Hero Section - Black Background */}
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
              }}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#00A5DF] bg-opacity-10 border border-[#00A5DF] rounded-full mb-4 md:mb-6">
                <span className="text-white" style={{ fontSize: '14px' }}>{data.industry}</span>
              </div>
              <h1 className="text-white mb-4 md:mb-6" style={{ fontSize: 'clamp(32px, 8vw, 64px)', lineHeight: '1.1' }}>
                {data.title}
              </h1>
              <p className="text-gray-300 mb-6 md:mb-8" style={{ fontSize: 'clamp(16px, 4vw, 20px)', lineHeight: '1.6' }}>
                {data.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Client Background - White Background */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-4xl">
              <h2 className="text-black mb-6" style={{ fontSize: '36px', lineHeight: '1.1' }}>
                Client Background
              </h2>
              <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                {data.clientBackground}
              </p>
            </div>
          </div>
        </section>

        {/* Challenge & Solution - Black Background */}
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-white mb-6" style={{ fontSize: '36px', lineHeight: '1.1' }}>
                  The Challenge
                </h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  {data.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-white mb-6" style={{ fontSize: '36px', lineHeight: '1.1' }}>
                  Our Solution
                </h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  {data.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results - White Background */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-black mb-12 text-center" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              The Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.results.map((result, index) => (
                <div key={index} className="text-center p-8 border border-gray-200 rounded-lg">
                  <div className="text-[#00A5DF] mb-2" style={{ fontSize: '48px', lineHeight: '1.1' }}>
                    {result.value}
                  </div>
                  <h3 className="text-black mb-3">{result.metric}</h3>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote - Black Background */}
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-white mb-8" style={{ fontSize: '28px', lineHeight: '1.5' }}>
                "{data.quote.text}"
              </blockquote>
              <div>
                <p className="text-white mb-1">{data.quote.author}</p>
                <p className="text-gray-400" style={{ fontSize: '14px' }}>{data.quote.role}</p>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default CaseStudyTemplate;
