import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { Calendar, Clock, Share2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ArticleSchema, BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';

export function BlogPostTeasyAgency() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'How Teasy Agency Became a Leader', href: '/blog-post-teasy-agency' }
  ];

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="How Teasy Agency Became a Leader—And Why We Launched Teasy Marketing - TEASY Blog"
        description="Teasy started with a simple idea: empower creators with real support, real strategy, and real results. What began as a hands-on talent management team quickly grew into one of the most recognized names in the creator industry."
        canonical="https://teasymarketing.com/blog-post-teasy-agency"
        ogType="article"
        publishedTime="2025-12-17T00:00:00Z"
        modifiedTime="2025-12-17T00:00:00Z"
        author="TEASY Team"
        keywords="teasy marketing, teasy agency, adult marketing agency, creator marketing"
        ogImage="https://teasymarketing.com/media/teasy-introduction.jpg"
      />
      <ArticleSchema
        headline="How Teasy Agency Became a Leader—And Why We Launched Teasy Marketing"
        description="Teasy started with a simple idea: empower creators with real support, real strategy, and real results. What began as a hands-on talent management team quickly grew into one of the most recognized names in the creator industry."
        image="https://teasymarketing.com/media/teasy-introduction.jpg"
        datePublished="2025-12-17T00:00:00Z"
        dateModified="2025-12-17T00:00:00Z"
        author="TEASY Team"
        url="https://teasymarketing.com/blog-post-teasy-agency"
      />
      <BreadcrumbSchema items={breadcrumbItems.map((item) => ({
        name: item.label,
        url: `https://teasymarketing.com${item.href}`
      }))} />
      <Navigation />
      <main>
        {/* Back to Blog Link */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </section>

        {/* Article Header - White Background */}
        <article className="bg-white">
          <header className="max-w-4xl mx-auto px-6 py-16">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#00A5DF]/10 text-[#00A5DF] rounded-full" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Introduction
              </span>
            </div>

            {/* Title */}
            <h1 className="text-black mb-6" style={{ fontSize: '56px', lineHeight: '1.1' }}>
              How Teasy Agency Became a Leader—And Why We Launched Teasy Marketing
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-gray-500 mb-8" style={{ fontSize: '14px' }}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{currentDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
              <button className="flex items-center gap-2 hover:text-[#00A5DF] transition-colors ml-auto">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src="/media/teasy-introduction.jpg"
                alt="How Teasy Agency Became a Leader—And Why We Launched Teasy Marketing"
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto px-6 pb-24">
            {/* Introduction */}
            <div className="mb-16">
              <p className="text-gray-600 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Teasy started with a simple idea: empower creators with real support, real strategy, and real results. What began as a hands-on talent management team quickly grew into one of the most recognized names in the creator industry—known for innovation, community building, and a level of professionalism that set a new standard.
              </p>
              <p className="text-gray-600 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Over the years, our work with hundreds of creators uncovered a clear truth: marketing is the biggest gap holding creators and brands back from scaling. The adult industry has unique challenges—platform restrictions, ad limitations, rapid trends—and almost no agencies capable of navigating them the right way. Teasy stepped in to fill that void.
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-black mb-6" style={{ fontSize: '36px', lineHeight: '1.2', fontWeight: 'bold' }}>
                A Natural Evolution: Introducing Teasy Marketing
              </h2>
              
              <p className="text-gray-600 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                After years of building successful creator brands, running high-performance social strategies, and developing our own internal marketing systems, expanding into a dedicated marketing division was the next logical step.
              </p>

              <p className="text-gray-600 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Teasy Marketing was created to give both creators and companies access to the same systems that elevated Teasy Agency into a top talent powerhouse. Now, clients can leverage our specialized marketing expertise—without needing full talent representation.
              </p>

              <p className="text-gray-600 mb-8" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Teasy Marketing focuses on:
              </p>

              <ul className="list-none space-y-4 mb-12">
                <li className="flex items-start gap-3">
                  <span className="text-[#00A5DF] mt-2">•</span>
                  <span className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>Full-scale social media strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00A5DF] mt-2">•</span>
                  <span className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>Adult-friendly SEO and content marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00A5DF] mt-2">•</span>
                  <span className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>Influencer and creator collaboration campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00A5DF] mt-2">•</span>
                  <span className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>PR support and reputation management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00A5DF] mt-2">•</span>
                  <span className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>Branding, positioning, and growth planning</span>
                </li>
              </ul>

              <p className="text-gray-600 mb-12" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Our goal is the same as always: deliver results, not fluff.
              </p>

              <h2 className="text-black mb-6" style={{ fontSize: '36px', lineHeight: '1.2', fontWeight: 'bold' }}>
                Built by Experts Who Understand the Industry
              </h2>

              <p className="text-gray-600 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Teasy Marketing isn't just another marketing agency. It's an extension of years of hands-on, real-world success. We've managed teams, grown brands from scratch, scaled creator revenue, and built relationships throughout the adult industry ecosystem.
              </p>

              <p className="text-gray-600 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                That experience gives us something no traditional marketing agency can replicate—a deep understanding of what actually converts in this space.
              </p>

              <p className="text-gray-600 mb-12" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                We know what works. We know what doesn't. And we know how to build strategies that respect platforms, stay compliant, and still drive growth.
              </p>

              <h2 className="text-black mb-6" style={{ fontSize: '36px', lineHeight: '1.2', fontWeight: 'bold' }}>
                The Future of Adult Industry Marketing Starts Here
              </h2>

              <p className="text-gray-600 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Teasy Agency set the standard for creator management.
              </p>

              <p className="text-gray-600 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Teasy Marketing is setting the standard for marketing in the adult industry.
              </p>

              <p className="text-gray-600 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                This new chapter allows us to serve more creators, more companies, and more ambitious brands looking for guidance that's grounded, modern, and proven. As the industry continues to evolve, Teasy Marketing is here to lead, innovate, and push the boundaries of what's possible.
              </p>

              <p className="text-gray-600 mb-12" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                And we're just getting started.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-[#00A5DF]/10 rounded-lg border border-[#00A5DF]/20">
              <h3 className="text-black mb-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Ready to Work With Us?
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Let's discuss how Teasy Marketing can help grow your brand with proven strategies built specifically for the adult industry.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#00A5DF] text-white px-8 py-3 rounded-md hover:bg-[#0094c9] transition-colors"
                style={{ fontSize: '16px' }}
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </article>
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
}

export default BlogPostTeasyAgency;

