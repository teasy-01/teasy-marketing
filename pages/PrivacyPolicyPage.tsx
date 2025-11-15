import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Privacy Policy', href: '#privacy' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Privacy Policy | TEASY Marketing"
        description="TEASY Marketing's privacy policy outlines how we collect, use, and protect your personal information. Learn about our commitment to your privacy and data security."
        canonical="https://teasymarketing.com/privacy"
        keywords="privacy policy, data protection, TEASY privacy"
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
              Privacy Policy
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
                <h2 className="text-white mb-6">Introduction</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  TEASY ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website teasymarketing.com and use our services.
                </p>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-white mb-6">Information We Collect</h2>
                
                <h3 className="text-white mb-4">Personal Information</h3>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Fill out a contact form on our website</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Request a consultation or services</li>
                  <li>Engage with us through email, phone, or other communications</li>
                </ul>
                <p className="text-gray-300 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  This personal information may include:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and website URL</li>
                  <li>Professional information relevant to our services</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-white mb-4">Automatically Collected Information</h3>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  When you visit our website, we may automatically collect certain information about your device and browsing actions, including:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Clickstream data</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-white mb-6">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Provide, operate, and maintain our services</li>
                  <li>Improve and optimize our website and services</li>
                  <li>Analyze usage trends and preferences</li>
                  <li>Detect, prevent, and address technical issues or security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-white mb-6">Information Sharing and Disclosure</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and delivering services (e.g., email service providers, hosting providers)</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition, your information may be transferred</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-white mb-6">Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings.
                </p>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We use cookies for:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Essential website functionality</li>
                  <li>Understanding how visitors use our site</li>
                  <li>Remembering your preferences</li>
                  <li>Marketing and advertising purposes</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-white mb-6">Data Security</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-white mb-6">Data Retention</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-white mb-6">Your Privacy Rights</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to object to or restrict processing</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  To exercise these rights, please contact us at team@teasymarketing.com.
                </p>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-white mb-6">Third-Party Websites</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-white mb-6">Children's Privacy</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              {/* International Users */}
              <div>
                <h2 className="text-white mb-6">International Users</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  If you are accessing our website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States. By using our services, you consent to this transfer.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-white mb-6">Changes to This Privacy Policy</h2>
                <p className="text-gray-300" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our website after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicyPage;
