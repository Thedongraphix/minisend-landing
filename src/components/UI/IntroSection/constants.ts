import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ['Seamless USDC to Fiat', 'Conversion'];
export const desktopParagraphPhrase = [
  'Minisend bridges the gap between crypto and everyday spending.',
  'Convert USDC to KES or NGN and receive funds directly to',
  'M-Pesa or your bank account.',
];

// For mobile
export const mobileHeaderPhrase = ['Seamless USDC', 'to Fiat Conversion'];
export const mobileParagraphPhrase = [
  'Minisend bridges the gap between crypto and',
  'everyday spending. Convert USDC to KES or NGN',
  'and receive funds directly to M-Pesa or your',
  'bank account.',
];

export const edges = [
  {
    point: 'Multi-Currency Support',
    details:
      'Convert USDC to Kenyan Shillings (KES) via M-Pesa or Nigerian Naira (NGN) via bank transfer with competitive exchange rates.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Built on Base',
    details:
      'Leveraging Base Network for fast, low-cost transactions with gasless conversions for seamless user experience.',
    icon: ic_identification,
  },
  {
    point: 'Secure & Transparent',
    details:
      'Real-time transaction monitoring with transparent fee structure. Your funds are protected with enterprise-grade security.',
    icon: ic_lock_closed,
  },
];
