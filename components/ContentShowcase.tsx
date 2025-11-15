import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const contentExamples = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkaW8lMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjMwNTkyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Professional Studio Content'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTU3MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fashion & Lifestyle'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1758613655976-e8c8f85849a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbnRlbnQlMjBzaG9vdHxlbnwxfHx8fDE3NjMwNTkyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Creative Content Shoots'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1632613714614-e817d3814a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjMwNTkyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Lifestyle Photography'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1635814442700-446512be496a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5ODA2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Beauty & Glamour'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYyOTYyMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fashion Editorial'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5ODQ5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Studio Portraits'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1586734073732-fd664fbd85c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MzAwMTg4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Creative Visuals'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1536924430914-91f9e2041b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzAzOTc1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Artistic Direction'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1570394217969-3cb9e23a4068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjI5NjUwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Professional Imagery'
  }
];

export function ContentShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? contentExamples.length - slidesToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev >= contentExamples.length - slidesToShow ? 0 : prev + 1
    );
  };

  const visibleSlides = contentExamples.slice(currentIndex, currentIndex + slidesToShow);
  
  // If we don't have enough slides at the end, wrap around
  if (visibleSlides.length < slidesToShow) {
    visibleSlides.push(...contentExamples.slice(0, slidesToShow - visibleSlides.length));
  }

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-white mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>
            Examples of Our Work
          </h2>
          <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            From concept to execution, we create scroll-stopping content that drives engagement 
            and conversions. Our team specializes in producing high-quality visuals optimized 
            for Instagram Reels, TikTok, and other social platforms.
          </p>
        </div>

        <div className="relative pb-12">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(0)` }}
            >
              {visibleSlides.map((example, index) => (
                <div 
                  key={`${example.id}-${index}`} 
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(slidesToShow - 1) * 24}px) / ${slidesToShow})` }}
                >
                  <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={example.image}
                      alt={example.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white">{example.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {contentExamples.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#00A5DF] w-6' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}