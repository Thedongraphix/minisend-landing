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
    description: 'Convert your USDC to local currency instantly on Base app. Built for creators and builders in Kenya, Nigeria, and Ghana.',
    images: {
      url: 'https://minisend.xyz/brandkit/minisend-logo.png',
      alt: 'Minisend - Convert USDC to local currency',
    },
  },

  manifest: '/site.webmanifest',

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brandkit/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/brandkit/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', rel: 'icon' },
      { url: '/brandkit/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', rel: 'icon' },
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
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Convert your USDC to local currency instantly on Base app. Over $120k processed. Built for creators and builders in Kenya, Nigeria, and Ghana." />
        <meta name="keywords" content="USDC, USDC to fiat, crypto offramp, crypto to cash, Base app, Base chain, Base, Base network, Kenya crypto, Nigeria crypto, Ghana crypto, M-Pesa, crypto conversion, onchain earnings, USDC Kenya, USDC Nigeria, USDC Ghana, cryptocurrency exchange, stablecoin to fiat, Base wallet, web3 payments, DeFi offramp, African crypto" />
        <meta name="author" content="Minisend" />
        <meta name="publisher" content="Minisend" />
        <meta name="application-name" content="Minisend" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="background-color" content="#ffffff" />
        <meta name="display" content="standalone" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Minisend" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Minisend" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Minisend" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Minisend" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Minisend" />

        <link rel="canonical" href="https://minisend.xyz" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/brandkit/android-chrome-512x512.png" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

      </head>
      <body>
        <StructuredData />
        <FAQStructuredData />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
