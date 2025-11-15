import { CaseStudyTemplate } from './CaseStudyTemplate';
import { SEOHead } from '../components/SEOHead';
import { ArticleSchema, BreadcrumbSchema } from '../components/StructuredData';

export function CaseStudy1() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://teasymarketing.com' },
    { name: 'Case Studies', url: 'https://teasymarketing.com#case-studies' },
    { name: 'Adult Talent Agency Success Story', url: 'https://teasymarketing.com/case-study-onlyfans-agency' }
  ];

  const caseStudy1Image = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop';

  const data = {
    industry: "Adult Talent Agency",
    title: "From Startup to Industry Leader in 12 Months",
    subtitle: "How we helped a newly launched adult talent agency become highly ranked, attract hundreds of creator applicants, and build a stellar brand reputation.",
    image: caseStudy1Image,
    clientBackground: "A brand new adult talent management agency was launching in a saturated market. As a startup, they had no brand recognition, no online presence, and needed to quickly establish credibility to attract top-tier creator talent while competing against established agencies with years of reputation building.",
    challenge: "The agency was invisible in search results for key terms like 'adult talent management' and 'adult talent agency.' They had no social media following, no proof of success, and struggled to differentiate themselves from hundreds of competitors. Quality creators were skeptical of working with an unknown agency with no track record.",
    solution: "We launched an integrated SEO and social media marketing strategy focused on rapid brand building. We optimized their website for high-intent agency search terms, created thought leadership content showcasing their unique approach, built a strategic social media presence with founder-led content, and implemented a PR strategy to generate credibility signals and social proof across platforms.",
    results: [
      {
        metric: "Search Rankings",
        value: "Top 3",
        description: "For major adult talent agency keywords in target markets"
      },
      {
        metric: "Creator Applications",
        value: "500+",
        description: "Qualified creator applicants in 9 months"
      },
      {
        metric: "Brand Mentions",
        value: "285%",
        description: "Increase in positive brand mentions and social engagement"
      }
    ],
    quote: {
      text: "TEASY took us from complete unknown to one of the most recognized agencies in the space. We went from begging creators to join us to having a waitlist.",
      author: "Anonymous",
      role: "Founder, Adult Talent Agency"
    }
  };

  return (
    <>
      <SEOHead
        title="Adult Talent Agency Case Study - From Startup to Industry Leader | TEASY"
        description="Discover how TEASY helped a new adult talent agency achieve top 3 search rankings, attract 500+ creator applicants, and build a recognized brand in just 12 months through strategic SEO and marketing."
        canonical="https://teasymarketing.com/case-study-onlyfans-agency"
        ogType="article"
        keywords="adult talent agency, creator management case study, adult agency marketing, adult talent management SEO"
        ogImage={caseStudy1Image}
      />
      <ArticleSchema
        headline="From Startup to Industry Leader in 12 Months - Adult Talent Agency Success"
        description="How we helped a newly launched adult talent agency become highly ranked, attract hundreds of creator applicants, and build a stellar brand reputation."
        image={caseStudy1Image}
        datePublished="2025-11-14T00:00:00Z"
        dateModified="2025-11-14T00:00:00Z"
        author="TEASY Marketing"
        url="https://teasymarketing.com/case-study-onlyfans-agency"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <CaseStudyTemplate data={data} />
    </>
  );
}

export default CaseStudy1;