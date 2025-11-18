import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { CTABanner } from '../components/CTABanner';
import { TrustLogos } from '../components/TrustLogos';
import { SEOHead } from '../components/SEOHead';
import { ServiceSchema, BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function AdultEmailMarketingPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Adult Email Marketing', href: '/adult-email-marketing' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Adult Email Marketing Services - TEASY"
        description="Compliant adult email marketing with automation, segmentation, and deliverability optimization. Turn your email list into your most profitable channel with expert strategy and execution."
        canonical="https://teasymarketing.com/adult-email-marketing"
        keywords="adult email marketing, OnlyFans email campaigns, adult newsletter, adult email automation, adult ESP"
      />
      <ServiceSchema
        name="Adult Email Marketing"
        description="Compliant adult email marketing with automation, segmentation, and deliverability optimization. Turn your email list into your most profitable channel with expert strategy and execution."
        provider="TEASY Marketing"
        areaServed="Worldwide"
        serviceType="Email Marketing"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation />
      <main>
        <ServicePageTemplate
          // Hero Section
          breadcrumbItems={breadcrumbItems}
          title="Adult Email Marketing"
          subtitle="Adult Email Campaigns & Automation"
          heroDescription="Compliant adult email campaigns and automation that nurture subscribers, increase retention, and maximize lifetime customer value. Turn your email list into your most profitable marketing channel."
          heroImage="/media/adult-email-marketing.mp4"

          // Benefits Section
          benefitsTitle="Why Choose Our Adult Email Marketing Services"
          benefitsDescription="We create sophisticated email strategies that drive revenue while maintaining compliance with adult content regulations."
          benefits={[
            {
              title: "Adult-Friendly ESP Management",
              description: "Expert setup and management with email service providers that welcome adult content, ensuring reliable delivery and avoiding sudden account shutdowns."
            },
            {
              title: "Segmentation & Personalization",
              description: "Advanced audience segmentation and personalized messaging based on user behavior, preferences, and engagement levels to maximize relevance."
            },
            {
              title: "Automated Workflows",
              description: "Strategic automation sequences including welcome series, re-engagement campaigns, abandoned cart recovery, and subscription renewal reminders."
            },
            {
              title: "Conversion-Optimized Campaigns",
              description: "Compelling email copy and design that drives clicks, conversions, and revenue while maintaining brand consistency."
            },
            {
              title: "Deliverability Optimization",
              description: "Technical setup including DKIM, SPF, DMARC authentication, list hygiene, and reputation management to ensure inbox placement."
            },
            {
              title: "Performance Analytics",
              description: "Comprehensive tracking and reporting on open rates, click rates, conversions, and revenue attribution to continuously improve results."
            }
          ]}

          // Process Section
          processTitle="Our Adult Email Marketing Process"
          processDescription="A data-driven approach to building and nurturing your email list for maximum customer lifetime value."
          processSteps={[
            {
              number: "01",
              title: "Audit & Strategy",
              description: "Analyze your current email performance and subscriber data to create a customized growth and engagement strategy."
            },
            {
              number: "02",
              title: "Setup & Integration",
              description: "Configure adult-friendly ESP, design templates, set up automation workflows, and integrate with your website and payment systems."
            },
            {
              number: "03",
              title: "Campaign Execution",
              description: "Launch targeted campaigns with compelling content, strategic timing, and ongoing A/B testing for optimization."
            },
            {
              number: "04",
              title: "Optimize & Scale",
              description: "Continuous refinement based on performance data, subscriber feedback, and industry best practices to maximize ROI."
            }
          ]}

          // Results Section
          resultsTitle="Proven Email Marketing Results"
          resultsDescription="Our email strategies deliver exceptional engagement, retention, and revenue growth for adult businesses."
          stats={[
            { value: "42%", label: "Avg. Open Rate" },
            { value: "8.5x", label: "ROI Improvement" },
            { value: "35%", label: "Retention Increase" },
            { value: "$89", label: "Revenue Per Subscriber" }
          ]}
          caseStudyText="An adult subscription service had an email list of 45,000 subscribers but minimal engagement. We rebuilt their entire email strategy with segmentation, automation, and compelling content. Within 6 months, they saw a 380% increase in email revenue, 52% open rates, and subscriber lifetime value increased by 215%."

          // FAQ Section
          faqs={[
            {
              question: "Which email platforms allow adult content?",
              answer: "Several ESPs welcome adult content including AWeber, GetResponse, and specialized adult-friendly providers. We help you choose the right platform and ensure compliant setup to avoid account issues."
            },
            {
              question: "How do you ensure email deliverability?",
              answer: "We implement technical authentication (SPF, DKIM, DMARC), maintain list hygiene, use engagement-based sending, and follow best practices to maximize inbox placement rates."
            },
            {
              question: "Can you help grow my email list?",
              answer: "Yes, we create strategic lead magnets, optimize signup forms, implement exit-intent popups, and develop multi-channel list building campaigns to grow your subscriber base with quality leads."
            },
            {
              question: "What about compliance with email regulations?",
              answer: "We ensure full compliance with CAN-SPAM, GDPR, and other email regulations including proper consent, clear unsubscribe options, and accurate sender information on all campaigns."
            },
            {
              question: "How often should we email our subscribers?",
              answer: "It depends on your audience and content type. We use data-driven testing to find the optimal frequency that maximizes engagement and revenue without causing subscriber fatigue or high unsubscribe rates."
            }
          ]}

          // CTA Button Text (for hero section)
          ctaButtonText="Work With Us"
          
          // Show TrustLogos after hero
          showTrustLogos={true}
        />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default AdultEmailMarketingPage;