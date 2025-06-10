'use client';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function PrivacyPage() {
  const [formattedDate, setFormattedDate] = useState('');
  
  // Generate the date on the client side only after component is mounted
  useEffect(() => {
    setFormattedDate(new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }));
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-600 mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          Back to Home
        </Link>
        
        <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-gray-700 mb-8">Last Updated: {formattedDate}</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">INTRODUCTION</h2>
                <p className="mb-4">
                  This Privacy Policy explains how Vofi ("we", "us", or "our") collects, uses, shares, and protects personal information obtained from users of the Vofi application, website, and related services (collectively, the "Service"). Your privacy is important to us, and we are committed to protecting your personal information.
                </p>
                <p>
                  By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our Service.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">INFORMATION WE COLLECT</h2>
                <p className="mb-4">We collect several types of information from and about users of our Service, including:</p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Personal Information</h3>
                <p className="mb-4">
                  When you create an account, we collect information that can be used to identify you, such as your name, email address, and payment information. Additionally, we may collect your voice data when you use the voice-enabled features of our Service.
                </p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Usage Information</h3>
                <p className="mb-4">
                  We automatically collect information about your interactions with our Service, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Transaction data (amount, category, date, time, merchant)</li>
                  <li>Device information (type, operating system, browser)</li>
                  <li>Log data (IP address, access times, features used)</li>
                  <li>Location data (with your permission)</li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Financial Information</h3>
                <p>
                  To provide our financial management features, we may collect information about your financial accounts, transactions, and spending habits. This may include account balances, transaction history, and expense categories.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">HOW WE USE YOUR INFORMATION</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Personalize your experience and deliver content relevant to your interests</li>
                  <li>Send notifications and updates about your account</li>
                  <li>Analyze usage patterns and trends to enhance our Service</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">VOICE DATA PROCESSING</h2>
                <p className="mb-4">
                  As a voice-first application, we collect and process voice recordings when you interact with our Service using voice commands. These recordings are used to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Process your requests and execute your commands</li>
                  <li>Improve our speech recognition technology</li>
                  <li>Enhance the accuracy and relevance of our Service</li>
                </ul>
                <p>
                  You can delete your voice data at any time through your account settings. We will retain your voice data only as long as necessary to provide our services or as required by law.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">SHARING YOUR INFORMATION</h2>
                <p className="mb-4">We may share your personal information with:</p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Service Providers</h3>
                <p className="mb-4">
                  We may share your information with third-party vendors, service providers, and other business partners who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting, and customer service.
                </p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Legal Requirements</h3>
                <p className="mb-4">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
                </p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Business Transfers</h3>
                <p>
                  If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">DATA SECURITY</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
                <p>
                  In the event of a data breach that affects your personal information, we will notify you in compliance with applicable laws.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">YOUR RIGHTS AND CHOICES</h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction or objection to certain processing activities</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">CHILDREN'S PRIVACY</h2>
                <p>
                  Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">INTERNATIONAL DATA TRANSFERS</h2>
                <p>
                  Your personal information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. We will take appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">CHANGES TO THIS PRIVACY POLICY</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">CONTACT US</h2>
                <p>
                  If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at:
                  <br />
                  <a href="mailto:privacy@vofiapp.com" className="text-green-700 hover:underline font-medium">privacy@vofiapp.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 