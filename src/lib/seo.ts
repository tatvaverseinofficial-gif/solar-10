import type { Metadata } from "next";
import { company } from "@/data/company";

const siteUrl = company.website;

export function createMetadata({
  title,
  description,
  path = "",
  image = "/images/hero/hero-main.jpg",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes(company.name)
    ? title
    : `${title} | ${company.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: company.legalName,
    image: `${siteUrl}/images/hero/hero-main.jpg`,
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.559,
      longitude: 73.786,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    priceRange: "₹₹₹",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function solarCompanySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/hero/hero-main.jpg`,
    description: company.description,
    foundingDate: String(company.founded),
    sameAs: Object.values(company.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    knowsAbout: [
      "Residential Solar Installation",
      "Commercial Solar Systems",
      "Industrial Solar EPC",
      "Rooftop Solar",
      "Battery Energy Storage",
      "Solar Maintenance",
      "PM Surya Ghar Subsidy",
    ],
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
