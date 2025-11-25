import ic_money_send from '../../../../public/svgs/ic_money_send.svg';
import ic_wallet_minus from '../../../../public/svgs/ic_wallet_minus.svg';
import base_logo from '../../../../public/brandkit/Base_lockup_white.svg';
import usdc_logo from '../../../../public/brandkit/usdc.svg';

export const cardsInfo = [
  {
    title: 'For Creators',
    details:
      'Convert your Frame tips, token rewards, and creator earnings from Farcaster into local currency you can actually spend.',
    icon: ic_money_send,
  },
  {
    title: 'For Builders',
    details:
      'Integrate offramp functionality into your dApp with our API. Enable your users to cash out their onchain earnings seamlessly.',
    icon: ic_wallet_minus,
  },
];

export const stats = [
  {
    number: '2',
    subtitle: 'countries',
    showFlag: true,
    flags: ['🇰🇪', '🇳🇬'], // Kenya and Nigeria flags
  },
  {
    number: 'KES & NGN',
    subtitle: 'currencies',
    showFlag: true,
    flags: ['🇰🇪', '🇳🇬'],
  },
  {
    number: '',
    subtitle: 'network',
    logo: base_logo,
    isLogo: true,
  },
  {
    number: '',
    subtitle: 'supported',
    logo: usdc_logo,
    isLogo: true,
  },
];

// For desktop
export const desktopHeaderPhrase = [
  'Built on Base Network',
  'for the Creator Economy',
];
export const desktopParagraphPhrase = [
  'Minisend leverages Base Network for fast, low-cost transactions.',
  'Join the growing ecosystem of creators and builders making crypto spendable.',
];

// For mobile
export const mobileHeaderPhrase = [
  'Built on Base Network',
  'for the Creator Economy',
];
export const mobileParagraphPhrase = [
  'Minisend leverages Base Network for fast,',
  'low-cost transactions. Join the growing',
  'ecosystem of creators and builders making',
  'crypto spendable.',
];
