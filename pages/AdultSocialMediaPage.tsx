import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { CTABanner } from '../components/CTABanner';
import { TrustLogos } from '../components/TrustLogos';
import { SEOHead } from '../components/SEOHead';
import { ServiceSchema, BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function AdultSocialMediaPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Adult Social Media', href: '#adult-social-media' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Adult Social Media Marketing Agency - TEASY"
        description="Expert adult social media marketing for Instagram, Tiktok, Twitter/X, Reddit, and more. Platform-compliant strategies, community building, and engagement to grow your adult brand presence."
        canonical="https://teasymarketing.com/adult-social-media"
        keywords="adult social media marketing, OnlyFans marketing, Twitter adult content, Reddit NSFW marketing, adult influencer marketing"
      />
      <ServiceSchema
        name="Adult Social Media Marketing"
        description="Expert adult social media marketing for Instagram, Tiktok, Twitter/X, Reddit, and more. Platform-compliant strategies, community building, and engagement to grow your adult brand presence."
        provider="TEASY Marketing"
        areaServed="Worldwide"
        serviceType="Social Media Marketing"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation />
      <main>
        <ServicePageTemplate
          // Hero Section
          breadcrumbItems={breadcrumbItems}
          title="Adult Social Media Marketing"
          subtitle="Adult Social Media Strategy & Management"
          heroDescription="Grow your audience, increase engagement, and strengthen your brand’s presence with social strategies built specifically for the adult industry."
          heroImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjI5OTY5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"

          // Benefits Section
          benefitsTitle="Why Choose Our Adult Social Media Services"
          benefitsDescription="We navigate the complex landscape of adult content on social platforms, delivering growth while ensuring compliance and brand safety."
          benefits={[
            {
              title: "Platform-Compliant Strategies",
              description: "Expert navigation of content policies across Twitter/X, Reddit, OnlyFans, and other adult-friendly platforms to maximize reach without risking account suspension."
            },
            {
              title: "Community Building & Engagement",
              description: "Foster loyal communities through authentic engagement, strategic content scheduling, and audience interaction that drives long-term growth."
            },
            {
              title: "Content Creation & Curation",
              description: "Professional content planning and creation that resonates with your target audience while adhering to platform-specific guidelines."
            },
            {
              title: "Influencer & Clipping Partnerships",
              description: "Connect with relevant influencers and creators to expand your reach and build credibility within the adult industry."
            },
            {
              title: "Crisis Management & Reputation",
              description: "Proactive monitoring and rapid response to protect your brand reputation across all social channels."
            },
            {
              title: "Analytics & Optimization",
              description: "Data-driven insights to continuously improve performance, engagement rates, and follower growth across platforms."
            }
          ]}

          // Process Section
          processTitle="Our Adult Social Media Process"
          processDescription="A strategic approach to building your social media presence and engaging your audience effectively."
          processSteps={[
            {
              number: "01",
              title: "Platform Audit",
              description: "Comprehensive analysis of your current social presence and competitor landscape to identify opportunities."
            },
            {
              number: "02",
              title: "Strategy Development",
              description: "Custom social media roadmap aligned with your brand voice, audience, and business objectives."
            },
            {
              number: "03",
              title: "Content & Execution",
              description: "Create and publish engaging content with consistent scheduling and community management."
            },
            {
              number: "04",
              title: "Grow & Engage",
              description: "Continuous optimization, audience interaction, and growth strategies to maximize your social ROI."
            }
          ]}

          // Results Section
          resultsTitle="Proven Adult Social Media Marketing Results"
          resultsDescription="Our adult social media strategies deliver measurable growth in followers, engagement, and conversions."
          stats={[
            { value: "380%", label: "Avg. Follower Growth" },
            { value: "5.8x", label: "Engagement Increase" },
            { value: "92%", label: "Community Retention" },
            { value: "1m+", label: "New Followers Generated" }
          ]}
          caseStudyText="An adult content creator partnered with us to grow their Instagram and TikTok presence. Within 8 months, they gained over 200K new followers, achieved a 450% increase in engagement rate, and saw a 6x increase in subscription conversions from social traffic."

          // FAQ Section
          faqs={[
            {
              question: "Which social platforms allow adult content?",
              answer: "Twitter/X, Reddit and specialized platforms like OnlyFans allow adult content with proper labeling. We help you navigate each platform's specific guidelines and maximize your presence where permitted."
            },
            {
              question: "How do you handle content moderation and compliance?",
              answer: "We have extensive experience with platform-specific policies and ensure all content is properly labeled, age-gated, and compliant. Our team stays updated on policy changes to protect your accounts."
            },
            {
              question: "Can you help grow my OnlyFans/Fansly audience?",
              answer: "Yes, we specialize in driving traffic and subscribers to creator platforms through strategic social media marketing, cross-platform promotion, and audience engagement tactics."
            },
            {
              question: "What about mainstream platforms like Instagram and TikTok?",
              answer: "We can help create compliant, SFW content strategies for mainstream platforms where appropriate, focusing on brand building and driving traffic to your adult-friendly channels."
            },
            {
              question: "How quickly can I expect to see follower growth?",
              answer: "Most clients see initial growth within the first 60 days, with significant momentum building over 3-6 months as we optimize strategies and build community engagement."
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

export default AdultSocialMediaPage;