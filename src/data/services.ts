import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "residential-solar",
    title: "Residential Solar",
    shortTitle: "Homes",
    category: "residential",
    description:
      "Custom rooftop solar systems for apartments, independent houses, and gated communities — designed to cut your electricity bill and qualify for central subsidy.",
    longDescription:
      "Indian households are facing rising tariffs and unreliable grid supply in many cities. Aarohan Solar's residential solutions are engineered for RCC, metal, and tiled roofs, with shade analysis, structural checks, and net-metering support. From a compact 3 kW system for flats with terrace rights to 10 kW+ systems for large bungalows, we size for your bill, not a one-size-fits-all package.",
    icon: "Home",
    image: "/images/services/residential.jpg",
    gallery: [
      "/images/services/residential.jpg",
      "/images/gallery/gallery-01.jpg",
      "/images/gallery/gallery-02.jpg",
      "/images/projects/project-residential-1.jpg",
    ],
    benefits: [
      "Eligible for PM Surya Ghar Muft Bijli Yojana subsidy guidance",
      "Typical bill reduction of 70–90% after net metering",
      "Tier-1 panels with 25-year linear performance warranty",
      "App-based generation monitoring for your home",
      "End-to-end DISCOM and net-metering documentation",
      "Structural safety sign-off before installation",
    ],
    process: [
      {
        step: 1,
        title: "Site Survey & Bill Analysis",
        description:
          "Our engineer visits your property, reviews 12 months of electricity bills, and assesses roof orientation, shade, and load capacity.",
      },
      {
        step: 2,
        title: "System Design & Proposal",
        description:
          "You receive a clear design with panel layout, inverter sizing, savings projection, subsidy estimate, and warranty details.",
      },
      {
        step: 3,
        title: "Approvals & Installation",
        description:
          "We handle paperwork with your DISCOM, install mounting structures and modules, and commission the system safely.",
      },
      {
        step: 4,
        title: "Net Metering & Handover",
        description:
          "After bi-directional meter installation, we train you on monitoring and share all warranties and service contacts.",
      },
    ],
    faqs: [
      {
        question: "How much roof space do I need for a home solar system?",
        answer:
          "As a rule of thumb, plan for about 100 sq. ft. per kW on an unshaded RCC roof. A typical 3 kW system needs roughly 300 sq. ft. of usable area.",
      },
      {
        question: "Will solar work during power cuts?",
        answer:
          "A grid-tied system shuts down during outages for safety (anti-islanding). Add a hybrid inverter with battery storage if you need backup during cuts.",
      },
      {
        question: "How long does residential installation take?",
        answer:
          "Installation itself usually takes 2–5 days after material delivery. Net-metering approvals can add 2–6 weeks depending on your DISCOM.",
      },
    ],
    startingPrice: "From ₹1.8 Lakh*",
  },
  {
    id: "2",
    slug: "commercial-solar",
    title: "Commercial Solar",
    shortTitle: "Businesses",
    category: "commercial",
    description:
      "Rooftop and campus solar for offices, retail, hotels, schools, and hospitals — reducing operating costs with reliable daytime generation.",
    longDescription:
      "Commercial consumers often pay higher tariffs and face demand charges. Aarohan Solar designs systems that align generation with daytime load, improve ESG reporting, and free up working capital through predictable energy costs. We support single-phase and three-phase setups, captive consumption, and open-access advisory where applicable.",
    icon: "Building2",
    image: "/images/services/commercial.jpg",
    gallery: [
      "/images/services/commercial.jpg",
      "/images/gallery/gallery-03.jpg",
      "/images/projects/project-commercial-1.jpg",
      "/images/gallery/gallery-04.jpg",
    ],
    benefits: [
      "Lower operating expenses with daytime solar generation",
      "Improved ESG and sustainability reporting metrics",
      "Scalable designs from 20 kW to multi-MW campuses",
      "Minimal disruption to business operations during install",
      "Remote monitoring dashboards for facility managers",
      "Optional O&M contracts with SLAs",
    ],
    process: [
      {
        step: 1,
        title: "Load & Tariff Study",
        description:
          "We analyse TOU tariffs, demand patterns, and roof/parking canopy opportunities across your facilities.",
      },
      {
        step: 2,
        title: "Engineering & Financial Model",
        description:
          "Detailed engineering with IRR, payback, and cash-flow models suited to ownership or lease structures.",
      },
      {
        step: 3,
        title: "Execution",
        description:
          "Phased installation planned around business hours, with safety protocols and quality checkpoints.",
      },
      {
        step: 4,
        title: "Commissioning & Training",
        description:
          "We train your facilities team, hand over documentation, and set up monitoring alerts.",
      },
    ],
    faqs: [
      {
        question: "Can we install solar on a rented commercial building?",
        answer:
          "Yes, with landlord consent. We help draft NOCs and structure agreements so both tenant and owner roles are clear.",
      },
      {
        question: "What about schools and hospitals?",
        answer:
          "Institutional campuses are excellent candidates — large roofs, daytime loads, and strong sustainability mandates. We tailor designs for continuous operations.",
      },
    ],
    startingPrice: "From ₹11 Lakh*",
  },
  {
    id: "3",
    slug: "industrial-solar",
    title: "Industrial Solar",
    shortTitle: "Factories",
    category: "industrial",
    description:
      "High-capacity solar for manufacturing plants, warehouses, and industrial parks — engineered for heavy loads and harsh operating environments.",
    longDescription:
      "Factories with large sheds and high daytime consumption see some of the strongest returns from solar. Our industrial team designs for metal roof loading, seismic zones, dust-prone environments, and integration with existing HT/LT panels. We support CAPEX, RESCO, and hybrid commercial models.",
    icon: "Factory",
    image: "/images/services/industrial.jpg",
    gallery: [
      "/images/services/industrial.jpg",
      "/images/projects/project-industrial-1.jpg",
      "/images/gallery/gallery-05.jpg",
      "/images/gallery/gallery-06.jpg",
    ],
    benefits: [
      "MW-scale rooftop and ground-mount options",
      "Designs validated for industrial roof wind loads",
      "Integration with existing electrical infrastructure",
      "Dust and heat-optimised module selection",
      "SCADA-ready monitoring for plant teams",
      "Flexible CAPEX / OPEX commercial models",
    ],
    process: [
      {
        step: 1,
        title: "Plant Energy Audit",
        description:
          "Detailed assessment of load curves, transformer capacity, and available roof/ground area.",
      },
      {
        step: 2,
        title: "Detailed Project Report",
        description:
          "DPR covering civil, electrical, protection schemes, and financial modelling for management approval.",
      },
      {
        step: 3,
        title: "EPC Execution",
        description:
          "Supply, installation, testing, and commissioning with industrial HSE standards.",
      },
      {
        step: 4,
        title: "Performance Guarantee",
        description:
          "Guaranteed generation benchmarks with O&M options for multi-year plant performance.",
      },
    ],
    faqs: [
      {
        question: "Do metal shed roofs support solar?",
        answer:
          "Most do, after a structural assessment. We design clamps and purlin attachments that preserve waterproofing and warranty conditions.",
      },
    ],
    startingPrice: "Custom quote",
  },
  {
    id: "4",
    slug: "solar-epc",
    title: "Solar EPC",
    shortTitle: "EPC",
    category: "epc",
    description:
      "End-to-end Engineering, Procurement, and Construction for turnkey solar projects — from concept to commissioning.",
    longDescription:
      "Aarohan Solar delivers full EPC for rooftop and ground-mounted plants. Our in-house design, procurement of bankable equipment, and trained installation crews ensure single-point accountability. Ideal for corporates, PSUs, educational trusts, and industrial groups seeking turnkey delivery.",
    icon: "ClipboardCheck",
    image: "/images/services/epc.jpg",
    gallery: [
      "/images/services/epc.jpg",
      "/images/gallery/gallery-07.jpg",
      "/images/projects/project-industrial-2.jpg",
      "/images/gallery/gallery-08.jpg",
    ],
    benefits: [
      "Single-point responsibility from design to handover",
      "Bankable module and inverter brands only",
      "Project scheduling with clear milestones",
      "Quality assurance and third-party inspection readiness",
      "Documentation pack for lenders and auditors",
      "Post-commissioning performance support",
    ],
    process: [
      {
        step: 1,
        title: "Concept & Feasibility",
        description: "Site visits, yield estimation, and CAPEX budgeting.",
      },
      {
        step: 2,
        title: "Detailed Engineering",
        description: "SLDs, layout drawings, BOQ, and protection coordination.",
      },
      {
        step: 3,
        title: "Procurement & Build",
        description: "Vendor management, logistics, and site construction.",
      },
      {
        step: 4,
        title: "Test & Commission",
        description: "Pre-commissioning checks, grid sync, and as-built drawings.",
      },
    ],
    faqs: [
      {
        question: "Do you work on CAPEX and RESCO models?",
        answer:
          "Yes. We execute CAPEX EPC directly and partner on RESCO/lease structures where an investor owns the asset.",
      },
    ],
    startingPrice: "Project-based",
  },
  {
    id: "5",
    slug: "solar-maintenance",
    title: "Solar Maintenance",
    shortTitle: "O&M",
    category: "maintenance",
    description:
      "Preventive and corrective O&M so your plant keeps generating at peak — cleaning, thermography, inverter health, and reporting.",
    longDescription:
      "Dust, bird droppings, loose MC4s, and inverter faults silently erode generation. Our O&M teams serve Aarohan and third-party plants with scheduled cleaning, electrical checks, thermal imaging, and monthly performance reports. Available as AMC packages tailored to system size.",
    icon: "Wrench",
    image: "/images/services/maintenance.jpg",
    gallery: [
      "/images/services/maintenance.jpg",
      "/images/gallery/gallery-09.jpg",
      "/images/gallery/gallery-10.jpg",
      "/images/gallery/gallery-01.jpg",
    ],
    benefits: [
      "Scheduled module cleaning for dusty climates",
      "Inverter and string-level health checks",
      "Thermography to catch hotspots early",
      "Monthly generation vs. expected reports",
      "Priority breakdown support",
      "AMC options for homes and enterprises",
    ],
    process: [
      {
        step: 1,
        title: "Plant Health Audit",
        description: "Baseline assessment of generation loss and equipment condition.",
      },
      {
        step: 2,
        title: "AMC Plan",
        description: "Cleaning frequency, inspection schedule, and SLA definition.",
      },
      {
        step: 3,
        title: "Scheduled Visits",
        description: "Trained technicians execute cleaning and checklist inspections.",
      },
      {
        step: 4,
        title: "Reporting",
        description: "Digital reports with findings, actions taken, and recommendations.",
      },
    ],
    faqs: [
      {
        question: "How often should panels be cleaned in India?",
        answer:
          "In dusty or coastal cities, every 15–30 days is common. Monsoon months may need less frequent dry cleaning but still need inspections.",
      },
    ],
    startingPrice: "From ₹2,999/year",
  },
  {
    id: "6",
    slug: "battery-storage",
    title: "Battery Storage",
    shortTitle: "Storage",
    category: "battery",
    description:
      "Hybrid solar with lithium battery backup for homes and businesses that need power during outages and evening peaks.",
    longDescription:
      "Pair your rooftop solar with lithium-ion storage to keep essentials running during grid outages and shift solar energy into evening hours. We size hybrid inverters and battery banks for your critical loads — lights, fans, Wi-Fi, refrigerators, or entire floors — with safe indoor/outdoor installation practices.",
    icon: "BatteryCharging",
    image: "/images/services/battery.jpg",
    gallery: [
      "/images/services/battery.jpg",
      "/images/gallery/gallery-02.jpg",
      "/images/gallery/gallery-04.jpg",
      "/images/services/residential.jpg",
    ],
    benefits: [
      "Backup during load shedding and outages",
      "Better self-consumption of daytime solar",
      "Scalable lithium battery modules",
      "Safe BMS-protected installations",
      "Hybrid inverter integration with existing solar",
      "App visibility of charge and backup status",
    ],
    process: [
      {
        step: 1,
        title: "Critical Load Mapping",
        description: "Identify circuits that must stay on during outages and estimate backup hours.",
      },
      {
        step: 2,
        title: "Hybrid System Design",
        description: "Match inverter, battery capacity, and solar stringing for your goals.",
      },
      {
        step: 3,
        title: "Safe Installation",
        description: "Electrical isolation, ventilation, and BMS configuration per manufacturer specs.",
      },
      {
        step: 4,
        title: "Mode Setup & Training",
        description: "Configure backup, self-consumption, and peak-shaving modes; train your family or facilities team.",
      },
    ],
    faqs: [
      {
        question: "Can I add batteries to an existing solar system?",
        answer:
          "Often yes, via a hybrid retrofit or AC-coupled storage. Compatibility depends on your current inverter — we assess this during the survey.",
      },
    ],
    startingPrice: "From ₹1.2 Lakh*",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
