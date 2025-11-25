
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// Volume Stats
export const volumeStats = [
  {
    number: '$100K+',
    subtitle: 'volume',
  },
  {
    number: '1K+',
    subtitle: 'users',
  },
  {
    number: '3K+',
    subtitle: 'transactions on Base',
  },
];

// For desktop
export const desktopHeaderPhrase = ['Making Crypto', 'Truly Spendable'];
export const desktopParagraphPhrase = [
  'Your onchain earnings should work in the real world.',
  'Minisend makes it simple to convert and spend your USDC locally.',
];
export const desktopBriefNotePhrase = [
  'Instant settlements,',
  'transparent fees, and',
  'real-time tracking, all',
  'on Base.',
];

// For mobile
export const mobileHeaderPhrase = ['Making Crypto', 'Truly Spendable'];
export const mobileParagraphPhrase = [
  'Your onchain earnings should work in the real',
  'world. Minisend makes it simple to convert and',
  'spend your USDC locally.',
];

export const mobileBriefNotePhrase = [
  'Instant',
  'settlements,',
  'transparent',
  'fees, and',
  'real-time',
  'tracking, all',
  'on Base.',
];

export const edges = [
  {
    point: 'Kenya: M-Pesa',
    details:
      'Convert USDC to Kenyan Shillings with instant delivery to Safaricom and Airtel Money mobile wallets.',
    icon: ic_banknotes,
  },
  {
    point: 'Nigeria: Bank Transfer',
    details:
      'Convert USDC to Nigerian Naira with same-day settlement to all major Nigerian banks.',
    icon: ic_circle_stack,
  },
  {
    point: 'Expanding Globally',
    details:
      'Starting in Kenya and Nigeria, with plans to expand to more African markets and beyond.',
    icon: ic_arrows_left_right,
  },
];
