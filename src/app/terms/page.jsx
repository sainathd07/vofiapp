'use client';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function TermsPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-gray-700 mb-8">Last Updated: {formattedDate}</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">AGREEMENT TO TERMS</h2>
                <p className="mb-4">
                  These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Voca ("Company", "we", "us", or "our"), concerning your access to and use of the Voca application as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). By accessing the Site, you agree that you have read, understood, and agree to be bound by all of these Terms of Use. <span className="font-semibold">IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND MUST DISCONTINUE USE IMMEDIATELY.</span>
                </p>
                <p className="mb-4">
                  Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms of Use. It is your responsibility to periodically review these Terms of Use to stay informed of updates. Your continued use of the Site signifies acceptance of any revised Terms of Use.
                </p>
                <p>
                  The Site is intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to your use of the Site.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">INTELLECTUAL PROPERTY RIGHTS</h2>
                <p className="mb-4">
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights. The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
                <p>
                  Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">USER REPRESENTATIONS</h2>
                <p className="mb-4">By using the Site, you represent and warrant that:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>All registration information you submit will be true, accurate, current, and complete.</li>
                  <li>You will maintain the accuracy of such information and promptly update as necessary.</li>
                  <li>You have the legal capacity and agree to comply with these Terms of Use.</li>
                  <li>You are not under the age of 13.</li>
                  <li>If a minor, you have received parental permission to use the Site.</li>
                  <li>You will not access the Site through automated or non-human means.</li>
                  <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                  <li>Your use of the Site will not violate any applicable law or regulation.</li>
                </ul>
                <p>
                  If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">USER REGISTRATION</h2>
                <p>
                  You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">FEES AND PAYMENT</h2>
                <p>
                  Some features of the Site may require payment. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You authorize us to charge your payment provider for any such amounts upon making your purchase. If your purchase is subject to recurring charges, you consent to our charging your payment method on a recurring basis until you notify us of cancellation. We reserve the right to correct any errors in pricing and to refuse any order placed through the Site.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">REFUND AND CANCELLATION POLICY</h2>
                <p className="mb-4">
                  We may offer a free trial or free plan to allow you to evaluate our service before purchase. <span className="font-semibold">All purchases are final, and we do not offer refunds.</span> You may cancel your subscription at any time via your account dashboard. Your subscription will remain active until the end of the current billing cycle.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">PROHIBITED ACTIVITIES</h2>
                <p className="mb-4">
                  You may not access or use the Site for any purpose other than that for which we make the Site available. Prohibited activities include, but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Systematic data scraping or extraction without written permission.</li>
                  <li>Unauthorized use, including creating accounts by automated means or under false pretenses.</li>
                  <li>Circumventing, disabling, or interfering with security features of the Site.</li>
                  <li>Engaging in any automated use of the system, such as scripts or bots.</li>
                  <li>Impersonating another user or person.</li>
                  <li>Selling or transferring your account.</li>
                  <li>Uploading or transmitting viruses or malicious code.</li>
                  <li>Any activity that violates applicable laws or regulations.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">USER GENERATED CONTENT</h2>
                <p>
                  If the Site allows users to submit content, you represent that you own or have the necessary rights to such content. By submitting content, you grant us a license to use, display, and distribute such content in connection with the Site. You are solely responsible for your submissions and agree not to submit unlawful, infringing, or otherwise objectionable content.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">THIRD-PARTY WEBSITES AND CONTENT</h2>
                <p>
                  The Site may contain links to third-party websites or content. We are not responsible for the content, accuracy, or practices of third-party sites. Access third-party sites at your own risk.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">PRIVACY POLICY</h2>
                <p>
                  We care about your privacy and data security. Please review our <Link href="/privacy" className="text-green-700 hover:underline font-medium">Privacy Policy</Link>. By using the Site, you agree to be bound by our Privacy Policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">DISCLAIMER</h2>
                <p className="uppercase font-semibold">
                  THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOUR USE OF THE SITE IS AT YOUR SOLE RISK. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">LIMITATION OF LIABILITY</h2>
                <p className="uppercase font-semibold">
                  IN NO EVENT WILL WE BE LIABLE FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">INDEMNIFICATION</h2>
                <p>
                  You agree to indemnify and hold us harmless from any loss, damage, liability, claim, or demand due to your use of the Site or breach of these Terms of Use.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">GOVERNING LAW</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be resolved exclusively in the courts of India.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">CHANGES TO TERMS</h2>
                <p>
                  We reserve the right to update or change these Terms of Use at any time. Changes will be effective immediately upon posting the updated terms on the Site.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">CONTACT US</h2>
                <p>
                  If you have questions or concerns about these Terms, please contact us at:
                  <br />
                  <a href="mailto:support@vocaapp.com" className="text-green-700 hover:underline font-medium">support@vocaapp.com</a>
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