'use client';

import { useState } from 'react';

export default function AuraWebsite() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('ssmt');
  const [ssmatOpen, setSSMTOpen] = useState<boolean>(true);
  const [qtCyclesOpen, setQTCyclesOpen] = useState<boolean>(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl">No°</div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm hover:opacity-60 transition-opacity">Features</a>
            <a href="#pricing" className="text-sm hover:opacity-60 transition-opacity">Pricing</a>
            <a href="https://x.com/Nodgree" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-60 transition-opacity">@Nodgree</a>
            <a href="https://x.com/Auratrades_" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-60 transition-opacity">@Auratrades_</a>
            <button className="bg-[#0437f2] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0437f2]/80 transition-colors">
              Get Access
            </button>
          </div>
        </div>
      </nav>

      {/* TradingView Ticker */}
      <div className="mt-[64px] w-full" dangerouslySetInnerHTML={{
        __html: `
          <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
            {
              "symbols": [
                {"description": "ES", "proName": "FOREXCOM:SPXUSD"},
                {"description": "6E", "proName": "FX_IDC:EURUSD"},
                {"description": "GC", "proName": "TVC:GOLD"},
                {"description": "BTC", "proName": "BINANCE:BTCUSDT"},
                {"description": "NQ", "proName": "FOREXCOM:NSXUSD"},
                {"description": "6J", "proName": "FX_IDC:USDJPY"},
                {"description": "SI", "proName": "TVC:SILVER"},
                {"description": "ETH", "proName": "BINANCE:ETHUSDT"},
                {"description": "YM", "proName": "FOREXCOM:DJI"},
                {"description": "6B", "proName": "FX_IDC:GBPUSD"},
                {"description": "SOL", "proName": "BINANCE:SOLUSDT"},
                {"description": "6A", "proName": "FX_IDC:AUDUSD"},
                {"description": "6S", "proName": "FX_IDC:USDCHF"}
              ],
              "showSymbolLogo": true,
              "isTransparent": true,
              "displayMode": "adaptive",
              "colorTheme": "light",
              "locale": "en",
              "speed": 7
            }
            </script>
          </div>
        `
      }} />

      {/* Hero Section with Video/Animation Preview */}
      <section className="max-w-7xl mx-auto px-6 py-20 mt-10">
        {/* Video/GIF Preview Area */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-black/10 rounded-2xl p-4 shadow-2xl">
            <div className="bg-white rounded-xl border border-black/10 aspect-video flex items-center justify-center overflow-hidden">
              {/* Placeholder for video/GIF - replace src with your actual video/gif */}
              <div className="text-center p-8 w-full h-full flex flex-col items-center justify-center bg-gray-50">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-black/60 text-lg font-medium">Indicator Demo Video</p>
                <p className="text-black/40 text-sm mt-2">Add your screen recording or GIF here</p>
                <p className="text-black/30 text-xs mt-4">Replace this with: &lt;video&gt; or &lt;img src=&quot;your-gif.gif&quot;&gt;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-black/60 mb-6">Professional TradingView Indicators</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Unlock Your Potential with
            <br />
            <span className="text-[#0437f2]">No° x Aura Indicators</span>
          </h1>
          <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop manually marking charts… Aura&apos;s indicators automate Quarterly Theory and Smart Money Technique concepts with clean, aesthetic visuals that enhance your analysis…
          </p>
          
          <button className="bg-[#0437f2] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#0437f2]/80 transition-colors inline-flex items-center gap-2">
            Get Instant Access
            <span>→</span>
          </button>
          <p className="text-sm text-black/50 mt-4">Join traders automating their edge</p>
        </div>
      </section>

      {/* Interactive Indicator Showcase */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Everything You Need. Fully Automated.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Tabs */}
            <div className="space-y-3">
              {/* SSMT with Dropdown */}
              <div className="border border-black/10 rounded-xl overflow-hidden">
                <button 
                  onClick={() => {
                    setActiveTab('ssmt');
                    setSSMTOpen(!ssmatOpen);
                    setQTCyclesOpen(false);
                  }}
                  className={`w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors ${activeTab.startsWith('ssmt') ? 'bg-gray-50' : ''}`}
                >
                  <span className="font-medium text-lg">SSMT</span>
                  <span className="text-xl">{ssmatOpen ? '−' : '+'}</span>
                </button>
                {ssmatOpen && (
                  <div className="border-t border-black/10 bg-gray-50/50">
                    {['Dashed', 'Dotted', 'Solid', 'Blank'].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveTab(`ssmt-${sub.toLowerCase()}`)}
                        className={`w-full px-8 py-3 text-left hover:bg-gray-100 transition-colors text-black/70 ${activeTab === `ssmt-${sub.toLowerCase()}` ? 'bg-gray-100 text-black font-medium' : ''}`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quarterly Theory Cycles with Dropdown */}
              <div className="border border-black/10 rounded-xl overflow-hidden">
                <button 
                  onClick={() => {
                    setActiveTab('qt-cycles');
                    setQTCyclesOpen(!qtCyclesOpen);
                    setSSMTOpen(false);
                  }}
                  className={`w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors ${activeTab.startsWith('qt-cycles') ? 'bg-gray-50' : ''}`}
                >
                  <span className="font-medium text-lg">Quarterly Theory Cycles</span>
                  <span className="text-xl">{qtCyclesOpen ? '−' : '+'}</span>
                </button>
                {qtCyclesOpen && (
                  <div className="border-t border-black/10 bg-gray-50/50">
                    {['On Chart', 'Below Chart'].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveTab(`qt-cycles-${sub.toLowerCase().replace(/ /g, '-')}`)}
                        className={`w-full px-8 py-3 text-left hover:bg-gray-100 transition-colors text-black/70 ${activeTab === `qt-cycles-${sub.toLowerCase().replace(/ /g, '-')}` ? 'bg-gray-100 text-black font-medium' : ''}`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Tabs */}
              {['PSP', 'HTF PSP x SMT Candles', 'IFVG', 'Main Chart Candle SMT', 'Alerts'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab.toLowerCase().replace(/ /g, '-'));
                    setSSMTOpen(false);
                    setQTCyclesOpen(false);
                  }}
                  className={`w-full px-6 py-4 flex items-center justify-between text-left border border-black/10 rounded-xl hover:bg-gray-50 transition-colors ${activeTab === tab.toLowerCase().replace(/ /g, '-') ? 'bg-gray-50' : ''}`}
                >
                  <span className="font-medium text-lg">{tab}</span>
                  <span className="text-xl">→</span>
                </button>
              ))}
            </div>

            {/* Right Side - Display Area */}
            <div className="border border-black/10 rounded-2xl p-8 bg-gray-50/50 min-h-[500px] flex flex-col">
              <p className="font-bold text-lg mb-6">
                {activeTab === 'ssmt' && 'Sequential SMT Detection'}
                {activeTab === 'ssmt-dashed' && 'SSMT Dashed Style'}
                {activeTab === 'ssmt-dotted' && 'SSMT Dotted Style'}
                {activeTab === 'ssmt-solid' && 'SSMT Solid Style'}
                {activeTab === 'ssmt-blank' && 'SSMT Blank Style'}
                {activeTab === 'qt-cycles' && 'Quarterly Theory Cycles'}
                {activeTab === 'qt-cycles-on-chart' && 'QT Cycles - On Chart'}
                {activeTab === 'qt-cycles-below-chart' && 'QT Cycles - Below Chart'}
                {activeTab === 'psp' && 'PSP Detection'}
                {activeTab === 'htf-psp-x-smt-candles' && 'HTF PSP x SMT Candles'}
                {activeTab === 'ifvg' && 'IFVG Detection'}
                {activeTab === 'main-chart-candle-smt' && 'Main Chart Candle SMT'}
                {activeTab === 'alerts' && 'Custom Session and Candle Alerts'}
              </p>
              <div className="flex-1 bg-white rounded-xl border border-black/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📈</div>
                  <p className="text-black/40 text-sm">
                    {activeTab === 'ssmt' && 'Sequential SMT indicator preview'}
                    {activeTab === 'ssmt-dashed' && 'Dashed line style preview'}
                    {activeTab === 'ssmt-dotted' && 'Dotted line style preview'}
                    {activeTab === 'ssmt-solid' && 'Solid line style preview'}
                    {activeTab === 'ssmt-blank' && 'Blank style preview'}
                    {activeTab === 'qt-cycles' && 'Quarterly Theory Cycles overview'}
                    {activeTab === 'qt-cycles-on-chart' && 'Cycles displayed directly on chart'}
                    {activeTab === 'qt-cycles-below-chart' && 'Cycles displayed below chart'}
                    {activeTab === 'psp' && 'PSP indicator preview'}
                    {activeTab === 'htf-psp-x-smt-candles' && 'HTF PSP x SMT Candles preview'}
                    {activeTab === 'ifvg' && 'IFVG indicator preview'}
                    {activeTab === 'main-chart-candle-smt' && 'Main Chart Candle SMT preview'}
                    {activeTab === 'alerts' && 'Alerts configuration preview'}
                  </p>
                  <p className="text-black/30 text-xs mt-2">Your indicator image here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-black/60 mb-4">Features</p>
            <h2 className="text-5xl font-bold mb-6">Built for Clarity & Precision</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Aesthetic indicators that automate manual work while showcasing Quarterly Theory and SMT mechanics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: '⚡', title: 'Quarterly Theory Automation', description: 'Automatic quarterly shifts, key levels, and timing zones marked directly on your charts'},
              {icon: '🎯', title: 'SMT Divergence Detection', description: 'Real-time Smart Money Technique divergences across correlated assets, no manual comparison needed'},
              {icon: '✨', title: 'Aesthetic Design', description: 'Clean, minimal visuals that enhance analysis without cluttering your workspace'},
              {icon: '🔄', title: 'Multi-Timeframe Analysis', description: 'Seamlessly track higher timeframe structures while trading lower timeframes'},
              {icon: '⚙️', title: 'Customizable Settings', description: 'Adjust colors, sensitivity, and display options to match your trading style'},
              {icon: '📊', title: 'Works on All Assets', description: 'Futures, forex, crypto, stocks - trade your preferred markets with confidence'}
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-black/10 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-black/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-black/60 mb-4">Pricing</p>
            <h2 className="text-5xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-xl text-black/60">Full access to indicators and future updates</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Plan 1: Quarterly Theory x SMT */}
            <div className="bg-white rounded-2xl border-2 border-black/20 p-12 text-center hover:shadow-2xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">Quarterly Theory x SMT</h3>
                <p className="text-black/60">Essential indicators for QT & SMT</p>
              </div>
              
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">$50</div>
                <div className="text-black/60">per month</div>
              </div>

              <button className="w-full bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black/80 transition-colors mb-8">
                Get Started
              </button>

              <div className="space-y-4 text-left">
                {['Quarterly Theory indicator suite', 'SMT divergence detection', 'Works on all assets and timeframes', 'Private TradingView script access', 'Setup documentation', 'All future updates'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-black mt-1">✓</span>
                    <span className="text-black/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-black/10">
                <p className="text-sm text-black/60">14-day money-back guarantee</p>
              </div>
            </div>

            {/* Plan 2: Aura Complete */}
            <div className="bg-white rounded-2xl border-2 border-[#0437f2] p-12 text-center hover:shadow-2xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">Aura✧ Complete</h3>
                <p className="text-black/60">Everything you need to automate your analysis</p>
              </div>
              
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">$75</div>
                <div className="text-black/60">per month</div>
              </div>

              <button className="w-full bg-[#0437f2] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0437f2]/80 transition-colors mb-8">
                Get Started Now
              </button>

              <div className="space-y-4 text-left">
                {['Full Quarterly Theory indicator suite', 'SMT divergence detection across all triads', 'Works on all assets and timeframes', 'Private TradingView script access', 'Detailed setup documentation', 'Discord community access', 'All future indicator updates', 'Priority support'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-black mt-1">✓</span>
                    <span className="text-black/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-black/10">
                <p className="text-sm text-black/60">14-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-black/60 mb-4">FAQ</p>
            <h2 className="text-5xl font-bold">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {q: "Do I need to understand Quarterly Theory to use these indicators?", a: "While the indicators work best for traders familiar with Quarterly Theory and SMT concepts, we provide detailed documentation that explains how to use them. However, these are professional tools designed for traders who already trade these concepts manually."},
              {q: "Will these indicators work on my TradingView plan?", a: "Yes! Our indicators work on all TradingView plans (Free, Pro, Pro+, Premium). You just need a TradingView account to receive the private invite link."},
              {q: "Can I use these indicators on multiple devices?", a: "Absolutely. Once you have access, the indicators are tied to your TradingView account and work on any device where you are logged in."},
              {q: "What assets do these indicators work on?", a: "All assets - ES, NQ, YM, forex pairs, crypto, stocks, bonds, metals. The SMT functionality works across correlated pairs like ES/NQ/YM, 6E/6B/6J, GC/SI/HG, etc."}
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-lg pr-4">{faq.q}</span>
                  <span className="text-2xl flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="px-8 pb-6 text-black/70 leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Stop Marking Charts Manually.
            <br />
            Start Trading Smarter.
          </h2>
          <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto">
            Join traders who have automated their Quarterly Theory and SMT analysis with Aura✧
          </p>
          <button className="bg-[#0437f2] text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-[#0437f2]/80 transition-colors inline-flex items-center gap-3">
            Get Instant Access
            <span className="text-2xl">→</span>
          </button>
          <p className="text-sm text-black/50 mt-6">$75/month • Cancel anytime • 14-day guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold">No°</div>
            <div className="flex items-center gap-8">
              <a href="https://x.com/Nodgree" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-60 transition-opacity">@Nodgree</a>
              <a href="https://x.com/Auratrades_" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-60 transition-opacity">@Auratrades_</a>
              <a href="#" className="text-sm hover:opacity-60 transition-opacity">Terms</a>
              <a href="#" className="text-sm hover:opacity-60 transition-opacity">Privacy</a>
            </div>
            <div className="text-sm text-black/50">© 2025 Aura✧. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
