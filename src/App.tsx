import { useState } from 'react'
import { 
  DollarSign, 
  Video, 
  Copy, 
  Check, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  PieChart, 
  Sparkles,
  Play,
  RotateCcw
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { STOCKS_DATA, FUNDING_STEPS, VIDEO_STORYBOARD } from './data'
import { StockAsset, VideoScene } from './types'

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'storyboard' | 'stablecoins' | 'fees'>('simulator')
  const [depositAmount, setDepositAmount] = useState<number>(100)
  const [selectedToken, setSelectedToken] = useState<'USDC' | 'USDT'>('USDC')
  const [selectedStock, setSelectedStock] = useState<StockAsset>(STOCKS_DATA[0])
  const [investmentAmount, setInvestmentAmount] = useState<number>(50)
  const [isOrderExecuted, setIsOrderExecuted] = useState<boolean>(false)
  const [copiedScript, setCopiedScript] = useState<boolean>(false)
  const [activeScene, setActiveScene] = useState<VideoScene>(VIDEO_STORYBOARD[0])

  const handleExecuteTrade = () => {
    setIsOrderExecuted(true)
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    })
  }

  const handleCopyFullScript = () => {
    const fullText = VIDEO_STORYBOARD.map(
      (s) => `[SCENE ${s.sceneNumber}: ${s.title} (${s.durationSeconds}s)]\nVisual: ${s.visualCue}\nOn-Screen Text: ${s.onScreenText}\nNarration: "${s.narrationScript}"\n`
    ).join('\n---\n\n')

    navigator.clipboard.writeText(fullText)
    setCopiedScript(true)
    confetti({ particleCount: 40, spread: 50 })
    setTimeout(() => setCopiedScript(false), 2500)
  }

  const fractionalShares = (investmentAmount / selectedStock.price).toFixed(4)
  const tradingFee = (investmentAmount * 0.01).toFixed(2)

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-white/10 glass-panel sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl hisa-gradient flex items-center justify-center font-black text-2xl shadow-lg shadow-emerald-600/30">
              📈
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                  Hisa <span className="text-emerald-400">Global Equities</span>
                </h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  $5,000 Video Bounty Suite
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span>Invest in US & Nigerian Stocks via Stablecoins</span>
                <span>•</span>
                <span className="text-emerald-400 font-mono">1% Flat Fee • $1 Min</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyFullScript}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl hisa-gradient hover:opacity-90 transition text-xs font-bold text-white shadow-lg shadow-emerald-500/20"
            >
              {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-200" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedScript ? 'Script Copied!' : 'Export Video Script'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hisa × Superteam Nigeria — Video Explainer Master Portal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              From <span className="text-emerald-400">Crypto Stablecoins</span> to <span className="text-gradient">Wall Street Stocks</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Discover how Hisa enables anyone in Nigeria and the diaspora to deposit USDC or USDT and buy fractional shares of Apple, Nvidia, and the S&P 500 starting with just $1.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-emerald-400">$1 Min</div>
                <div className="text-xs text-slate-400 font-medium">Fractional Investing</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-amber-400">1% Flat</div>
                <div className="text-xs text-slate-400 font-medium">Zero Hidden FX Fees</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-sky-400">USDC / USDT</div>
                <div className="text-xs text-slate-400 font-medium">Stablecoin Rail</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-purple-400">$5,000</div>
                <div className="text-xs text-slate-400 font-medium">Prize Pool (Sept 30)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'simulator' 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Interactive Funding & Stock Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('storyboard')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'storyboard' 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>5-Scene Video Storyboard (1–3 min)</span>
          </button>
          <button
            onClick={() => setActiveTab('stablecoins')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'stablecoins' 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Why Stablecoins? (Educational)</span>
          </button>
          <button
            onClick={() => setActiveTab('fees')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'fees' 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <PieChart className="w-4 h-4" />
            <span>Fee Comparison & Economics</span>
          </button>
        </div>

        {/* TAB 1: Simulator */}
        {activeTab === 'simulator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Step 1 & 2: Deposit Simulator */}
            <div className="lg:col-span-6 space-y-6">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">1</span>
                    <h3 className="text-lg font-bold text-white">Deposit Crypto Stablecoin</h3>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">Instant 1:1 USD</span>
                </div>

                <div>
                  <label className="text-xs text-slate-400 font-medium mb-2 block">Choose Deposit Stablecoin:</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedToken('USDC')}
                      className={`p-3.5 rounded-xl border text-left transition ${
                        selectedToken === 'USDC'
                          ? 'bg-emerald-950/50 border-emerald-500/60 text-white ring-1 ring-emerald-500/30'
                          : 'glass-card border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-sm">USDC (USD Coin)</div>
                      <div className="text-[10px] text-slate-400">Solana / Base / Polygon</div>
                    </button>
                    <button
                      onClick={() => setSelectedToken('USDT')}
                      className={`p-3.5 rounded-xl border text-left transition ${
                        selectedToken === 'USDT'
                          ? 'bg-emerald-950/50 border-emerald-500/60 text-white ring-1 ring-emerald-500/30'
                          : 'glass-card border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-sm">USDT (Tether)</div>
                      <div className="text-[10px] text-slate-400">TRC20 / ERC20</div>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Deposit Amount:</span>
                    <span className="font-mono text-white font-bold">${depositAmount} {selectedToken}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>$10</span>
                    <span>$250</span>
                    <span>$500</span>
                    <span>$1,000</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Network Fee (Solana):</span>
                    <span className="text-emerald-400 font-mono">&lt; $0.001</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Credited USD Buying Power:</span>
                    <span className="text-white font-mono font-bold">${depositAmount}.00 USD</span>
                  </div>
                </div>
              </div>

              {/* 4-Step Walkthrough Cards */}
              <div className="space-y-3">
                {FUNDING_STEPS.map((fs) => (
                  <div key={fs.step} className="glass-card p-4 rounded-2xl border border-white/5 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      {fs.step}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{fs.title}</div>
                      <div className="text-[11px] text-slate-400">{fs.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Stock Fractional Buying Terminal */}
            <div className="lg:col-span-6 space-y-6">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">2</span>
                    <h3 className="text-lg font-bold text-white">Buy Fractional Equities</h3>
                  </div>
                  <span className="text-xs text-amber-400 font-mono">Starting at $1</span>
                </div>

                {/* Stock Selector Grid */}
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-2 block">Select Global Asset:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {STOCKS_DATA.map((stk) => (
                      <button
                        key={stk.symbol}
                        onClick={() => {
                          setSelectedStock(stk)
                          setIsOrderExecuted(false)
                        }}
                        className={`p-3 rounded-xl border text-left transition ${
                          selectedStock.symbol === stk.symbol
                            ? 'bg-emerald-950/60 border-emerald-500 text-white'
                            : 'glass-card border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="text-base mb-1">{stk.logo}</div>
                        <div className="font-bold text-xs text-white">{stk.symbol}</div>
                        <div className="text-[10px] text-slate-400 font-mono">${stk.price}</div>
                        <div className={`text-[10px] font-semibold ${stk.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {stk.change24h >= 0 ? '+' : ''}{stk.change24h}%
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Investment Amount (USD):</span>
                    <span className="font-mono text-emerald-400 font-bold">${investmentAmount} USD</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={depositAmount}
                    value={investmentAmount}
                    onChange={(e) => {
                      setInvestmentAmount(Number(e.target.value))
                      setIsOrderExecuted(false)
                    }}
                    className="w-full accent-emerald-500"
                  />
                </div>

                {/* Order Summary */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Target Stock:</span>
                    <span className="font-bold text-white">{selectedStock.name} ({selectedStock.symbol})</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Fractional Shares Purchased:</span>
                    <span className="font-mono text-emerald-300 font-bold">{fractionalShares} {selectedStock.symbol}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Hisa Trading Fee (1% flat):</span>
                    <span className="font-mono text-slate-300">${tradingFee}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Settlement:</span>
                    <span className="text-sky-300">Instant Fractional Allocation</span>
                  </div>
                </div>

                {/* Buy Button */}
                <button
                  onClick={handleExecuteTrade}
                  className="w-full py-4 rounded-2xl hisa-gradient text-sm font-black text-white shadow-xl shadow-emerald-600/30 hover:opacity-95 transition flex items-center justify-center gap-2"
                >
                  <DollarSign className="w-5 h-5" />
                  <span>Execute Order: Buy ${investmentAmount} of {selectedStock.symbol}</span>
                </button>

                {isOrderExecuted && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">✓</div>
                      <div>
                        <div className="font-bold text-xs text-white">Order Filled Successfully!</div>
                        <div className="text-[11px] text-emerald-300 font-mono">
                          Allocated {fractionalShares} shares of {selectedStock.symbol} to your portfolio.
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOrderExecuted(false)}
                      className="text-xs text-slate-400 hover:text-white p-1"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 5-Scene Storyboard */}
        {activeTab === 'storyboard' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Video className="w-5 h-5 text-emerald-400" />
                  Hisa Video Explainer Storyboard (1-3 Minutes)
                </h3>
                <p className="text-xs text-slate-400">Designed for Instagram, X (Twitter), and TikTok submissions for @hisanigeria & @superteamng.</p>
              </div>
              <button
                onClick={handleCopyFullScript}
                className="px-4 py-2 rounded-xl hisa-gradient text-xs font-bold text-white shadow-lg shadow-emerald-500/20 flex items-center gap-2"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Script for Teleprompter</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Scene Timeline Selector */}
              <div className="lg:col-span-4 space-y-3">
                {VIDEO_STORYBOARD.map((scene) => (
                  <div
                    key={scene.sceneNumber}
                    onClick={() => setActiveScene(scene)}
                    className={`p-4 rounded-2xl cursor-pointer transition border ${
                      activeScene.sceneNumber === scene.sceneNumber
                        ? 'bg-emerald-950/60 border-emerald-500 shadow-lg ring-1 ring-emerald-500/40'
                        : 'glass-card border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emerald-400">Scene {scene.sceneNumber}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                        {scene.durationSeconds}s
                      </span>
                    </div>
                    <div className="font-bold text-sm text-white mb-1">{scene.title}</div>
                    <div className="text-xs text-slate-400 line-clamp-2">{scene.narrationScript}</div>
                  </div>
                ))}
              </div>

              {/* Scene Deep-Dive Card */}
              <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Scene {activeScene.sceneNumber} Breakdown</span>
                    <h4 className="text-2xl font-black text-white">{activeScene.title}</h4>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ⏱ {activeScene.durationSeconds} Seconds
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-2xl">
                    <div className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" /> Visual Cue / On-Screen Action:
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">{activeScene.visualCue}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/70 border border-emerald-500/30 space-y-2">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5" /> Voiceover Narration Script:
                    </div>
                    <p className="text-base text-white font-medium italic leading-relaxed">
                      "{activeScene.narrationScript}"
                    </p>
                  </div>

                  <div className="glass-card p-4 rounded-2xl">
                    <div className="text-xs font-bold text-sky-400 mb-1">On-Screen Text Overlay:</div>
                    <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap">{activeScene.onScreenText}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Why Stablecoins */}
        {activeTab === 'stablecoins' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Why Stablecoins are the Future of Global Wealth in Africa
              </h3>
              <p className="text-xs text-slate-400">Breaking down the technology powering Hisa's seamless investment rails.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl space-y-3 border border-emerald-500/20">
                <div className="text-3xl">🛡</div>
                <h4 className="font-bold text-white text-base">Hedge Against Currency Devaluation</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Holding local currency during high inflation degrades purchasing power. Stablecoins (USDC/USDT) allow investors to instantly store value in digital US dollars with 1:1 asset backing.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-3 border border-sky-500/20">
                <div className="text-3xl">⚡</div>
                <h4 className="font-bold text-white text-base">Bypass Restrictive FX Wire Limits</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Traditional bank wire transfers from Africa to US brokers incur $35–$50 wire fees, 3-5% exchange markups, and multiple days of delay. Stablecoins settle in under 2 seconds for a fraction of a cent.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-3 border border-amber-500/20">
                <div className="text-3xl">🌍</div>
                <h4 className="font-bold text-white text-base">Democratized Fractional Equities</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  By bridging high-speed crypto rails with institutional US broker-dealers, Hisa makes single-dollar fractional ownership accessible to every student, builder, and investor across Africa.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Fees */}
        {activeTab === 'fees' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">Transparent Fee Comparison</h3>
              <p className="text-xs text-slate-400">Comparing Traditional Bank International Brokerage vs Hisa Stablecoin Rail.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-white/5 text-slate-300 uppercase font-bold">
                  <tr>
                    <th className="p-4 rounded-l-xl">Feature</th>
                    <th className="p-4 text-red-400">Traditional Bank & Foreign Broker</th>
                    <th className="p-4 rounded-r-xl text-emerald-400">Hisa with Stablecoins</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-4 font-semibold text-white">Deposit Fee</td>
                    <td className="p-4 text-slate-400">$30 – $50 Wire Fee</td>
                    <td className="p-4 text-emerald-400 font-bold">&lt; $0.01 on Solana</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">FX Spread Markup</td>
                    <td className="p-4 text-slate-400">3% – 6% Bank Spread</td>
                    <td className="p-4 text-emerald-400 font-bold">0% (1:1 Pegged)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Minimum Investment</td>
                    <td className="p-4 text-slate-400">$500 – $1,000</td>
                    <td className="p-4 text-emerald-400 font-bold">$1.00 USD</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Trading Commission</td>
                    <td className="p-4 text-slate-400">$4.95 – $9.95 per trade</td>
                    <td className="p-4 text-emerald-400 font-bold">1% Flat Fee</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Settlement Speed</td>
                    <td className="p-4 text-slate-400">3 to 5 Business Days</td>
                    <td className="p-4 text-emerald-400 font-bold">Instant (Seconds)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-panel py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>Built for <strong>Hisa Nigeria</strong> & <strong>Superteam Nigeria</strong> ($5,000 USDG Bounty)</div>
          <div className="flex items-center gap-3">
            <span>Tags: @hisanigeria • @superteamng</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
