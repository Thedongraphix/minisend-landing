import Script from 'next/script';
import { faqData } from '@/components/UI/FAQ/constants';

/**
 * FAQ Structured Data (JSON-LD) for enhanced SEO
 * Helps Google display rich FAQ snippets in search results
 */
export default function FAQStructuredData() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
