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
    subtitle: 'currencies',
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
  'Built on Base',
  'for the Creator Economy',
];
export const desktopParagraphPhrase = [
  'Available on Farcaster and Base app. Fast, low-cost transactions',
  'for creators and builders making crypto spendable.',
];

// For mobile
export const mobileHeaderPhrase = [
  'Built on Base',
  'for the Creator Economy',
];
export const mobileParagraphPhrase = [
  'Available on Farcaster and Base app.',
  'Fast, low-cost transactions for creators',
  'and builders making crypto spendable.',
];
