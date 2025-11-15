import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { CTABanner } from '../components/CTABanner';
import { TrustLogos } from '../components/TrustLogos';
import { SEOHead } from '../components/SEOHead';
import { ServiceSchema, BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function AdultWebsiteDesignPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Adult Website Design', href: '#adult-website-design' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Adult Website Design & Development Agency - TEASY"
        description="Custom adult website design with high-converting layouts, secure payment integration, mobile-first development, and membership features. Built for adult brands that want results."
        canonical="https://teasymarketing.com/adult-website-design"
        keywords="adult website design, adult web development, OnlyFans clone, adult membership sites, adult payment integration"
      />
      <ServiceSchema
        name="Adult Website Design & Development"
        description="Custom adult website design with high-converting layouts, secure payment integration, mobile-first development, and membership features. Built for adult brands that want results."
        provider="TEASY Marketing"
        areaServed="Worldwide"
        serviceType="Web Design & Development"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation />
      <main>
        <ServicePageTemplate
          // Hero Section
          breadcrumbItems={breadcrumbItems}
          title="Adult Website Design & Development"
          subtitle="Custom Adult Web Design & Development"
          heroDescription="High-converting, mobile-responsive websites built specifically for adult brands. From subscription platforms to e-commerce stores, we create seamless user experiences with secure payment integration and compliance built-in."
          heroImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyOTk2OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080"

          // Benefits Section
          benefitsTitle="Why Choose Our Adult Web Design Services"
          benefitsDescription="We specialize in creating custom websites that convert visitors into paying customers while ensuring compliance and security."
          benefits={[
            {
              title: "High-Converting Design",
              description: "Strategically designed layouts that guide users to conversion, optimized for subscriptions, memberships, and e-commerce transactions."
            },
            {
              title: "Mobile-First Development",
              description: "Responsive designs that deliver flawless experiences across all devices, with over 70% of adult traffic coming from mobile."
            },
            {
              title: "Secure Payment Integration",
              description: "Integration with adult-friendly payment processors including CCBill, Epoch, SegPay, and cryptocurrency options for maximum flexibility."
            },
            {
              title: "Age Verification Systems",
              description: "Compliant age verification and geo-blocking solutions to meet legal requirements and protect your business."
            },
            {
              title: "Fast Loading Speeds",
              description: "Optimized performance with CDN integration, image optimization, and clean code for superior Core Web Vitals scores."
            },
            {
              title: "Membership & Subscription Features",
              description: "Custom user dashboards, content libraries, automated billing, and member management systems built to scale."
            }
          ]}

          // Process Section
          processTitle="Our Web Design Process"
          processDescription="From concept to launch, we deliver custom websites that drive results and exceed expectations."
          processSteps={[
            {
              number: "01",
              title: "Discovery & Planning",
              description: "Deep dive into your business goals, target audience, and technical requirements to create a comprehensive project roadmap."
            },
            {
              number: "02",
              title: "Design & Prototyping",
              description: "Custom design mockups and interactive prototypes that bring your vision to life before development begins."
            },
            {
              number: "03",
              title: "Development & Testing",
              description: "Expert coding with rigorous testing across devices, browsers, and payment systems to ensure flawless functionality."
            },
            {
              number: "04",
              title: "Launch & Optimize",
              description: "Smooth deployment with ongoing support, monitoring, and optimization to maximize performance and conversions."
            }
          ]}

          // Results Section
          resultsTitle="Proven Design Results"
          resultsDescription="Our custom websites deliver exceptional user experiences and measurable business growth."
          stats={[
            { value: "180%", label: "Avg. Conversion Increase" },
            { value: "4.2x", label: "Revenue Growth" },
            { value: "65%", label: "Lower Bounce Rate" },
            { value: "98%", label: "Client Satisfaction" }
          ]}
          caseStudyText="An adult subscription platform came to us with a new project launch. After our complete design with optimized UX, mobile-first approach, and streamlined checkout, their conversion rate executed to $1M in annual revenue."

          // FAQ Section
          faqs={[
            {
              question: "What platforms do you build on?",
              answer: "We build custom solutions using modern frameworks (React, Next.js) and can also work with WordPress, custom PHP, or platform-specific solutions depending on your needs and existing infrastructure."
            },
            {
              question: "Do you handle adult-friendly hosting?",
              answer: "Yes, we can recommend and set up hosting with adult-friendly providers that offer excellent uptime, security, and don't discriminate against adult content."
            },
            {
              question: "Can you integrate my existing payment processor?",
              answer: "Absolutely. We have experience integrating all major adult-friendly payment processors including CCBill, Epoch, SegPay, Verotel, and cryptocurrency payment gateways."
            },
            {
              question: "How long does a custom website take to build?",
              answer: "Timeline depends on complexity, but most projects range from 4-8 weeks for a complete custom website with payment integration and member features."
            },
            {
              question: "Do you provide ongoing maintenance and support?",
              answer: "Yes, we offer comprehensive maintenance packages including security updates, content updates, technical support, and performance optimization to keep your site running smoothly."
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

export default AdultWebsiteDesignPage;