import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { CTABanner } from '../components/CTABanner';
import { SEOHead } from '../components/SEOHead';
import { ServiceSchema, BreadcrumbSchema } from '../components/StructuredData';

export function AdultPRPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Adult PR & Reputation Management', href: '/adult-pr' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Adult PR & Reputation Management - TEASY"
        description="Strategic adult PR, media relations, crisis management, and reputation monitoring for adult brands. Build credibility, secure media coverage, and protect your brand image in the adult industry."
        canonical="https://teasymarketing.com/adult-pr"
        keywords="adult PR, adult reputation management, adult media relations, adult crisis management, adult industry public relations"
      />
      <ServiceSchema
        name="Adult PR & Reputation Management"
        description="Strategic adult PR, media relations, crisis management, and reputation monitoring for adult brands. Build credibility, secure media coverage, and protect your brand image in the adult industry."
        url="https://teasymarketing.com/adult-pr"
      />
      <BreadcrumbSchema items={breadcrumbItems.map(item => ({ name: item.label, url: `https://teasymarketing.com${item.href}` }))} />
      <Navigation />
      <main>
        <ServicePageTemplate
          // Hero Section
          breadcrumbItems={breadcrumbItems}
          title="Adult PR & Reputation Management"
          subtitle="Adult Public Relations & Brand Strategy"
          heroDescription="Strengthen your brand’s credibility with strategic PR, media outreach, and reputation management built specifically for adult businesses navigating high-visibility challenges, competitive markets, and sensitive public perception."
          heroImage="/media/adult-pr.mp4"

          // Benefits Section
          benefitsTitle="Why Choose Our Adult PR Services"
          benefitsDescription="We specialize in building and protecting the reputation of adult brands through strategic PR and crisis management."
          benefits={[
            {
              title: "Media Relations & Coverage",
              description: "Secure coverage in industry publications, mainstream media (where appropriate), and influential podcasts to build brand awareness and credibility."
            },
            {
              title: "Reputation Management",
              description: "Proactive monitoring and management of your online reputation across review sites, social media, and search results to protect and enhance your brand image."
            },
            {
              title: "Crisis Communication",
              description: "Rapid response strategies and expert guidance to navigate sensitive situations, negative publicity, or PR crises with minimal damage to your brand."
            },
            {
              title: "Thought Leadership",
              description: "Position executives and founders as industry experts through speaking opportunities, contributed articles, and strategic media appearances."
            },
            {
              title: "Press Release Distribution",
              description: "Compelling press releases distributed through adult-friendly wire services and targeted media outlets to maximize reach and impact."
            },
            {
              title: "Stakeholder Communications",
              description: "Strategic messaging for investors, partners, and customers that builds trust and reinforces your brand positioning in the market."
            }
          ]}

          // Process Section
          processTitle="Our PR Process"
          processDescription="A comprehensive approach to building, managing, and protecting your brand reputation in the adult industry."
          processSteps={[
            {
              number: "01",
              title: "Brand Audit",
              description: "Comprehensive assessment of your current reputation, media presence, and stakeholder perceptions to identify opportunities."
            },
            {
              number: "02",
              title: "Strategy Development",
              description: "Create customized PR roadmap with key messages, target media, crisis protocols, and reputation management tactics."
            },
            {
              number: "03",
              title: "Media Outreach",
              description: "Execute strategic media pitches, press releases, and relationship building with journalists and industry influencers."
            },
            {
              number: "04",
              title: "Monitor & Respond",
              description: "Continuous reputation monitoring with proactive management of mentions, reviews, and opportunities for positive coverage."
            }
          ]}

          // Results Section
          resultsTitle="Proven PR Results"
          resultsDescription="Our strategic PR services deliver measurable improvements in brand visibility, reputation, and market positioning."
          stats={[
            { value: "285%", label: "Media Coverage Increase" },
            { value: "92%", label: "Positive Sentiment" },
            { value: "47", label: "Publications Secured" },
            { value: "4.8/5", label: "Brand Trust Score" }
          ]}
          caseStudyText="An adult wellness brand faced negative press and declining customer trust. We implemented a comprehensive PR strategy including proactive media outreach, crisis response, and thought leadership positioning. Within 6 months, we secured 32 positive media placements, improved their brand sentiment by 68%, and helped them become a trusted voice in the sexual wellness industry."

          // FAQ Section
          faqs={[
            {
              question: "Will mainstream media cover adult industry brands?",
              answer: "Yes, when positioned correctly. We've secured coverage in major publications by focusing on industry trends, business innovation, and cultural impact rather than explicit content. Sexual wellness and creator economy stories have broad media appeal."
            },
            {
              question: "How do you handle negative press or reviews?",
              answer: "We use a multi-pronged approach including direct response when appropriate, promoting positive content to push down negative results, and proactive reputation building to create a buffer against future criticism."
            },
            {
              question: "What if we experience a PR crisis?",
              answer: "We provide 24/7 crisis support with rapid response protocols, strategic messaging, stakeholder communication, and media management to minimize damage and protect your brand reputation."
            },
            {
              question: "Can you help with platform reputation (e.g., OnlyFans, Reddit)?",
              answer: "Absolutely. We monitor and manage your reputation across creator platforms, adult forums, review sites, and social media to ensure positive sentiment and address issues before they escalate."
            },
            {
              question: "How long does it take to improve brand reputation?",
              answer: "Reputation building is a long-term investment. You'll see initial improvements within 2-3 months, but establishing strong brand credibility and thought leadership typically takes 6-12 months of consistent effort."
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

export default AdultPRPage;