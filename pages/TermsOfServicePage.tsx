import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function TermsOfServicePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Terms of Service', href: '/terms-of-service' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Terms of Service | TEASY Marketing"
        description="TEASY Marketing's terms of service outline the rules and regulations for using our website and services. Read our terms and conditions."
        canonical="https://teasymarketing.com/terms"
        keywords="terms of service, terms and conditions, TEASY terms"
      />
      <BreadcrumbSchema items={breadcrumbItems.map((item) => ({
        name: item.label,
        url: `https://teasymarketing.com${item.href}`
      }))} />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-6 py-24">
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="text-black mb-6" style={{ fontSize: '64px', lineHeight: '1.1' }}>
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-12" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Last Updated: November 14, 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 py-24">
            <div className="space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-white mb-6">Agreement to Terms</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and TEASY ("Company," "we," "us," or "our") concerning your access to and use of the teasymarketing.com website and any related services (collectively, the "Services").
                </p>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
                </p>
              </div>

              {/* Age Restriction */}
              <div>
                <h2 className="text-white mb-6">Age Restriction</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  You must be at least 18 years of age to use our Services. By using our Services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into this agreement.
                </p>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-white mb-6">Services Description</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  TEASY provides digital marketing services specifically for the adult entertainment industry, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Social Media Marketing</li>
                  <li>Website Design and Development</li>
                  <li>Email Marketing</li>
                  <li>Content Marketing</li>
                  <li>Public Relations and Brand Management</li>
                </ul>
              </div>

              {/* User Obligations */}
              <div>
                <h2 className="text-white mb-6">User Obligations</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  By using our Services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Provide accurate, current, and complete information when contacting us or using our Services</li>
                  <li>Comply with all applicable laws and regulations, including those related to adult content</li>
                  <li>Not use our Services for any illegal or unauthorized purpose</li>
                  <li>Not interfere with or disrupt the operation of our Services</li>
                  <li>Not attempt to gain unauthorized access to any portion of our Services</li>
                  <li>Not transmit any viruses, malware, or other malicious code</li>
                  <li>Respect intellectual property rights of TEASY and third parties</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-white mb-6">Intellectual Property Rights</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, images, software, and design, are owned by TEASY or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our Services without our prior written consent.
                </p>
              </div>

              {/* Client Content */}
              <div>
                <h2 className="text-white mb-6">Client Content and Materials</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  If you engage our services and provide us with content, materials, or access to your accounts:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>You represent and warrant that you own or have the necessary rights to all content you provide</li>
                  <li>You grant us a limited license to use, reproduce, and modify your content solely for the purpose of providing services to you</li>
                  <li>You are responsible for ensuring all content complies with applicable laws and regulations</li>
                  <li>You remain solely responsible for the content you produce and publish</li>
                </ul>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We reserve the right to refuse service to any client whose content violates laws or our ethical standards.
                </p>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-white mb-6">Payment Terms</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  For clients engaging our paid services:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Payment terms will be outlined in individual service agreements</li>
                  <li>All fees are non-refundable unless otherwise specified in writing</li>
                  <li>Late payments may result in suspension of services</li>
                  <li>We reserve the right to modify our pricing with reasonable notice</li>
                  <li>All prices are in USD unless otherwise stated</li>
                </ul>
              </div>

              {/* Service Modifications */}
              <div>
                <h2 className="text-white mb-6">Service Modifications and Termination</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We reserve the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Modify, suspend, or discontinue any aspect of our Services at any time</li>
                  <li>Refuse service to anyone for any reason at any time</li>
                  <li>Terminate or suspend your access to our Services without notice if you violate these Terms</li>
                  <li>Update these Terms at any time, with changes effective upon posting</li>
                </ul>
              </div>

              {/* Disclaimers */}
              <div>
                <h2 className="text-white mb-6">Disclaimers</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Implied warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                  <li>Guarantees regarding specific results or outcomes from marketing services</li>
                  <li>Uninterrupted, secure, or error-free operation of our Services</li>
                  <li>Accuracy or completeness of any information provided</li>
                </ul>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We make no guarantees about search engine rankings, social media growth, traffic increases, or revenue generation. Results vary and depend on many factors outside our control.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-white mb-6">Limitation of Liability</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TEASY SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Damages arising from your use or inability to use our Services</li>
                  <li>Any third-party actions or content</li>
                </ul>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  Our total liability to you for all claims arising from or related to our Services shall not exceed the amount you paid us in the 12 months preceding the claim, or $1,000, whichever is greater.
                </p>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-white mb-6">Indemnification</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  You agree to indemnify, defend, and hold harmless TEASY and its officers, employees, and agents from any claims, liabilities, damages, losses, or expenses (including legal fees) arising from: (a) your use of our Services, (b) your violation of these Terms, (c) your violation of any rights of third parties, or (d) any content you provide to us.
                </p>
              </div>

              {/* Adult Content */}
              <div>
                <h2 className="text-white mb-6">Adult Content Disclaimer</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  Our services are specifically designed for the adult entertainment industry. We work with legal adult content businesses and expect all clients to comply with applicable laws, including age verification requirements, content restrictions, and record-keeping obligations (such as 18 U.S.C. § 2257 in the United States). Clients are solely responsible for ensuring their content and business practices comply with all applicable laws.
                </p>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-white mb-6">Third-Party Services and Links</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  Our Services may contain links to third-party websites or integrate with third-party services. We are not responsible for the content, privacy policies, or practices of any third-party services. Your use of third-party services is at your own risk and subject to their terms and conditions.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-white mb-6">Governing Law and Dispute Resolution</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles.
                </p>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  Any disputes arising from these Terms or our Services shall be resolved through binding arbitration in Los Angeles, California, except that either party may seek injunctive relief in court. You waive any right to participate in class action lawsuits or class-wide arbitration.
                </p>
              </div>

              {/* Severability */}
              <div>
                <h2 className="text-white mb-6">Severability</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </div>

              {/* Entire Agreement */}
              <div>
                <h2 className="text-white mb-6">Entire Agreement</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and TEASY regarding our Services and supersede any prior agreements.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  If you have questions about these Terms, please contact us at:
                </p>
                <div className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <p className="mb-2"><strong>TEASY Marketing</strong></p>
                  <p className="mb-2">Email: team@teasymarketing.com</p>
                  <p>Los Angeles, CA & Las Vegas, NV</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TermsOfServicePage;
