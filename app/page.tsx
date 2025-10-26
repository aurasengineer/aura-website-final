'use client';

import { useState } from 'react';

export default function AuraWebsite() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl">Aura✧</div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm hover:opacity-60 transition-opacity">Features</a>
            <a href="#pricing" className="text-sm hover:opacity-60 transition-opacity">Pricing</a>
            <a href="https://twitter.com/Auratrades_" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-60 transition-opacity">Twitter</a>
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-colors">
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
          {"description": "ES - S&P 500", "proName": "FOREXCOM:SPXUSD"},
          {"description": "NQ - Nasdaq", "proName": "FOREXCOM:NSXUSD"},
          {"description": "YM - Dow Jones", "proName": "FOREXCOM:DJI"},
          {"description": "6E - Euro", "proName": "FX_IDC:EURUSD"},
          {"description": "6B - British Pound", "proName": "FX_IDC:GBPUSD"},
          {"description": "6J - Japanese Yen", "proName": "FX_IDC:USDJPY"},
          {"description": "6S - Swiss Franc", "proName": "FX_IDC:USDCHF"},
          {"description": "6A - Australian Dollar", "proName": "FX_IDC:AUDUSD"},
          {"description": "GC - Gold", "proName": "TVC:GOLD"},
          {"description": "SI - Silver", "proName": "TVC:SILVER"},
          {"description": "BTC - Bitcoin", "proName": "BINANCE:BTCUSDT"},
          {"description": "ETH - Ethereum", "proName": "BINANCE:ETHUSDT"},
          {"description": "SOL - Solana", "proName": "BINANCE:SOLUSDT"}
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "en",
        "speed": 2
      }
      </script>
    </div>
  `
}} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center mt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-black/60 mb-6">Professional TradingView Indicators</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Quarterly Theory & SMT
            <br />
            Automated...
          </h1>
          <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop manually marking charts… Aura&apos;s indicators automate Quarterly Theory and Smart Money Technique concepts with clean, aesthetic visuals that enhance your analysis…
          </p>
          
          <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-black/80 transition-colors inline-flex items-center gap-2">
            Get Instant Access
            <span>→</span>
          </button>
          <p className="text-sm text-black/50 mt-4">Join traders automating their edge</p>
        </div>

        {/* Chart Preview */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-black/10 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-xl border border-black/10 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-black/40 text-sm">TradingView Chart Preview</p>
                <p className="text-black/30 text-xs mt-2">Your indicators in action</p>
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
            <h2 className="text-5xl font-bold mb-6">One Simple Price</h2>
            <p className="text-xl text-black/60">Full access to all indicators and future updates</p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl border-2 border-black p-12 text-center hover:shadow-2xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">Aura✧ Complete</h3>
                <p className="text-black/60">Everything you need to automate your analysis</p>
              </div>
              
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">$75</div>
                <div className="text-black/60">per month</div>
              </div>

              <button className="w-full bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black/80 transition-colors mb-8">
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
          <button className="bg-black text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-black/80 transition-colors inline-flex items-center gap-3">
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
            <div className="text-2xl font-bold">Aura✧</div>
            <div className="flex items-center gap-8">
              <a href="https://twitter.com/Auratrades_" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-60 transition-opacity">Twitter</a>
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
