import { Star } from 'lucide-react';
import { AggregateReviewSchema } from './StructuredData';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Teasy Marketing completely changed my business. Their team handled my social strategy, optimization, and posting schedule so I could focus on creating. My engagement and paid conversions doubled within the first month. They actually understand creators and know what works.",
      author: "Adult Creator",
      role: "Adult Social Media Marketing",
      company: ""
    },
    {
      quote: "We hired Teasy Marketing to overhaul our SEO, and the results blew us away. They improved our rankings for highly competitive adult keywords and brought in consistent organic traffic we'd been trying to get for years. Professional, fast, and genuinely experts in this niche.",
      author: "Adult Brand",
      role: "Adult SEO Services",
      company: ""
    },
    {
      quote: "Teasy Marketing produced some of the best content we've ever had. They handled creative direction, scripts, production, and editing—everything was organized and high-quality. Our campaign looks cleaner, stronger, and more on-brand than anything we've done before.",
      author: "Adult Brand",
      role: "Adult Content Creation Services",
      company: ""
    }
  ];

  // Convert testimonials to review schema format
  const reviews = testimonials.map(t => ({
    author: t.author,
    reviewBody: t.quote,
    reviewRating: 5
  }));

  return (
    <section id="testimonials-section" className="bg-black py-32">{/* Black background */}
      <AggregateReviewSchema reviews={reviews} />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-white mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>Client Success Stories</h2>
          <p className="text-gray-400" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            See how our clients describe the results, partnership, and performance Teasy delivers across the adult industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="bg-white p-8 border border-gray-200 rounded-lg hover:border-[#00A5DF] transition-colors"
            >
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00A5DF] text-[#00A5DF]" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                "{testimonial.quote}"
              </blockquote>
              <footer>
                <p className="text-black font-semibold">{testimonial.author}</p>
                <p className="text-gray-500" style={{ fontSize: '14px' }}>
                  {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}