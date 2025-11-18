import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const contentExamples = [
  {
    id: 1,
    video: '/media/Video-488.mp4',
    title: 'Our Work'
  },
  {
    id: 2,
    video: '/media/Video-565.mp4',
    title: 'Our Work'
  },
  {
    id: 3,
    video: '/media/Video-809.mp4',
    title: 'Our Work'
  },
  {
    id: 4,
    video: '/media/Video-140.mp4',
    title: 'Our Work'
  },
  {
    id: 5,
    video: '/media/Video-419.mp4',
    title: 'Our Work'
  },
  {
    id: 6,
    video: '/media/Video-1.mp4',
    title: 'Our Work'
  },
  {
    id: 7,
    video: '/media/Video-193.mp4',
    title: 'Our Work'
  },
  {
    id: 8,
    video: '/media/Video-883.mp4',
    title: 'Our Work'
  },
  {
    id: 9,
    video: '/media/Video-924.mp4',
    title: 'Our Work'
  },
  {
    id: 10,
    video: '/media/Video-267.mp4',
    title: 'Our Work'
  },
  {
    id: 11,
    video: '/media/Video-66.mp4',
    title: 'Our Work'
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

  // Use Intersection Observer to load and play videos when they're visible
  useEffect(() => {
    const videos = document.querySelectorAll('.content-showcase-video') as NodeListOf<HTMLVideoElement>;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            // Video is visible, ensure it's loaded and playing
            if (video.readyState === 0) {
              video.load();
            }
            video.play().catch(() => {
              // Ignore autoplay errors - browser may block autoplay
            });
          } else {
            // Video is not visible, pause it to save resources
            video.pause();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of video is visible
        rootMargin: '50px', // Start loading slightly before video enters viewport
      }
    );

    videos.forEach((video) => observer.observe(video));

    // Also check visible videos immediately after slider change
    const checkVisibleVideos = () => {
      videos.forEach((video) => {
        const rect = video.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
        if (isVisible && video.paused) {
          if (video.readyState === 0) {
            video.load();
          }
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        }
      });
    };

    // Small delay to allow DOM to update after slider transition
    setTimeout(checkVisibleVideos, 100);

    return () => {
      videos.forEach((video) => observer.unobserve(video));
    };
  }, [currentIndex, slidesToShow]);

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
              style={{ 
                transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${slidesToShow}))`
              }}
            >
              {contentExamples.map((example) => {
                const slideWidth = `calc((100% - ${(slidesToShow - 1) * 24}px) / ${slidesToShow})`;
                return (
                  <div 
                    key={example.id} 
                    className="flex-shrink-0"
                    style={{ width: slideWidth }}
                  >
                    <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover content-showcase-video"
                        onLoadedData={(e) => {
                          const video = e.target as HTMLVideoElement;
                          // Only play if video is in viewport
                          const rect = video.getBoundingClientRect();
                          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                          if (isVisible) {
                            video.play().catch(() => {
                              // Ignore autoplay errors
                            });
                          }
                        }}
                        onCanPlay={(e) => {
                          const video = e.target as HTMLVideoElement;
                          // Ensure video plays when it can
                          const rect = video.getBoundingClientRect();
                          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                          if (isVisible && video.paused) {
                            video.play().catch(() => {
                              // Ignore autoplay errors
                            });
                          }
                        }}
                      >
                        <source src={example.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                );
              })}
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