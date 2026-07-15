import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { company } from "@/data/company";
import { localBusinessSchema, solarCompanySchema } from "@/lib/seo";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: `${company.name} | Premium Solar Installations Across India`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "solar panels India",
    "rooftop solar Pune",
    "residential solar",
    "commercial solar",
    "industrial solar EPC",
    "PM Surya Ghar subsidy",
    "solar maintenance",
    "Aarohan Solar",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: company.website,
    siteName: company.name,
    title: `${company.name} | Premium Solar Installations Across India`,
    description: company.description,
    images: [{ url: "/images/hero/hero-main.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.description,
    images: ["/images/hero/hero-main.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessSchema(), solarCompanySchema()]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
