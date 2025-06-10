'use client';

export default function HowItWorksSection() {
  return (
    <section id="how" className="relative z-10 max-w-screen-xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Vofi Works</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Track your finances in seconds with three simple steps</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">1</div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Speak Your Transaction</h3>
          <p className="text-gray-700">Just tell Vofi what you spent or earned in your natural language.</p>
          <div className="mt-6 bg-green-50 rounded-xl p-4 w-full">
            <p className="italic text-gray-600 text-sm">"I spent $45 on dinner at the Italian restaurant last night"</p>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">2</div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">AI Processes Everything</h3>
          <p className="text-gray-700">Our advanced AI understands and categorizes your transaction automatically.</p>
          <div className="mt-6 w-full">
            <div className="flex items-center justify-between bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">🍝</span>
                <div className="text-left">
                  <div className="text-gray-900 font-bold text-sm">Italian Restaurant</div>
                  <div className="text-gray-600 text-xs">Food & Dining</div>
                </div>
              </div>
              <div className="text-green-700 font-bold">$45</div>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">3</div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Get Insights & Reports</h3>
          <p className="text-gray-700">View spending patterns, track budgets, and receive personalized financial insights.</p>
          <div className="mt-6 w-full bg-green-50 rounded-xl p-4 flex flex-col items-center">
            <div className="w-full h-16 bg-green-200 rounded-lg mb-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-3/4 bg-green-500 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-green-900">
                Food Budget: 75% Used
              </div>
            </div>
            <div className="text-xs text-gray-600">View detailed reports and insights</div>
          </div>
        </div>
      </div>
    </section>
  );
} 