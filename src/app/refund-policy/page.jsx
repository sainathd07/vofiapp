'use client';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function RefundPolicyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-gray-700 mb-8">Last Updated: {formattedDate}</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">NO REFUND POLICY</h2>
                <p className="mb-4 font-semibold text-lg">
                  Voca does not offer refunds for any purchases made through our application, website, or any other platform where our services are available.
                </p>
                <p className="mb-4">
                  All sales are final. Once a purchase is made, whether it's a monthly subscription, annual subscription, or lifetime access, no refunds will be provided under any circumstances, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Accidental purchases</li>
                  <li>Dissatisfaction with the service</li>
                  <li>Technical issues or compatibility problems</li>
                  <li>Unused subscription time</li>
                  <li>Changes in personal circumstances</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">FREE TRIAL</h2>
                <p className="mb-4">
                  We may offer a free trial period that allows you to evaluate our service before making a purchase. During this trial period, you can explore the features and functionality of our application without any payment obligation.
                </p>
                <p>
                  We encourage all users to take advantage of our free trial before making a purchase decision. This allows you to determine if our service meets your needs before committing to a paid subscription.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">SUBSCRIPTION CANCELLATION</h2>
                <p className="mb-4">
                  While we do not offer refunds, you may cancel your subscription at any time to prevent future billing. When you cancel a subscription:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You will continue to have access to the service until the end of your current billing period</li>
                  <li>Your subscription will not renew automatically for the next billing cycle</li>
                  <li>No partial refunds will be issued for the unused portion of your current billing period</li>
                </ul>
                <p>
                  To cancel your subscription, log into your account and navigate to the subscription management section, or contact our support team for assistance.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">PRICING CHANGES</h2>
                <p>
                  We reserve the right to change our subscription prices at any time. If we change the pricing of our subscription plans, existing subscribers will be notified via email before the new pricing affects their subscription. Price changes will take effect at the start of the next billing cycle after the announcement.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">PAYMENT DISPUTES</h2>
                <p className="mb-4 font-semibold">
                  Initiating chargebacks or payment disputes for legitimate charges from Voca is a violation of this policy and our Terms of Service.
                </p>
                <p>
                  If you have concerns about a charge from Voca, please contact our support team directly before disputing the charge with your payment provider. Unauthorized chargebacks may result in termination of your account and access to our services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">EXCEPTIONS</h2>
                <p>
                  In rare circumstances, we may consider exceptions to this policy, such as in cases of unauthorized purchases or if required by applicable law. Any exceptions are made at our sole discretion and will be handled on a case-by-case basis.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">CONTACT US</h2>
                <p>
                  If you have any questions about our No Refund Policy, please contact our support team at:
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