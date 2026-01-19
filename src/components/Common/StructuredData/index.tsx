/**
 * Structured Data (JSON-LD) component for SEO
 * This is critical for Google to display the logo in search results
 * Using regular script tags (not Next.js Script) for server-side rendering
 */
export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Minisend',
    url: 'https://minisend.xyz',
    logo: {
      '@type': 'ImageObject',
      url: 'https://minisend.xyz/brandkit/android-chrome-512x512.png',
      width: 512,
      height: 512,
      contentUrl: 'https://minisend.xyz/brandkit/android-chrome-512x512.png',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://minisend.xyz/brandkit/android-chrome-512x512.png',
      width: 512,
      height: 512,
    },
    description: 'Convert your USDC to local currency instantly on Base app. Built for creators and builders in Kenya, Nigeria, and Ghana.',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/minisendapp',
      'https://base.app/app/app.minisend.xyz',
      'https://www.base.org',
      'https://farcaster.xyz/miniapps/pXYzGNnbBFu6/minisend',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: 'https://app.minisend.xyz',
    },
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Minisend',
    url: 'https://minisend.xyz',
    description: 'Onchain earnings truly spendable - Convert USDC to local currency instantly',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://app.minisend.xyz',
      'query-input': 'required name=search_term_string',
    },
  };

  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Minisend',
    url: 'https://minisend.xyz',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    description: 'Convert your USDC to local currency instantly on Base app. Available in Kenya, Nigeria, and Ghana.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'USDC to local currency conversion',
      'Live on Base app',
      'Support for Kenya (M-Pesa)',
      'Support for Nigeria (Bank transfers)',
      'Support for Ghana (Bank transfers)',
      'Base chain integration',
      'Instant conversions',
      'Gasless transactions',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://minisend.xyz',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
