import Layout from '@/components/Layout';
import { StructuredData, FAQStructuredData } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Minisend - Onchain earnings truly spendable',
    template: '%s | Minisend',
  },
  description: 'Convert your USDC to local currency instantly on Base app. Over $120k processed. Built for creators and builders in Kenya, Nigeria, and Ghana.',
  keywords: [
    'USDC',
    'USDC to fiat',
    'crypto offramp',
    'crypto to cash',
    'Base app',
    'Base chain',
    'Base',
    'Base network',
    'Kenya crypto',
    'Nigeria crypto',
    'Ghana crypto',
    'M-Pesa',
    'crypto conversion',
    'onchain earnings',
    'USDC Kenya',
    'USDC Nigeria',
    'USDC Ghana',
    'cryptocurrency exchange',
    'stablecoin to fiat',
    'Base wallet',
    'web3 payments',
    'DeFi offramp',
    'African crypto',
  ],
  authors: [{ name: 'Minisend', url: 'https://minisend.xyz' }],
  creator: 'Minisend',
  publisher: 'Minisend',
  applicationName: 'Minisend',
  metadataBase: new URL('https://minisend.xyz'),
  alternates: {
    canonical: 'https://minisend.xyz',
  },
  category: 'Finance',
  classification: 'Financial Technology',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://minisend.xyz',
    siteName: 'Minisend',
    title: 'Minisend - Onchain earnings truly spendable',
    description: 'Convert your USDC to local currency instantly on Base app. Over $120k processed. Support for Kenya (M-Pesa), Nigeria, and Ghana.',
    images: [
      {
        url: 'https://minisend.xyz/brandkit/minisend-logo.png',
        width: 1200,
        height: 630,
        alt: 'Minisend - Convert USDC to local currency',
        type: 'image/png',
      },
      {
        url: 'https://minisend.xyz/brandkit/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Minisend Logo',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@minisendapp',
    creator: '@minisendapp',
    title: 'Minisend - Onchain earnings truly spendable',
    description: 'Convert your USDC to local currency instantly on Base app. Over $120k processed. Support for Kenya, Nigeria, and Ghana.',
    images: {
      url: 'https://minisend.xyz/brandkit/minisend-logo.png',
      alt: 'Minisend - Convert USDC to local currency',
    },
  },

  manifest: '/site.webmanifest',

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/brandkit/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/brandkit/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    // Add your verification tokens here when available
    // google: 'your-google-verification-token',
    // yandex: 'your-yandex-verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <FAQStructuredData />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
