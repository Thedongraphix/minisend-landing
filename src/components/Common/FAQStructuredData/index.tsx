import { faqData } from '@/components/UI/FAQ/constants';

/**
 * FAQ Structured Data (JSON-LD) for enhanced SEO
 * Helps Google display rich FAQ snippets in search results
 * Using regular script tag (not Next.js Script) for server-side rendering
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
