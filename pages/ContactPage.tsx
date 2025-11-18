import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // EmailJS configuration
      // You'll need to set these up in EmailJS dashboard and add them as environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        to_email: 'team@teasymarketing.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        service: formData.service,
        message: formData.message,
        subject: `Contact Form Submission from ${formData.name}`,
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams);

      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Failed to send message. Please email us directly at team@teasymarketing.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "team@teasymarketing.com",
      link: "mailto:team@teasymarketing.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Los Angeles, CA & Las Vegas, NV",
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon-Fri: 9am-6pm PST",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Contact TEASY - Get in Touch"
        description="Ready to grow your adult brand? Contact TEASY for a free consultation. Our expert team is here to help you achieve your marketing goals. Email: team@teasymarketing.com"
        canonical="https://teasymarketing.com/contact"
        keywords="contact adult marketing agency, TEASY contact, adult marketing consultation, get in touch"
      />
      <BreadcrumbSchema items={breadcrumbItems.map((item) => ({
        name: item.label,
        url: `https://teasymarketing.com${item.href}`
      }))} />
      <Navigation />
      <main>
        {/* Hero Section - White Background */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="max-w-3xl">
              <p className="text-[#00A5DF] mb-4" style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Get In Touch
              </p>
              <h1 className="text-black mb-6" style={{ fontSize: '64px', lineHeight: '1.1' }}>
                Let's Grow Your Adult Brand Together
              </h1>
              <p className="text-gray-600 mb-12" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Ready to take your adult business to the next level? Get in touch with our team for a free consultation and discover how we can help you achieve your marketing goals.
              </p>
              
              {/* Row of blue arrows pointing down */}
              <div className="flex gap-4 items-center">
                <ChevronDown className="w-8 h-8 text-[#00A5DF]" />
                <ChevronDown className="w-8 h-8 text-[#00A5DF]" />
                <ChevronDown className="w-8 h-8 text-[#00A5DF]" />
                <ChevronDown className="w-8 h-8 text-[#00A5DF]" />
                <ChevronDown className="w-8 h-8 text-[#00A5DF]" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards - Black Background */}
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <address className="grid grid-cols-1 md:grid-cols-3 gap-8 not-italic">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00A5DF]/10 text-[#00A5DF] mb-4" aria-hidden="true">
                    {info.icon}
                  </div>
                  <h3 className="text-white mb-2" style={{ fontSize: '18px' }}>
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-gray-400 hover:text-[#00A5DF] transition-colors"
                      style={{ fontSize: '16px' }}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-400" style={{ fontSize: '16px' }}>
                      {info.content}
                    </p>
                  )}
                </div>
              ))}
            </address>
          </div>
        </section>

        {/* Contact Form - White Background */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-6 py-24">
            <div className="mb-12">
              <h2 className="text-black mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>
                Send Us a Message
              </h2>
              <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-green-900 mb-2" style={{ fontSize: '24px' }}>
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700" style={{ fontSize: '16px' }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-black mb-2" style={{ fontSize: '14px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A5DF] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-black mb-2" style={{ fontSize: '14px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A5DF] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-black mb-2" style={{ fontSize: '14px' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A5DF] focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-black mb-2" style={{ fontSize: '14px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A5DF] focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-black mb-2" style={{ fontSize: '14px' }}>
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A5DF] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="adult-seo">Adult SEO</option>
                    <option value="adult-social-media">Adult Social Media Marketing</option>
                    <option value="adult-website-design">Adult Website Design</option>
                    <option value="adult-email-marketing">Adult Email Marketing</option>
                    <option value="adult-content-marketing">Adult Content Marketing</option>
                    <option value="adult-pr">Adult PR & Reputation Management</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-black mb-2" style={{ fontSize: '14px' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A5DF] focus:border-transparent resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <div>
                  {errorMessage && (
                    <p className="text-red-500 mb-4" style={{ fontSize: '14px' }}>
                      {errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="bg-[#00A5DF] text-white px-8 py-4 rounded-md hover:bg-[#0094c9] transition-colors"
                    style={{ fontSize: '16px' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-gray-500 mt-4" style={{ fontSize: '14px' }}>
                    * Required fields
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* FAQ Section - Black Background */}
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl mb-16">
              <h2 className="text-white mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>
                Common Questions
              </h2>
              <p className="text-gray-400" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Quick answers to questions you may have before reaching out.
              </p>
            </div>

            <div className="max-w-3xl space-y-8">
              <div className="border-b border-gray-800 pb-8">
                <h3 className="text-white mb-3">How quickly can we get started?</h3>
                <p className="text-gray-400" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  We can typically begin work within 1-2 weeks after our initial consultation and contract signing. For urgent projects, expedited onboarding is available.
                </p>
              </div>

              <div className="border-b border-gray-800 pb-8">
                <h3 className="text-white mb-3">Do you work with businesses outside the US?</h3>
                <p className="text-gray-400" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Yes, we work with adult businesses globally and have experience navigating international regulations, payment processors, and market-specific strategies.
                </p>
              </div>

              <div className="border-b border-gray-800 pb-8">
                <h3 className="text-white mb-3">What information do you need for a consultation?</h3>
                <p className="text-gray-400" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Just your business goals, current challenges, and any relevant website or social media links. We'll discuss everything else during our call.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-white mb-3">Is my information kept confidential?</h3>
                <p className="text-gray-400" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Absolutely. We sign NDAs upon request and maintain strict confidentiality for all client information and business strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;