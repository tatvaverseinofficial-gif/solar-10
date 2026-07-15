export const company = {
  name: "Aarohan Solar",
  legalName: "Aarohan Solar Energy Pvt. Ltd.",
  tagline: "Powering India's Clean Energy Future",
  description:
    "Aarohan Solar designs, installs, and maintains high-performance solar systems for homes, businesses, factories, and institutions across India — with transparent pricing, MNRE-aligned processes, and long-term after-sales care.",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "hello@aarohansolar.in",
  whatsapp: "919876543210",
  address: {
    line1: "402, Horizon Business Park",
    line2: "Baner Road, Baner",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411045",
    country: "India",
  },
  fullAddress:
    "402, Horizon Business Park, Baner Road, Baner, Pune, Maharashtra 411045, India",
  hours: {
    weekdays: "Monday – Saturday: 9:30 AM – 6:30 PM",
    sunday: "Sunday: Closed (Emergency support available)",
  },
  social: {
    facebook: "https://facebook.com/aarohansolar",
    instagram: "https://instagram.com/aarohansolar",
    linkedin: "https://linkedin.com/company/aarohansolar",
    youtube: "https://youtube.com/@aarohansolar",
    twitter: "https://x.com/aarohansolar",
  },
  stats: {
    installations: "2,500+",
    capacityMw: "45 MW+",
    cities: "40+",
    satisfaction: "98%",
    experience: "12+",
    co2Saved: "68,000+",
  },
  founded: 2014,
  gst: "27AABCA1234D1Z5",
  website: "https://aarohansolar.in",
} as const;

export const mission =
  "To make clean solar energy accessible, reliable, and financially rewarding for every Indian home and business — without compromising on engineering quality or transparency.";

export const vision =
  "A solar-powered India where rooftops, factories, and campuses generate their own clean electricity, reduce carbon footprints, and build energy independence for generations.";

export const values = [
  {
    title: "Engineering Integrity",
    description:
      "Every system is designed for Indian weather, roof structures, and load profiles — not copied from generic templates.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear proposals with itemised costs, subsidy guidance, and realistic savings estimates. No hidden charges.",
  },
  {
    title: "Long-term Partnership",
    description:
      "Our relationship begins at installation and continues through monitoring, maintenance, and system upgrades.",
  },
  {
    title: "Policy Clarity",
    description:
      "We guide you through net metering, subsidy applications, and DISCOM paperwork so you stay compliant and informed.",
  },
] as const;
