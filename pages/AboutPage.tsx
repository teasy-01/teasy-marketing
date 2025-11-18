import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { TrustLogos } from '../components/TrustLogos';
import { SEOHead } from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function AboutPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Industry Expertise",
      description: "Deep understanding of the unique challenges and opportunities in adult industry marketing."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-First Approach",
      description: "Your success is our success. We're committed to delivering measurable results that grow your business."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of generating millions in revenue growth for adult brands across all verticals."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation & Adaptation",
      description: "Constantly evolving our strategies to stay ahead of algorithm changes and industry trends."
    }
  ];

  const team = [
    {
      name: "Marketing Strategy",
      description: "Our strategists have over 20 years of combined experience in adult industry marketing, delivering campaigns that drive real business growth."
    },
    {
      name: "Proven SEO",
      description: "Expert technical team specializing in the unique SEO challenges of adult websites, from hosting to indexation strategies."
    },
    {
      name: "Content & Creative",
      description: "Award-winning creators who understand how to balance compelling content with platform compliance and conversion optimization."
    },
    {
      name: "Analytics & Data",
      description: "Data scientists who turn numbers into actionable insights, tracking every metric that matters to your bottom line."
    }
  ];

  const teamMembers = [
    {
      name: "Taylor Moore",
      role: "Co-Founder",
      bio: "Taylor brings 10+ years of creator-side expertise, specializing in content strategy, brand development, and high-level creative direction for adult studios and platforms, ensuring every client receives insight-driven, market-ready execution.",
      image: "/media/taylor-moore.jpg"
    },
    {
      name: "Alex Lirette",
      role: "Co-Founder",
      bio: "Alex leads the performance side of Teasy Marketing with a decade of SEO, analytics, and digital strategy experience, building data-driven growth systems that help adult brands scale reliably and sustainably.",
      image: "/media/alex-teasy.png"
    },
    {
      name: "Chelsey",
      role: "Client Team Manager",
      bio: "Chelsey oversees client success with precision, blending industry knowledge, communication expertise, and operational structure to ensure every brand receives smooth onboarding, consistent support, and high-quality campaign execution.",
      image: "/media/chelsey-teasy.jpg"
    },
    {
      name: "Hannah",
      role: "Account Manager",
      bio: "Hannah manages day-to-day client operations, coordinating strategy, creative needs, and performance updates to keep campaigns aligned, efficient, and moving toward measurable growth outcomes.",
      image: "/media/hannah-teasy.jpg"
    },
    {
      name: "Katie",
      role: "Marketing Operations Manager",
      bio: "Katie drives internal systems, workflow optimization, and cross-team coordination, ensuring Teasy Marketing delivers seamless execution, timely production, and organized operations across all clients and departments.",
      image: "/media/katie-teasy.jpg"
    },
    {
      name: "Malisa",
      role: "Strategy Coordinator",
      bio: "Malisa supports strategic planning by analyzing performance data, researching market opportunities, and assisting with campaign ideation to help clients stay competitive, relevant, and positioned for long-term growth.",
      image: "/media/malisa-teasy.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="About TEASY - Adult Industry Marketing Experts | Our Story & Team"
        description="Meet the TEASY team - industry veterans dedicated to helping adult brands grow. Founded by Alex and Taylor, we combine SEO expertise with creator-side insight for real results."
        canonical="https://teasymarketing.com/about"
        keywords="adult marketing agency team, adult industry experts, TEASY founders, adult marketing professionals"
      />
      <BreadcrumbSchema items={breadcrumbItems.map((item) => ({
        name: item.label,
        url: `https://teasymarketing.com${item.href}`
      }))} />
      <Navigation />
      <main>
        {/* Hero Section - Black Background */}
        <section className="bg-black relative">
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
              onLoadedData={(e) => {
                // Start playing only after data is loaded
                (e.target as HTMLVideoElement).play().catch(() => {
                  // Ignore autoplay errors
                });
              }}
            >
              <source src="/media/about-teasy-marketing.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 relative z-10">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#00A5DF] text-white rounded-full mb-4 md:mb-6">
                <span style={{ fontSize: '14px' }}>About TEASY</span>
              </div>
              <h1 className="text-white mb-4 md:mb-6" style={{ fontSize: 'clamp(32px, 8vw, 64px)', lineHeight: '1.1' }}>
                The Adult Industry Marketing Agency That Delivers Results
              </h1>
              <p className="text-gray-300 mb-6 md:mb-8" style={{ fontSize: 'clamp(16px, 4vw, 20px)', lineHeight: '1.6' }}>
                We're a specialized digital marketing agency dedicated exclusively to the adult industry. Founded by industry veterans who understand the unique challenges you face, TEASY combines deep sector expertise with cutting-edge marketing strategies to help adult brands grow, scale, and dominate their markets.
              </p>
            </div>
          </div>
        </section>

        <TrustLogos />

        {/* Story Section - White Background */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-black mb-6" style={{ fontSize: '48px', lineHeight: '1.1' }}>
                  The TEASY Story
                </h2>
                <div className="space-y-6 text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <p>
                    Teasy Marketing was created by two founders who didn’t just watch the adult industry evolve—they were part of the evolution. After a decade working with creators, studios, and platforms, Alex and Taylor saw a gap: mainstream agencies didn’t understand the industry, and creator-focused teams couldn’t deliver real strategy.
                  </p>
                  <p>
                    Combining Alex’s expertise in SEO and performance marketing with Taylor’s creator-side insight and content strategy, Teasy Marketing became the first agency built to fully understand both sides of growth. Every approach is shaped by real experience, data, and years of navigating the adult space—not recycled tactics.
                  </p>
                  <p>
                    Today, Teasy Marketing is the trusted partner for adult brands looking for serious execution and long-term results. Our mission is simple: use our industry knowledge to give adult businesses the strategic support and performance they’ve never been offered by traditional agencies.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/media/taylor-teasy.jpg"
                  alt="Team collaboration"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Black Background */}
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl mb-16">
              <h2 className="text-white mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>Our Core Values</h2>
              <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                The principles that guide every decision we make and every campaign we execute.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-8 border border-gray-800 rounded-lg">
                  <div className="text-[#00A5DF] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section - White Background */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl mb-16">
              <h2 className="text-black mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>Meet Your TEASY Team</h2>
              <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                The experts behind TEASY's success. Industry veterans dedicated to growing your adult brand.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-32 h-32 object-cover mx-auto mb-6"
                  />
                  <h3 className="text-black mb-2">{member.name}</h3>
                  <p className="text-[#00A5DF] mb-4" style={{ fontSize: '14px' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Our complete team is over 80 employees across 5 continents.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Section - Black Background */}
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl mb-16">
              <h2 className="text-white mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>The TEASY Expertise</h2>
              <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Specialized teams dedicated to mastering every aspect of adult industry marketing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="p-8 border border-gray-800 rounded-lg">
                  <h3 className="text-white mb-3">{member.name}</h3>
                  <p className="text-gray-300" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section - White Background */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-black mb-6" style={{ fontSize: '48px', lineHeight: '1.1' }}>
                Our Mission
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontSize: '20px', lineHeight: '1.7' }}>
                Our mission is to elevate the adult industry through marketing that’s strategic, data-driven, and built by people who truly understand the space. We believe adult brands deserve the same level of expertise, structure, and long-term planning that top mainstream companies receive—without the judgment, limitations, or “one-size-fits-all” approach traditional agencies offer.
              </p>
              <p className="text-gray-600" style={{ fontSize: '20px', lineHeight: '1.7' }}>
                Teasy Marketing exists to empower studios, platforms, and adult businesses with real strategy, transparent execution, and measurable results. Everything we do is rooted in experience, honesty, and performance. Our mission is simple: give the adult industry a partner that finally takes its growth as seriously as the brands themselves.
              </p>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;