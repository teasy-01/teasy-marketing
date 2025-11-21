import React from 'react';
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
  
  // Optional content to insert between Results and FAQ sections
  contentBetweenResultsAndFAQ?: React.ReactNode;
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
  contentBetweenResultsAndFAQ,
}: ServicePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full-width with background image or video */}
      <section className="bg-white relative min-h-[650px] sm:min-h-[600px] md:min-h-0">
        {heroImage && (
          <>
            {heroImage.endsWith('.mp4') ? (
              <div className="absolute inset-0 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={heroImage.replace('.mp4', '-poster.jpg')}
                  className="absolute inset-0 w-full h-full object-cover"
                  onLoadedData={(e) => {
                    // Start playing only after data is loaded
                    (e.target as HTMLVideoElement).play().catch(() => {
                      // Ignore autoplay errors
                    });
                  }}
                >
                  <source src={heroImage} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            ) : (
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            )}
          </>
        )}
        
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
          {breadcrumbItems && <Breadcrumbs items={breadcrumbItems} />}
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#00A5DF] text-white rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
              {subtitle}
            </div>
            <h1 className="text-white mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight">
              {title}
            </h1>
            <p className="text-gray-100 mb-6 sm:mb-8 md:mb-10 max-w-2xl text-base sm:text-lg leading-relaxed">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a 
                href="/contact" 
                className="bg-[#00A5DF] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-[#0094c9] transition-colors inline-block text-center text-sm sm:text-base font-medium"
              >
                {ctaButtonText}
              </a>
              <a 
                href="/about" 
                className="bg-white text-black border-2 border-white px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-gray-100 transition-colors inline-block text-center text-sm sm:text-base font-medium"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-black mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {benefitsTitle}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {benefitsDescription}
            </p>
          </div>

          <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1" aria-hidden="true">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A5DF]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-black mb-2 sm:mb-3 text-base sm:text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section - Black Background */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-white mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {processTitle}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {processDescription}
            </p>
          </div>

          <ol className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" aria-label="Process steps">
            {processSteps.map((step, index) => (
              <li key={index} className="relative">
                <div className="text-[#00A5DF] mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none" aria-hidden="true">
                  {step.number}
                </div>
                <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 sm:top-8 left-full w-full h-px bg-gray-200 -translate-x-4" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Results Section - White Background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-black mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {resultsTitle}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {resultsDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[#00A5DF] mb-1 sm:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>

          {caseStudyText && (
            <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {caseStudyText}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Optional content between Results and FAQ */}
      {contentBetweenResultsAndFAQ}

      {/* FAQ Section - White Background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-black mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 sm:pb-8 last:border-b-0">
                <h3 className="text-black mb-2 sm:mb-3 text-base sm:text-lg font-semibold">{faq.question}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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