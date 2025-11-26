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
      'Minisend converts your USDC to local currency (KES or NGN) instantly. Simply connect your wallet, enter the amount, and provide your M-Pesa number or bank account details. Funds are delivered within minutes.',
  },
  {
    question: 'Which countries does Minisend support?',
    answer:
      'We currently support Kenya (M-Pesa) and Nigeria (bank transfers). We are actively expanding to more African markets to serve more creators and builders.',
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
];
