import seamless_payments from '../../../../public/images/seamless_payments.png';
import smart_investing from '../../../../public/images/smart_investing.png';
import wealth_management from '../../../../public/images/wealth_management.png';
import financial_planning from '../../../../public/images/financial_planning.png';
// For desktop
export const desktopHeaderPhrases = [
  'Built for Creators',
  'and Builders',
];
export const desktopParagraphPhrase = [
  'Minisend empowers Base builders and the Farcaster creator economy',
  'with instant crypto-to-fiat infrastructure. Turn your earnings into spendable cash.',
];

// For mobile
export const mobileParagraphPhrase = [
  'Minisend empowers Base builders and the',
  'Farcaster creator economy with instant',
  'crypto-to-fiat infrastructure. Turn your earnings',
  'into spendable cash.',
];

export const offers = [
  {
    illustration: seamless_payments,
    title: 'Instant Conversions',
    details:
      'Convert USDC to local currency in seconds with near-instant settlement to M-Pesa or bank accounts.',
  },
  {
    illustration: smart_investing,
    title: 'Base App Native',
    details:
      'Access Minisend directly on Base app - your primary gateway to convert USDC earnings. Also available on Farcaster for Frame tips and creator earnings.',
  },
  {
    illustration: wealth_management,
    title: 'Developer Friendly',
    details:
      'Integrate offramp functionality into your dApp with our RESTful API and comprehensive documentation.',
  },
  {
    illustration: financial_planning,
    title: 'Low Fees',
    details:
      'Transparent pricing with competitive exchange rates and gasless transactions on Base.',
  },
];
