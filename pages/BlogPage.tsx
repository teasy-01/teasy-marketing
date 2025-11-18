import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { TrustLogos } from '../components/TrustLogos';
import { CTABanner } from '../components/CTABanner';
import { SEOHead } from '../components/SEOHead';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How Teasy Agency Became a Leader—And Why We Launched Teasy Marketing",
      excerpt: "Teasy started with a simple idea: empower creators with real support, real strategy, and real results. What began as a hands-on talent management team quickly grew into one of the most recognized names in the creator industry.",
      category: "Introduction",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: "6 min read",
      image: "/media/teasy-introduction.jpg",
      slug: "blog-post-teasy-agency"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Adult Industry News and Insights - TEASY"
        description="Featured posts by the TEASY team on the adult industry."
        canonical="https://teasymarketing.com/blog"
        keywords="adult industry news, adult marketing insights, TEASY blog, adult industry blog"
      />
      <Navigation />
      <main>
        {/* Hero Section - White Background */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <p className="text-[#00A5DF] mb-4" style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Resources & Insights
              </p>
              <h1 className="text-black mb-6" style={{ fontSize: '64px', lineHeight: '1.1' }}>
                TEASY Blog
              </h1>
              <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Expert insights, strategies, and best practices for growing your adult business. Stay ahead of industry trends with our comprehensive guides and articles.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Logos Section */}
        <TrustLogos />

        {/* Blog Posts Grid - White Background */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  {/* Image */}
                  <Link to={post.slug ? `/${post.slug}` : "#"}>
                    <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-[#00A5DF]/10 text-[#00A5DF] rounded-full" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to={post.slug ? `/${post.slug}` : "#"}>
                    <h2 className="text-black mb-3 group-hover:text-[#00A5DF] transition-colors" style={{ fontSize: '24px', lineHeight: '1.3' }}>
                      {post.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-gray-500 mb-4" style={{ fontSize: '14px' }}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link to={post.slug ? `/${post.slug}` : "#"} className="inline-flex items-center gap-2 text-[#00A5DF] hover:gap-3 transition-all" style={{ fontSize: '14px' }}>
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;