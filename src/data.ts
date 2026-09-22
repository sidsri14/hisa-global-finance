import { StockAsset, VideoScene, FundingStep } from './types'

export const STOCKS_DATA: StockAsset[] = [
  { symbol: 'NVDA', name: 'NVIDIA Corporation', market: 'US', price: 132.50, change24h: 3.8, category: 'Tech', logo: '🟢' },
  { symbol: 'AAPL', name: 'Apple Inc.', market: 'US', price: 228.20, change24h: 1.2, category: 'Tech', logo: '🍎' },
  { symbol: 'TSLA', name: 'Tesla, Inc.', market: 'US', price: 245.80, change24h: -0.9, category: 'Tech', logo: '⚡' },
  { symbol: 'VOO', name: 'Vanguard S&P 500 ETF', market: 'US', price: 512.40, change24h: 0.8, category: 'Index', logo: '📈' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', market: 'US', price: 440.10, change24h: 1.5, category: 'Tech', logo: '💻' },
  { symbol: 'DANGCEM', name: 'Dangote Cement Plc', market: 'NG', price: 0.42, change24h: 2.1, category: 'Energy', logo: '🏭' },
  { symbol: 'GTCO', name: 'Guaranty Trust Holding', market: 'NG', price: 0.035, change24h: 4.5, category: 'Banking', logo: '🏦' },
  { symbol: 'MTNN', name: 'MTN Nigeria Communications', market: 'NG', price: 0.14, change24h: -0.4, category: 'Tech', logo: '📱' }
]

export const FUNDING_STEPS: FundingStep[] = [
  {
    step: 1,
    title: 'Open Hisa & Navigate to Wallet',
    subtitle: 'Select "Deposit via Stablecoins"',
    details: 'Log into the Hisa App (iOS, Android, or Web). Go to your Wallet balance tab and tap "Deposit Crypto".',
    tokenSupport: ['USDC (Solana / Polygon / Base)', 'USDT (TRC20 / ERC20)']
  },
  {
    step: 2,
    title: 'Generate Unique Deposit Address',
    subtitle: 'Zero Slippage 1:1 USD Credit',
    details: 'Select your preferred chain (e.g. Solana for sub-penny fees and 400ms finality). Copy your personalized deposit address or scan the QR code.',
    tokenSupport: ['Solana Pay', 'Instant Confirmation']
  },
  {
    step: 3,
    title: 'Instant 1:1 USD Balance Credit',
    subtitle: 'Zero Bank FX Friction',
    details: 'As soon as the on-chain transaction confirms, your Hisa account is credited in USD buying power with flat 1% trading fees and zero bank wire markups.',
    tokenSupport: ['100% Reserve Backed', 'FDIC-Insured US Custody']
  },
  {
    step: 4,
    title: 'Invest in US & Nigerian Equities',
    subtitle: 'Fractional Shares Starting at $1',
    details: 'Search for any global stock (Nvidia, Apple, S&P 500 ETF, or Nigerian giants). Enter any amount from $1 upwards and execute in 1 click.',
    tokenSupport: ['Fractional Shares', 'Real-time Market Orders']
  }
]

export const VIDEO_STORYBOARD: VideoScene[] = [
  {
    sceneNumber: 1,
    title: 'The Problem: FX Restrictions & Inflation',
    durationSeconds: 15,
    visualCue: 'Dynamic shot of traditional banking wire fee screen ($45 fee + 5-day wait) transitioning into a smooth smartphone with Hisa app.',
    narrationScript: 'Ever tried investing in Apple, Nvidia, or the S&P 500 from Nigeria or anywhere in the diaspora, only to be hit with high FX fees and bank limits? Meet Hisa.',
    onScreenText: 'Traditional Banks: 5-Day Wait & Heavy FX Fees ❌\nHisa: Instant & Global Access ✅'
  },
  {
    sceneNumber: 2,
    title: 'What Are Stablecoins & Why They Matter',
    durationSeconds: 20,
    visualCue: 'Animated 3D graphic showing $1 USDC = $1 US Dollar, pegged 1:1 to audited US reserves.',
    narrationScript: 'Stablecoins like USDC and USDT are digital dollars that live on high-speed blockchains. They protect your wealth against local currency devaluation and move money across borders in seconds with almost zero fees.',
    onScreenText: 'Stablecoins = Digital Dollars 💵\n1 USDC = 1 USD (1:1 Pegged)'
  },
  {
    sceneNumber: 3,
    title: 'Live Walkthrough: Funding Your Hisa Wallet',
    durationSeconds: 30,
    visualCue: 'Split screen showing Phantom/Trust Wallet sending USDC to Hisa deposit address. Counter ticks: Confirmed in 1.2 seconds.',
    narrationScript: 'Funding your Hisa account with crypto takes less than 60 seconds. Open your Hisa wallet, tap "Deposit Crypto", select USDC or USDT, and send from your self-custody wallet. Your account is credited instantly with USD buying power.',
    onScreenText: 'Step 1: Tap Deposit Crypto\nStep 2: Send USDC / USDT\nStep 3: Instant USD Buying Power!'
  },
  {
    sceneNumber: 4,
    title: 'Buying Fractional Shares & Low Fees',
    durationSeconds: 25,
    visualCue: 'Screen recording tapping $10 into Nvidia (NVDA), instant order filled notification with confetti.',
    narrationScript: 'Now the best part: You don\'t need thousands of dollars. You can start buying fractional shares of top US and Nigerian stocks with as little as $1, backed by a flat 1% transparent fee.',
    onScreenText: 'Start with just $1 🚀\nFlat 1% Fee • Real Stocks • Global Wealth'
  },
  {
    sceneNumber: 5,
    title: 'Call to Action & Social Handles',
    durationSeconds: 15,
    visualCue: 'Hisa logo animation with download links and Superteam Nigeria badge.',
    narrationScript: 'Take control of your financial future today. Download the Hisa App, fund with stablecoins, and build your global stock portfolio. Follow @hisanigeria and @superteamng!',
    onScreenText: '📲 Download Hisa Today\nTag @hisanigeria & @superteamng'
  }
]
