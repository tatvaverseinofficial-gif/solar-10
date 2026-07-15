import { company } from "@/data/company";
import { PageHero } from "@/components/shared/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${company.legalName} — how we collect, use, and protect your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: 15 July 2026 · ${company.legalName}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-premium prose-solar mx-auto max-w-3xl space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">1. Introduction</h2>
            <p className="mt-3 text-sm leading-relaxed">
              {company.legalName} (“we”, “us”) respects your privacy. This policy explains
              what information we collect through our website, enquiry forms, WhatsApp,
              and phone consultations, and how we use it to provide solar design,
              installation, and support services in India.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">2. Information we collect</h2>
            <p className="mt-3 text-sm leading-relaxed">
              We may collect your name, phone number, email address, city, property type,
              monthly electricity spend, roof details, and messages you submit voluntarily.
              Technical logs such as IP address and browser type may be collected via
              hosting analytics for security and performance.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">3. How we use information</h2>
            <p className="mt-3 text-sm leading-relaxed">
              We use your details to respond to enquiries, prepare proposals, schedule
              site surveys, coordinate DISCOM or subsidy paperwork where applicable, and
              improve our services. We do not sell personal data to third-party marketers.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">4. Sharing</h2>
            <p className="mt-3 text-sm leading-relaxed">
              We may share necessary information with trusted partners such as logistics
              vendors, equipment suppliers, DISCOM liaison agents, or payment processors —
              solely to fulfil your project. Legal disclosure may occur if required by
              Indian law.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">5. Data retention & security</h2>
            <p className="mt-3 text-sm leading-relaxed">
              We retain enquiry and project records as needed for business, warranty, and
              legal purposes. We apply reasonable technical and organisational measures to
              protect data, though no online transmission is fully risk-free.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">6. Your rights</h2>
            <p className="mt-3 text-sm leading-relaxed">
              You may request access, correction, or deletion of your personal information
              by emailing {company.email}, subject to legal retention requirements.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">7. Contact</h2>
            <p className="mt-3 text-sm leading-relaxed">
              {company.legalName}
              <br />
              {company.fullAddress}
              <br />
              Email: {company.email} · Phone: {company.phone}
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
