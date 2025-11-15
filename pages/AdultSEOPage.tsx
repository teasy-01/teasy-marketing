import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { CTABanner } from '../components/CTABanner';
import { TrustLogos } from '../components/TrustLogos';
import { SEOHead } from '../components/SEOHead';
import { ServiceSchema, BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function AdultSEOPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Adult SEO', href: '#adult-seo' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="The #1 Adult SEO Agency - TEASY"
        description="Premium adult SEO services to boost visibility, traffic, and revenue. Expert keyword research, technical optimization, and link building for adult brands, creators, and agencies."
        canonical="https://teasymarketing.com/adult-seo"
        keywords="adult SEO, adult industry SEO, OnlyFans SEO, adult website optimization, adult content SEO"
      />
      <ServiceSchema
        name="Adult SEO Services"
        description="Premium adult SEO services to boost visibility, traffic, and revenue. Expert keyword research, technical optimization, and link building for adult brands, creators, and agencies."
        url="https://teasymarketing.com/adult-seo"
      />
      <BreadcrumbSchema items={breadcrumbItems.map((item, index) => ({
        name: item.label,
        url: `https://teasymarketing.com${item.href}`
      }))} />
      <Navigation />
      <main>
        <ServicePageTemplate
          // Hero Section
          breadcrumbItems={breadcrumbItems}
          title="Adult SEO Services"
          subtitle="Adult Search Engine Optimization"
          heroDescription="A decade of proven adult-industry SEO expertise that boosts visibility, trust, and revenue—safely and sustainably."
          heroImage="https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mjk5Njk3N3ww&ixlib=rb-4.1.0&q=80&w=1080"

          // Benefits Section
          benefitsTitle="Why Choose Our Adult SEO Services"
          benefitsDescription="We deliver comprehensive SEO solutions tailored specifically for the adult industry, combining technical expertise with deep market knowledge."
          benefits={[
            {
              title: "Industry-Specific Keyword Research",
              description: "We identify high-intent adult keywords your competitors miss, ensuring your brand captures traffic that converts consistently."
            },
            {
              title: "Technical SEO Optimization",
              description: "We strengthen your site’s structure, speed, indexing, and security so search engines can fully trust and rank your content."
            },
            {
              title: "Content Strategy & Creation",
              description: "We craft strategic, SEO-focused content tailored to adult audiences, boosting relevance, engagement, and long-term organic visibility."
            },
            {
              title: "Adult Link Building & Authority",
              description: "We secure high-quality, niche-relevant backlinks that build trust, authority, and stronger rankings across competitive adult search terms."
            },
            {
              title: "Local SEO for Adult Businesses",
              description: "We optimize your local presence to ensure nearby customers easily find your adult store, service, or studio."
            },
            {
              title: "SEO for Adult Toy Stores, Escorts Etc.",
              description: "We create targeted SEO strategies built for regulated adult niches, improving visibility while navigating strict platform and search policies effectively."
            }
          ]}

          // Process Section
          processTitle="Our Adult SEO Process"
          processDescription="A systematic approach to improving your search visibility and driving sustainable organic growth."
          processSteps={[
            {
              number: "01",
              title: "Audit & Analysis",
              description: "Comprehensive site audit to identify opportunities and technical issues affecting your rankings."
            },
            {
              number: "02",
              title: "Strategy Development",
              description: "Custom SEO roadmap aligned with your business goals and industry best practices."
            },
            {
              number: "03",
              title: "Implementation",
              description: "Execute on-page, off-page, and technical optimizations to improve search performance."
            },
            {
              number: "04",
              title: "Monitor & Optimize",
              description: "Continuous tracking and refinement to maximize results and adapt to algorithm changes."
            }
          ]}

          // Results Section
          resultsTitle="Proven Results"
          resultsDescription="Our adult SEO strategies deliver measurable improvements in visibility, traffic, and revenue."
          stats={[
            { value: "220%", label: "Avg. 6 Months Traffic Increase" },
            { value: "25,000+", label: "Keyword Rankings" },
            { value: "20%", label: "Domain Authority Increase" },
            { value: "1,000+", label: "Top 10 Rankings" }
          ]}
          caseStudyText="One of our adult entertainment clients saw a 312% increase in organic traffic within 6 months, resulting in a 4.5x return on investment. By implementing our comprehensive SEO strategy, they secured first-page rankings for over 120 high-value keywords."

          // FAQ Section
          faqs={[
            {
              question: "Is SEO safe for adult websites?",
              answer: "Yes, when done correctly with compliant strategies. We focus on proven SEO techniques that work within search engine guidelines for adult content."
            },
            {
              question: "How long does it take to see SEO results?",
              answer: "Most clients begin seeing improvements within 3-4 months, with significant results typically appearing after 6-12 months. SEO is a long-term investment that delivers compound returns."
            },
            {
              question: "Can you guarantee first-page rankings?",
              answer: "No ethical SEO agency can guarantee specific rankings due to constantly changing algorithms. However, we do guarantee proven work shown with transparent reporting and continuous optimization to maximize your visibility."
            },
            {
              question: "What makes adult SEO different from regular SEO?",
              answer: "Adult SEO requires navigating stricter content policies, working with adult-friendly platforms, and understanding unique audience behaviors. Our specialized experience ensures compliant, effective strategies."
            },
            {
              question: "Do you work with all types of adult businesses?",
              answer: "We work with a wide range of adult industry clients including content creators, e-commerce sites, subscription platforms, and adult entertainment services."
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

export default AdultSEOPage;