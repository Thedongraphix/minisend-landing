import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minisend - Onchain earnings truly spendable',
  description: 'Convert your USDC to local currency instantly. Available on Farcaster and Base app. Built for creators and builders.',
  keywords: ['USDC', 'crypto', 'fiat', 'offramp', 'Base', 'Base chain', 'Farcaster', 'Kenya', 'Nigeria', 'M-Pesa', 'crypto conversion', 'onchain earnings'],
  authors: [{ name: 'Minisend' }],
  creator: 'Minisend',
  publisher: 'Minisend',
  applicationName: 'Minisend',
  metadataBase: new URL('https://minisend.xyz'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://minisend.xyz',
    siteName: 'Minisend',
    title: 'Minisend - Onchain earnings truly spendable',
    description: 'Convert your USDC to local currency instantly. Available on Farcaster and Base app. Support for Kenya (M-Pesa) and Nigeria (Bank transfers).',
    images: [
      {
        url: '/brandkit/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Minisend Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Minisend - Onchain earnings truly spendable',
    description: 'Convert your USDC to local currency instantly. Available on Farcaster and Base app.',
    creator: '@minisendapp',
    images: ['/brandkit/android-chrome-512x512.png'],
  },

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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
