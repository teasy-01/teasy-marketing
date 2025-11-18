import { CaseStudyTemplate } from './CaseStudyTemplate';
import { SEOHead } from '../components/SEOHead';
import { ArticleSchema, BreadcrumbSchema } from '../components/StructuredData';

export function CaseStudy2() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://teasymarketing.com' },
    { name: 'Case Studies', url: 'https://teasymarketing.com#case-studies' },
    { name: 'Online Creator Revenue Growth Story', url: 'https://teasymarketing.com/case-study-creator-growth' }
  ];

  const caseStudy2Image = '/media/online-creator.jpg';

  const data = {
    industry: "Online Creator",
    title: "From Hidden to Thriving: Tripling Revenue in 8 Months",
    subtitle: "How we helped a talented creator overcome marketing challenges to grow her social media, drive traffic, and skyrocket subscription sales.",
    image: caseStudy2Image,
    clientBackground: "A talented creator had amazing content but struggled to attract subscribers to her platform. She lacked marketing knowledge, had minimal social media presence, and didn't know how to convert followers into paying subscribers. Despite creating quality content daily, her income remained stagnant.",
    challenge: "The creator had no cohesive marketing strategy, inconsistent social media posting, and no understanding of how to drive traffic from free platforms to her paid subscription service. Her social media accounts had low engagement, and she wasn't leveraging trending topics or viral content strategies. She was essentially invisible in a crowded market.",
    solution: "TEASY implemented a comprehensive creator marketing strategy including a content calendar with viral-optimized posts, cross-platform social media management, strategic engagement tactics to build authentic connections, funnel optimization to convert free followers to paid subscribers, and analytics-driven adjustments to maximize ROI on every post.",
    results: [
      {
        metric: "Social Media Growth",
        value: "425%",
        description: "Increase in total followers across all platforms"
      },
      {
        metric: "Traffic to Platform",
        value: "680%",
        description: "Increase in monthly clicks to subscription page"
      },
      {
        metric: "Subscription Revenue",
        value: "3.2x",
        description: "Revenue growth in 8 months"
      }
    ],
    quote: {
      text: "Before TEASY, I felt lost trying to market myself. Now I have a clear strategy, my audience is growing daily, and my income has completely changed my life. They truly understand creator marketing.",
      author: "Anonymous",
      role: "Online Creator"
    }
  };

  return (
    <>
      <SEOHead
        title="Online Creator Case Study - Tripling Revenue in 8 Months | TEASY"
        description="See how TEASY helped an online creator achieve 425% social media growth, 680% traffic increase, and 3.2x revenue growth through strategic content marketing and funnel optimization."
        canonical="https://teasymarketing.com/case-study-creator-growth"
        ogType="article"
        keywords="creator marketing case study, OnlyFans growth, subscription revenue growth, social media marketing creator"
        ogImage={caseStudy2Image}
      />
      <ArticleSchema
        headline="From Hidden to Thriving: Tripling Revenue in 8 Months - Online Creator Success"
        description="How we helped a talented creator overcome marketing challenges to grow her social media, drive traffic, and skyrocket subscription sales."
        image={caseStudy2Image}
        datePublished="2025-11-14T00:00:00Z"
        dateModified="2025-11-14T00:00:00Z"
        author="TEASY Marketing"
        url="https://teasymarketing.com/case-study-creator-growth"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <CaseStudyTemplate data={data} />
    </>
  );
}

export default CaseStudy2;