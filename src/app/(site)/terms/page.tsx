import { company } from "@/data/company";
import { PageHero } from "@/components/shared/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${company.legalName} website and enquiry services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Last updated: 15 July 2026 · ${company.legalName}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-premium mx-auto max-w-3xl space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">1. Acceptance</h2>
            <p className="mt-3 text-sm leading-relaxed">
              By using {company.website} and related enquiry tools, you agree to these
              terms. If you do not agree, please discontinue use of the site.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">2. Website content</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Content including savings estimates, subsidy guidance, project case studies,
              and the solar calculator is provided for informational purposes. Figures are
              illustrative and not binding quotations. Formal offers are issued only after
              technical assessment and written proposal.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">3. Subsidy disclaimer</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Government subsidies and incentives are subject to MNRE, state, and DISCOM
              policies. We do not guarantee eligibility, amounts, or disbursement timelines.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">4. Contracts</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Installation, EPC, O&M, and supply engagements are governed by separate
              written agreements, purchase orders, or work orders. Website terms do not
              replace those contracts.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">5. Intellectual property</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Logos, copy, photography, and design on this site belong to{" "}
              {company.legalName} or licensed partners. You may not reproduce materials for
              commercial use without written permission.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">6. Limitation of liability</h2>
            <p className="mt-3 text-sm leading-relaxed">
              To the fullest extent permitted under applicable Indian law, we are not liable
              for indirect or consequential losses arising from use of this website or
              reliance on illustrative content.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">7. Governing law</h2>
            <p className="mt-3 text-sm leading-relaxed">
              These terms are governed by the laws of India. Courts in Pune, Maharashtra
              shall have subject-matter jurisdiction for disputes arising from website use,
              without prejudice to mandatory consumer protections.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-solar-navy">8. Contact</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Questions about these terms: {company.email} · {company.phone}
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
