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
      'Connect your wallet on Base app, enter USDC amount, provide M-Pesa or bank details, and receive KES, NGN, or GHS in minutes.',
  },
  {
    question: 'Which countries does Minisend support?',
    answer:
      'Kenya (M-Pesa), Nigeria (bank transfers), and Ghana (bank transfers).',
  },
  {
    question: 'What are the fees?',
    answer:
      'Competitive fees with real-time rates. All Base transactions are gasless.',
  },
  {
    question: 'Is Minisend secure?',
    answer:
      'Yes. Built on Base with enterprise-grade security and real-time monitoring.',
  },
  {
    question: 'How do I access Minisend?',
    answer:
      'Open Base app and search for Minisend, or visit app.minisend.xyz. Also available on Farcaster.',
  },
  {
    question: 'How long to receive funds?',
    answer:
      'M-Pesa (Kenya): ~10 seconds. Bank transfers (Nigeria & Ghana): 5-30 minutes.',
  },
];
