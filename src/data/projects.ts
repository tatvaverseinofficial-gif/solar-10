import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "baner-bungalow-5kw",
    title: "5 kW Rooftop System — Baner Bungalow",
    category: "residential",
    capacity: "5 kW",
    location: "Baner, Pune",
    city: "Pune",
    state: "Maharashtra",
    completionDate: "March 2025",
    roi: "4.2 years",
    annualSavings: "₹72,000",
    description:
      "A shade-optimised 5 kW system on an east-west RCC roof for a family bungalow. Net metering completed with MSEDCL; monitoring app shared with the homeowner.",
    images: [
      "/images/projects/project-residential-1.jpg",
      "/images/gallery/gallery-01.jpg",
      "/images/gallery/gallery-02.jpg",
    ],
    clientName: "Rajesh Mehta",
    testimonial:
      "Our summer bills used to cross ₹8,000. After Aarohan’s installation and net metering, we rarely see bills above ₹1,500. The team handled every DISCOM visit.",
    features: ["Mono PERC 550W modules", "String inverter", "Online monitoring", "PM Surya Ghar subsidy guided"],
  },
  {
    id: "2",
    slug: "koramangala-villa-8kw",
    title: "8 kW Hybrid Home — Koramangala",
    category: "residential",
    capacity: "8 kW",
    location: "Koramangala, Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    completionDate: "January 2025",
    roi: "4.8 years",
    annualSavings: "₹1.1 Lakh",
    description:
      "Hybrid solar with 10 kWh lithium storage for a tech-professional household facing frequent evening outages. Critical loads remain powered for 6–8 hours.",
    images: [
      "/images/projects/project-residential-2.jpg",
      "/images/services/battery.jpg",
      "/images/gallery/gallery-04.jpg",
    ],
    clientName: "Ananya Krishnan",
    testimonial:
      "Wi-Fi, lights, and the fridge stay on during cuts. Generation numbers match what was promised in the proposal — rare honesty in this industry.",
    features: ["Hybrid inverter", "10 kWh Li-ion", "Critical load panel", "App + SMS alerts"],
  },
  {
    id: "3",
    slug: "andheri-office-40kw",
    title: "40 kW Office Rooftop — Andheri",
    category: "commercial",
    capacity: "40 kW",
    location: "Andheri East, Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    completionDate: "November 2024",
    roi: "3.6 years",
    annualSavings: "₹7.8 Lakh",
    description:
      "Installed across two terrace levels for a mid-size IT services firm. Generation aligns with AC and server-room daytime load, cutting auxiliary power purchases.",
    images: [
      "/images/projects/project-commercial-1.jpg",
      "/images/services/commercial.jpg",
      "/images/gallery/gallery-03.jpg",
    ],
    clientName: "Facility Head, Nexora IT",
    testimonial:
      "Installation was scheduled over two weekends so weekday operations were untouched. Monthly reports are now part of our ESG pack for clients.",
    features: ["Dual terrace layout", "Zero weekend disruption plan", "ESG reporting pack", "3-year AMC"],
  },
  {
    id: "4",
    slug: "jaipur-hotel-60kw",
    title: "60 kW Hotel Solar — Jaipur",
    category: "commercial",
    capacity: "60 kW",
    location: "Civil Lines, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    completionDate: "September 2024",
    roi: "3.2 years",
    annualSavings: "₹12.4 Lakh",
    description:
      "High-irradiance site with ballast-mounted modules to protect waterproofing on a heritage-adjacent hotel property. Strong daytime offset for HVAC loads.",
    images: [
      "/images/projects/project-commercial-2.jpg",
      "/images/gallery/gallery-07.jpg",
      "/images/gallery/gallery-08.jpg",
    ],
    clientName: "GM, Desert Orchid Hotels",
    testimonial:
      "Guests ask about the solar terrace on tours. Energy cost per occupied room is noticeably down in our P&L.",
    features: ["Ballast mounting", "High-irradiance yield design", "Guest-facing sustainability story", "Quarterly thermography"],
  },
  {
    id: "5",
    slug: "chakan-auto-ancillary-500kw",
    title: "500 kW Industrial Plant — Chakan",
    category: "industrial",
    capacity: "500 kW",
    location: "Chakan MIDC, Pune",
    city: "Pune",
    state: "Maharashtra",
    completionDate: "July 2024",
    roi: "3.0 years",
    annualSavings: "₹68 Lakh",
    description:
      "Shed-mounted industrial plant for an auto ancillary manufacturer. Designed for wind loads, integrated with plant LT panels, and handed over with SCADA dashboards.",
    images: [
      "/images/projects/project-industrial-1.jpg",
      "/images/services/industrial.jpg",
      "/images/gallery/gallery-05.jpg",
    ],
    clientName: "Plant Director, Vertex Auto Components",
    testimonial:
      "Aarohan’s DPR convinced our board in one meeting. Generation has stayed within 3% of the modelled yield for nine months.",
    features: ["Metal shed clamp system", "SCADA monitoring", "Performance guarantee", "On-site O&M crew"],
  },
  {
    id: "6",
    slug: "sanand-warehouse-1mw",
    title: "1 MW Warehouse Solar — Sanand",
    category: "industrial",
    capacity: "1 MW",
    location: "Sanand, Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    completionDate: "May 2024",
    roi: "2.9 years",
    annualSavings: "₹1.35 Cr",
    description:
      "Turnkey EPC for a logistics warehouse spanning vast metal roofing. Phased commissioning kept inbound docks operational throughout construction.",
    images: [
      "/images/projects/project-industrial-2.jpg",
      "/images/services/epc.jpg",
      "/images/gallery/gallery-06.jpg",
    ],
    clientName: "COO, Western Grid Logistics",
    testimonial:
      "Single-point EPC accountability mattered to us. No finger-pointing between vendors — Aarohan owned the timeline.",
    features: ["1 MW EPC", "Phased dock-friendly build", "Lender documentation", "2-year comprehensive O&M"],
  },
  {
    id: "7",
    slug: "navi-mumbai-society-25kw",
    title: "25 kW Society Common Meter — Navi Mumbai",
    category: "residential",
    capacity: "25 kW",
    location: "Kharghar, Navi Mumbai",
    city: "Navi Mumbai",
    state: "Maharashtra",
    completionDate: "February 2025",
    roi: "3.8 years",
    annualSavings: "₹3.6 Lakh",
    description:
      "Society common-area solar offsetting lifts, pumps, and lobby lighting. Coordinated with the managing committee and secured all society NOCs.",
    images: [
      "/images/projects/project-residential-3.jpg",
      "/images/gallery/gallery-09.jpg",
      "/images/services/residential.jpg",
    ],
    clientName: "Secretary, Palm Grove CHS",
    testimonial:
      "Maintenance bills for common utilities dropped within the first quarter. Residents finally see solar as community infrastructure, not a private luxury.",
    features: ["Common meter offset", "Society NOC management", "Shared monitoring access", "Cleaning AMC"],
  },
  {
    id: "8",
    slug: "coimbatore-school-80kw",
    title: "80 kW Campus Solar — Coimbatore",
    category: "commercial",
    capacity: "80 kW",
    location: "RS Puram, Coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
    completionDate: "December 2024",
    roi: "3.5 years",
    annualSavings: "₹14 Lakh",
    description:
      "Educational campus system with student-facing monitoring display in the atrium — turning infrastructure into a living science lesson.",
    images: [
      "/images/projects/project-commercial-3.jpg",
      "/images/gallery/gallery-10.jpg",
      "/images/gallery/gallery-03.jpg",
    ],
    clientName: "Principal, Horizon Public School",
    testimonial:
      "Parents notice the lobby dashboard. Our board loves the cost saving; our science faculty loves the live generation data for classes.",
    features: ["Campus multi-building design", "Lobby live dashboard", "Student STEM integration", "Holiday-safe install plan"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
