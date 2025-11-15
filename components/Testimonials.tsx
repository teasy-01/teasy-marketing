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
      quote: "Working with this agency transformed our digital presence. We saw a 300% increase in qualified leads within the first quarter. Their strategic approach and transparent reporting gave us confidence in every decision.",
      author: "Sarah Johnson",
      role: "VP of Marketing",
      company: "TechStart Inc."
    },
    {
      quote: "The ROI we've achieved has been exceptional. They don't just execute campaigns—they become true partners in our growth. Our cost per acquisition dropped by 55% while our revenue doubled.",
      author: "Michael Chen",
      role: "Founder & CEO",
      company: "GrowthLabs"
    },
    {
      quote: "Finally, an agency that backs up their promises with data. Their SEO strategy took us from page 3 to position 1 for our most competitive keywords. The impact on our business has been remarkable.",
      author: "Emily Rodriguez",
      role: "Head of Digital",
      company: "Summit Solutions"
    },
    {
      quote: "What sets them apart is their ability to move fast without sacrificing quality. Within two months, we had a complete marketing system that drives consistent results. Highly recommend.",
      author: "David Park",
      role: "CMO",
      company: "Velocity Commerce"
    },
    {
      quote: "Their team feels like an extension of ours. The level of expertise and dedication they bring is unmatched. We've worked with several agencies before—none come close to the results we're seeing now.",
      author: "Jessica Martinez",
      role: "Director of Growth",
      company: "Innovate Pro"
    },
    {
      quote: "The transparency and communication are refreshing. We get real-time access to our data and weekly strategic reviews. They've helped us scale from $500K to $3M in annual revenue.",
      author: "Ryan Thompson",
      role: "Co-Founder",
      company: "CloudBridge"
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
            <div 
              key={index}
              className="bg-white p-8 border border-gray-200 rounded-lg hover:border-[#00A5DF] transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00A5DF] text-[#00A5DF]" />
                ))}
              </div>
              <p className="text-gray-600 mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-black">{testimonial.author}</p>
                <p className="text-gray-500" style={{ fontSize: '14px' }}>
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}