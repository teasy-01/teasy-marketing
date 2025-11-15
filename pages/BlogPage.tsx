import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { TrustLogos } from '../components/TrustLogos';
import { CTABanner } from '../components/CTABanner';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Adult SEO in 2025",
      excerpt: "Learn the latest strategies and best practices for optimizing adult websites to rank higher in search engines while navigating industry-specific challenges.",
      category: "SEO",
      date: "November 10, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
    },
    {
      id: 2,
      title: "Building a Compliant Adult Social Media Strategy",
      excerpt: "Discover how to create engaging social media campaigns for adult brands while staying compliant with platform policies and community guidelines.",
      category: "Social Media",
      date: "November 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
    },
    {
      id: 3,
      title: "Email Marketing Best Practices for Adult Businesses",
      excerpt: "Maximize your email marketing ROI with proven strategies tailored specifically for the adult industry, from list building to conversion optimization.",
      category: "Email Marketing",
      date: "October 28, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80"
    },
    {
      id: 4,
      title: "How to Choose the Right Payment Processor for Adult Sites",
      excerpt: "Navigate the complex world of adult payment processing with our comprehensive guide to selecting reliable and compliant payment solutions.",
      category: "Business",
      date: "October 20, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
    },
    {
      id: 5,
      title: "Content Marketing Strategies That Drive Adult Traffic",
      excerpt: "Create compelling content that attracts and retains your target audience while building authority in the competitive adult industry.",
      category: "Content Marketing",
      date: "October 15, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      id: 6,
      title: "Reputation Management for Adult Brands",
      excerpt: "Protect and enhance your adult brand's reputation with effective PR strategies and proactive reputation management techniques.",
      category: "PR",
      date: "October 8, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
      id: 7,
      title: "Mobile Optimization for Adult Entertainment Sites",
      excerpt: "Ensure your adult website delivers exceptional mobile experiences with our guide to responsive design and mobile-first optimization.",
      category: "Web Design",
      date: "October 1, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
      id: 8,
      title: "Analytics & Tracking for Adult Websites",
      excerpt: "Master the art of tracking and analyzing your adult website's performance with privacy-compliant analytics solutions and key metrics.",
      category: "Analytics",
      date: "September 25, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 9,
      title: "Building Trust in the Adult Industry",
      excerpt: "Establish credibility and trust with your audience through transparent communication, quality content, and ethical business practices.",
      category: "Business",
      date: "September 18, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                  <a href={post.id === 1 ? "#blog-post-seo" : "#"}>
                    <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </a>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-[#00A5DF]/10 text-[#00A5DF] rounded-full" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <a href={post.id === 1 ? "#blog-post-seo" : "#"}>
                    <h2 className="text-black mb-3 group-hover:text-[#00A5DF] transition-colors" style={{ fontSize: '24px', lineHeight: '1.3' }}>
                      {post.title}
                    </h2>
                  </a>

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
                  <a href={post.id === 1 ? "#blog-post-seo" : "#"} className="inline-flex items-center gap-2 text-[#00A5DF] hover:gap-3 transition-all" style={{ fontSize: '14px' }}>
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </a>
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