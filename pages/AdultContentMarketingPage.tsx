import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { CTABanner } from '../components/CTABanner';
import { TrustLogos } from '../components/TrustLogos';
import { SEOHead } from '../components/SEOHead';
import { ServiceSchema, BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function AdultContentMarketingPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Adult Content Marketing', href: '#adult-content-marketing' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Adult Content Marketing Services - TEASY"
        description="Expert adult content marketing with strategic planning, content creation, and multi-platform distribution. Drive engagement, visibility, and conversions with compelling content for your adult brand."
        canonical="https://teasymarketing.com/adult-content-marketing"
        keywords="adult content marketing, adult content creation, NSFW content strategy, adult brand content, adult industry copywriting"
      />
      <ServiceSchema
        name="Adult Content Marketing"
        description="Expert adult content marketing with strategic planning, content creation, and multi-platform distribution. Drive engagement, visibility, and conversions with compelling content for your adult brand."
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation />
      <main>
        <ServicePageTemplate
          // Hero Section
          breadcrumbItems={breadcrumbItems}
          title="Adult Content Marketing"
          subtitle="Adult Content Creation and Marketing"
          heroDescription="We craft performance-driven adult content and marketing strategies that elevate your brand’s voice, boost visibility, and convert viewers into loyal customers."
          heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nfGVufDF8fHx8MTc2Mjk5Njk3N3ww&ixlib=rb-4.1.0&q=80&w=1080"

          // Benefits Section
          benefitsTitle="Why Choose Our Adult Content Marketing Services"
          benefitsDescription="Our team brings unmatched adult-industry experience, producing content built to engage audiences, strengthen your brand, and drive measurable results."
          benefits={[
            {
              title: "Industry-Experienced Creative Team",
              description: "Content crafted by experts who understand adult audiences and what drives real engagement."
            },
            {
              title: "Full Content Production Support",
              description: "From concepts to execution, we handle every stage of your content pipeline."
            },
            {
              title: "Platform-Safe Creative Direction",
              description: "We create content that performs while staying compliant with strict platform guidelines."
            },
            {
              title: "Tailored to Your Brand Voice",
              description: "Content built to match your unique style, audience, and long-term positioning."
            },
            {
              title: "Built for Multi-Platform Reach",
              description: "Creative designed to perform across social, search, ads, and your owned channels."
            },
            {
              title: "Consistent, High-Quality Output",
              description: "Reliable, professional content production that keeps your brand active and competitive."
            }
          ]}

          // Process Section
          processTitle="Our Content Marketing Process"
          processDescription="Our content process blends creative direction, strategy, and optimization to ensure everything we produce moves your brand forward."
          processSteps={[
            {
              number: "01",
              title: "Discovery & Brand Positioning",
              description: "We analyze your brand, audience, and goals to define the voice, angles, and content style that will resonate and perform."
            },
            {
              number: "02",
              title: "Strategic Content Planning",
              description: "We build a tailored content roadmap outlining themes, formats, and distribution strategies designed to maximize engagement and visibility."
            },
            {
              number: "03",
              title: "Content Creation & Execution",
              description: "Our team produces high-quality, platform-ready content—from scripts to visuals—optimized for performance across adult-friendly channels."
            },
            {
              number: "04",
              title: "Performance Review & Optimization",
              description: "We track results, refine creative, and evolve the strategy to keep your content competitive, impactful, and aligned with audience behavior."
            }
          ]}

          // Results Section
          resultsTitle="Proven Content Marketing Results"
          resultsDescription="Our integrated paid and content strategies deliver measurable traffic growth and revenue increases."
          stats={[
            { value: "45%", label: "Increased Content Engagement" },
            { value: "28%", label: "Higher Conversion Rates" },
            { value: "60%", label: "Significant Traffic Growth" },
            { value: "$25%", label: "Improved Audience Retention" }
          ]}
          caseStudyText="A leading adult studio partnered with Teasy to overhaul their content strategy, improve consistency, and boost organic reach. Within 90 days, engagement jumped 52% and organic traffic surged from long-tail content themes we developed. The studio now maintains a steady content pipeline that continues to drive conversions, audience growth, and long-term brand authority."

          // FAQ Section
          faqs={[
            {
              question: "What makes adult content marketing different from traditional content marketing?",
              answer: "Adult content is subject to stricter guidelines, platform restrictions, and audience behavior patterns. Our strategies are built to navigate these limitations while still driving strong performance."
            },
            {
              question: "Do you create the content or just provide strategy?",
              answer: "We offer both. Our team can handle full production—scripts, creative direction, visuals, and optimization—or support your existing team with a strategic roadmap."
            },
            {
              question: "Which types of adult brands benefit from content marketing?",
              answer: "Studios, platforms, creators, adult stores, cam sites, and niche brands all see strong results from a consistent, strategic content approach."
            },
            {
              question: "How long does it take to see results from content marketing?",
              answer: "Most brands see early traction within 30–60 days, with larger, sustainable growth building as content volume and consistency increase."
            },
            {
              question: "Can you ensure content stays compliant with platform rules?",
              answer: "Yes. We stay up-to-date with adult-friendly policies and create content that performs while remaining within the boundaries of each platform’s guidelines."
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

export default AdultContentMarketingPage;