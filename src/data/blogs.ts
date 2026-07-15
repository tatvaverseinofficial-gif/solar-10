import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-read-your-electricity-bill-before-going-solar",
    title: "How to Read Your Electricity Bill Before Going Solar",
    excerpt:
      "Learn which line items matter for solar sizing — units consumed, sanctioned load, and average monthly spend — so your system is designed for real savings.",
    content: `
## Why your bill matters more than a brochure

Solar companies often quote system sizes without studying your consumption pattern. Your electricity bill is the single best starting document for a rooftop design that actually reduces what you pay.

### Units consumed (kWh)

Look at the billed units over the last 12 months if available. Seasonal spikes in summer from air conditioning should influence system size — not just the last month’s bill.

### Sanctioned load

Your sanctioned load (in kW) may affect how large a system your DISCOM will allow under net metering. We verify this during the survey and proposal stage.

### Fixed charges vs energy charges

Solar primarily offsets energy (unit) charges. Fixed and demand charges may still appear. Understanding this avoids inflated savings promises.

### Practical next step

Photograph or download 6–12 months of bills and share them with our design team. Pair that with a roof photo and we can prepare a realistic generation and payback model for your city.
    `.trim(),
    category: "solar-tips",
    author: "Priya Nair",
    authorRole: "Senior Solar Consultant",
    publishedAt: "2026-05-12",
    readTime: "6 min",
    image: "/images/blog/blog-01.jpg",
    tags: ["bills", "sizing", "homes"],
  },
  {
    id: "2",
    slug: "pm-surya-ghar-subsidy-explained-for-homeowners",
    title: "PM Surya Ghar Subsidy Explained for Homeowners",
    excerpt:
      "A clear walkthrough of eligibility ideas, documents, and application flow — plus why subsidy amounts and timelines always follow government policy, not installer promises.",
    content: `
## What the scheme aims to do

The PM Surya Ghar Muft Bijli Yojana is designed to accelerate residential rooftop solar adoption through central financial assistance for eligible domestic consumers.

### What installers can and cannot promise

Aarohan Solar can guide portal registration, documentation, and DISCOM coordination. We cannot guarantee subsidy amounts or disbursement dates — those are governed by MNRE and implementing agencies.

### Documents typically requested

Identity and address proof, latest electricity bill, roof ownership or NOC where required, and bank details for disbursement. Exact lists appear on the official national portal and may change.

### Stay updated

Policy details evolve. Always cross-check the official government portal before making purchase decisions based solely on subsidy assumptions.
    `.trim(),
    category: "government-schemes",
    author: "Amit Deshmukh",
    authorRole: "Policy & Liaison Lead",
    publishedAt: "2026-04-28",
    readTime: "7 min",
    image: "/images/blog/blog-02.jpg",
    tags: ["subsidy", "PM Surya Ghar", "residential"],
  },
  {
    id: "3",
    slug: "mono-perc-vs-topcon-modules-for-indian-rooftops",
    title: "Mono PERC vs TOPCon Modules for Indian Rooftops",
    excerpt:
      "A practical comparison of efficiency, temperature performance, and value — written for homeowners and facility managers, not datasheet collectors.",
    content: `
## Efficiency is not the only decision

Higher module efficiency means more watts per square foot — useful when roof space is tight. On large industrial sheds, cost per watt and bankability often matter more.

### Heat and Indian summers

Module temperature coefficients matter in hot climates. Ask your EPC for temperature-adjusted yield estimates for your city, not only STC nameplate ratings.

### Warranty and service network

Prefer brands with proven India service channels. A slightly higher efficiency is worthless if replacements take months.

### Our approach

We shortlist 2–3 bankable options for each project and explain trade-offs in plain language before you lock the Bill of Materials.
    `.trim(),
    category: "technology",
    author: "Karthik Rao",
    authorRole: "Head of Engineering",
    publishedAt: "2026-03-18",
    readTime: "8 min",
    image: "/images/blog/blog-03.jpg",
    tags: ["modules", "TOPCon", "engineering"],
  },
  {
    id: "4",
    slug: "solar-panel-cleaning-schedule-for-dusty-indian-cities",
    title: "Solar Panel Cleaning Schedule for Dusty Indian Cities",
    excerpt:
      "Dust can quietly steal 5–25% of generation. Here’s how to set a cleaning rhythm for Pune, Delhi, Jaipur, and similar climates.",
    content: `
## Why cleaning frequency is local

Irradiation is high across much of India, but so is dust — from construction, traffic, and dry seasons. Soiled modules underperform even when the hardware is healthy.

### A practical schedule

- Peak dust months: every 15–20 days
- Moderate months: monthly
- Monsoon: inspect more, dry-clean less; check for water logging around junction boxes

### Safety first

Residential rooftops need harnesses and trained staff. DIY cleaning with abrasive pads can void warranties and scratch glass.

### AMC value

An O&M contract bundles cleaning with electrical checks — catching loose connectors before they become fire hazards.
    `.trim(),
    category: "maintenance",
    author: "Sneha Kulkarni",
    authorRole: "O&M Manager",
    publishedAt: "2026-02-09",
    readTime: "5 min",
    image: "/images/blog/blog-04.jpg",
    tags: ["cleaning", "O&M", "performance"],
  },
  {
    id: "5",
    slug: "when-homeowners-should-add-battery-storage",
    title: "When Homeowners Should Add Battery Storage",
    excerpt:
      "Batteries are not mandatory for every rooftop. Use this decision framework based on outage patterns, critical loads, and budget.",
    content: `
## Grid-tied first, hybrid when needed

If your area has stable power and your goal is bill reduction, a standard on-grid system with net metering is usually enough.

### Consider batteries if

- You face frequent evening outages
- You run medical equipment or work-from-home setups that cannot drop
- You want to use more of your own solar after sunset

### Size for critical loads

List circuits that must stay on — not the whole house. A smaller lithium bank protecting essentials is more affordable than whole-home backup.

### Retrofit path

Many homes start on-grid and add hybrid storage later. Tell us your inverter model during consultation so we can check retrofit options early.
    `.trim(),
    category: "solar-tips",
    author: "Priya Nair",
    authorRole: "Senior Solar Consultant",
    publishedAt: "2026-01-22",
    readTime: "6 min",
    image: "/images/blog/blog-05.jpg",
    tags: ["battery", "hybrid", "backup"],
  },
  {
    id: "6",
    slug: "industrial-solar-capex-vs-resco-in-india",
    title: "Industrial Solar: CAPEX vs RESCO in India",
    excerpt:
      "Ownership versus third-party investment — how CFOs should compare control, IRR, and balance-sheet impact for factory rooftops.",
    content: `
## Two paths to the same sunlight

**CAPEX** means your company owns the asset, claims depreciation benefits where applicable, and keeps the savings.

**RESCO / OPEX** means an investor builds and owns the plant; you buy power at an agreed tariff, often below DISCOM rates.

### Choosing well

CAPEX suits firms with available capital and strong treasury appetite for green assets. RESCO suits businesses that want savings without upfront investment and are comfortable with long-term PPAs.

### What we provide

Whether you choose CAPEX EPC or need a RESCO partner introduction, Aarohan Solar delivers the engineering integrity that keeps generation close to the model.
    `.trim(),
    category: "news",
    author: "Vikram Shah",
    authorRole: "Founder & CEO",
    publishedAt: "2025-12-05",
    readTime: "9 min",
    image: "/images/blog/blog-06.jpg",
    tags: ["industrial", "CAPEX", "RESCO"],
  },
];

export const blogCategories = [
  { slug: "solar-tips", label: "Solar Tips" },
  { slug: "maintenance", label: "Maintenance" },
  { slug: "technology", label: "Technology" },
  { slug: "government-schemes", label: "Government Schemes" },
  { slug: "news", label: "News" },
] as const;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
