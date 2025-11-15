import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrustLogos } from './TrustLogos';
import { Breadcrumbs } from './Breadcrumbs';

interface Benefit {
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ServicePageProps {
  // Hero Section
  title: string;
  subtitle: string;
  heroDescription: string;
  heroImage?: string;
  breadcrumbItems?: BreadcrumbItem[];

  // Benefits Section
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: Benefit[];

  // Process Section
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStep[];

  // Results Section
  resultsTitle: string;
  resultsDescription: string;
  stats: Stat[];
  caseStudyText?: string;

  // FAQ Section
  faqs: FAQ[];

  // CTA Section (for hero button only)
  ctaButtonText: string;
  
  // Optional TrustLogos after hero
  showTrustLogos?: boolean;
}

export function ServicePageTemplate({
  title,
  subtitle,
  heroDescription,
  heroImage,
  breadcrumbItems,
  benefitsTitle,
  benefitsDescription,
  benefits,
  processTitle,
  processDescription,
  processSteps,
  resultsTitle,
  resultsDescription,
  stats,
  caseStudyText,
  faqs,
  ctaButtonText,
  showTrustLogos,
}: ServicePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full-width with background image */}
      <section className="bg-white relative">
        {heroImage && (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </>
        )}
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          {breadcrumbItems && <Breadcrumbs items={breadcrumbItems} />}
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-[#00A5DF] text-white rounded-full mb-6">
              {subtitle}
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: '64px', lineHeight: '1.1' }}>
              {title}
            </h1>
            <p className="text-gray-100 mb-10 max-w-2xl" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              {heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-[#00A5DF] text-white px-8 py-4 rounded-md hover:bg-[#0094c9] transition-colors inline-block"
              >
                {ctaButtonText}
              </a>
              <a 
                href="#about" 
                className="bg-white text-black border-2 border-white px-8 py-4 rounded-md hover:bg-gray-100 transition-colors inline-block"
              >
                About Teasy
              </a>
            </div>
          </div>
        </div>
      </section>

      {showTrustLogos && <TrustLogos />}

      {/* Benefits Section - White Background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <h2 className="text-black mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              {benefitsTitle}
            </h2>
            <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              {benefitsDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#00A5DF]" />
                </div>
                <div>
                  <h3 className="text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Black Background */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <h2 className="text-white mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              {processTitle}
            </h2>
            <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              {processDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-[#00A5DF] mb-4" style={{ fontSize: '48px', lineHeight: '1' }}>
                  {step.number}
                </div>
                <h3 className="text-white mb-3">{step.title}</h3>
                <p className="text-gray-300" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-200 -translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - White Background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <h2 className="text-black mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              {resultsTitle}
            </h2>
            <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              {resultsDescription}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[#00A5DF] mb-2" style={{ fontSize: '48px', lineHeight: '1' }}>
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {caseStudyText && (
            <div className="max-w-3xl mx-auto p-8 border border-gray-200 rounded-lg">
              <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                {caseStudyText}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <h2 className="text-black mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h3 className="text-black mb-3">{faq.question}</h3>
                <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}