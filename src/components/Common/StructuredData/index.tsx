import Script from 'next/script';

/**
 * Structured Data (JSON-LD) component for SEO
 * This is critical for Google to display the logo in search results
 */
export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Minisend',
    url: 'https://minisend.xyz',
    logo: 'https://minisend.xyz/brandkit/minisend-logo.png',
    description: 'Convert your USDC to local currency instantly on Base app. Built for creators and builders in Kenya, Nigeria, and Ghana.',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/minisendapp',
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
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="web-application-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
