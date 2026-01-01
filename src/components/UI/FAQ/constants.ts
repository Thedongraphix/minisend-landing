type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How does Minisend work?',
    answer:
      'Minisend converts your USDC to local currency (KES, NGN, or GHS) instantly on Base app. Simply connect your wallet, enter the amount, and provide your M-Pesa number or bank account details. Funds are delivered within minutes.',
  },
  {
    question: 'Which countries does Minisend support?',
    answer:
      'We currently support Kenya (M-Pesa), Nigeria (bank transfers), and Ghana (bank transfers). Available directly on Base app, making it easy for African creators and builders to access their onchain earnings.',
  },
  {
    question: 'What are the fees for conversions?',
    answer:
      'Minisend charges transparent, competitive fees with real-time exchange rates. Transactions on Base are gasless, meaning no blockchain fees for users.',
  },
  {
    question: 'Is Minisend secure?',
    answer:
      'Yes. Minisend is built on Base with enterprise-grade security. We use OnchainKit for wallet connections and provide real-time transaction monitoring. Your funds and data are protected throughout the conversion process.',
  },
  {
    question: 'How can I convert USDC to KES using Minisend?',
    answer:
      'To convert USDC to Kenyan Shillings, open Base app and find Minisend, or visit app.minisend.xyz. Connect your wallet containing USDC on Base chain, enter the amount, provide your M-Pesa number, and confirm. Funds arrive in minutes.',
  },
  {
    question: 'How do I access Minisend on Base app?',
    answer:
      'Minisend is live on Base app - the primary way to access our service. Simply open Base app, search for Minisend, and start converting your USDC to local currency instantly. We are also available as a Farcaster miniapp.',
  },
  {
    question: 'What is the minimum amount I can convert?',
    answer:
      'Minisend supports conversions starting from small amounts to make crypto accessible for everyone. Check the app for current minimum conversion limits for your country.',
  },
  {
    question: 'How long does it take to receive funds?',
    answer:
      'For M-Pesa in Kenya, funds typically arrive within 2-5 minutes. For bank transfers in Nigeria and Ghana, delivery takes 5-30 minutes depending on the bank. All transactions are processed in near real-time on the Base chain.',
  },
];
