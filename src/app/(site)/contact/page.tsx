import { PageHero, CTASection } from "@/components/shared/Section";
import { ContactForm, ContactDetails } from "@/components/contact/ContactForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Request a free solar site survey from Aarohan Solar, Pune. Call, email, WhatsApp, or send an enquiry for residential, commercial, and industrial projects.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s design the right system for your bill"
        description="Homes, businesses, factories, schools, and hospitals — tell us your city and monthly spend to get started."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>
      <CTASection
        title="Prefer WhatsApp?"
        description="Tap the green button on any page or call us during business hours for a quick consult."
        secondaryHref="/calculator"
        secondaryLabel="Try the calculator first"
      />
    </>
  );
}
