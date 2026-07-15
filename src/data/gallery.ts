import type { GalleryItem, TeamMember, TimelineEvent } from "@/types";

export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Baner Residential Rooftop", category: "residential", image: "/images/gallery/gallery-01.jpg", location: "Pune", capacity: "5 kW" },
  { id: "2", title: "Morning Array Commissioning", category: "installation", image: "/images/gallery/gallery-02.jpg", location: "Pune", capacity: "8 kW" },
  { id: "3", title: "Mumbai Office Terrace", category: "commercial", image: "/images/gallery/gallery-03.jpg", location: "Mumbai", capacity: "40 kW" },
  { id: "4", title: "Hybrid Home Setup", category: "residential", image: "/images/gallery/gallery-04.jpg", location: "Bengaluru", capacity: "8 kW" },
  { id: "5", title: "Industrial Shed Array", category: "industrial", image: "/images/gallery/gallery-05.jpg", location: "Chakan", capacity: "500 kW" },
  { id: "6", title: "Warehouse Megawatt Build", category: "industrial", image: "/images/gallery/gallery-06.jpg", location: "Sanand", capacity: "1 MW" },
  { id: "7", title: "Corporate Campus Blocks", category: "commercial", image: "/images/gallery/gallery-07.jpg", location: "Pune", capacity: "120 kW" },
  { id: "8", title: "Desert Hotel Ballast Mount", category: "commercial", image: "/images/gallery/gallery-08.jpg", location: "Jaipur", capacity: "60 kW" },
  { id: "9", title: "Society Common Area Solar", category: "residential", image: "/images/gallery/gallery-09.jpg", location: "Navi Mumbai", capacity: "25 kW" },
  { id: "10", title: "School Campus Installation", category: "commercial", image: "/images/gallery/gallery-10.jpg", location: "Coimbatore", capacity: "80 kW" },
  { id: "11", title: "EPC Crew at Work", category: "team", image: "/images/about/about-team.jpg", location: "Pan-India" },
  { id: "12", title: "Precision Module Alignment", category: "installation", image: "/images/services/epc.jpg", location: "Gujarat", capacity: "1 MW" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Vikram Shah",
    role: "Founder & CEO",
    bio: "Former power-sector consultant with 18 years across renewables and utilities. Built Aarohan to bring boardroom-grade engineering to everyday rooftops.",
    image: "/images/team/team-01.jpg",
  },
  {
    id: "2",
    name: "Priya Nair",
    role: "Head of Customer Success",
    bio: "Leads proposals, subsidy guidance, and customer onboarding. Obsessed with clear savings projections and honest timelines.",
    image: "/images/team/team-02.jpg",
  },
  {
    id: "3",
    name: "Karthik Rao",
    role: "Head of Engineering",
    bio: "Electrical engineer specialising in rooftop and industrial EPC. Sets design standards for shade analysis, protection, and yield modelling.",
    image: "/images/team/team-03.jpg",
  },
  {
    id: "4",
    name: "Sneha Kulkarni",
    role: "O&M and Quality Lead",
    bio: "Runs maintenance crews and QA checklists across Maharashtra and Gujarat. Believes peak generation is a discipline, not luck.",
    image: "/images/team/team-04.jpg",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2014",
    title: "Founded in Pune",
    description: "Started as a residential rooftop specialist serving Pune and Pimpri-Chinchwad households.",
  },
  {
    year: "2017",
    title: "Commercial Expansion",
    description: "Won first 50+ kW commercial projects for schools and offices across Maharashtra.",
  },
  {
    year: "2019",
    title: "Industrial EPC Desk",
    description: "Launched dedicated industrial engineering team for shed-mounted multi-hundred kW plants.",
  },
  {
    year: "2022",
    title: "45 MW Cumulative",
    description: "Crossed 45 MW of commissioned capacity with operations in six states.",
  },
  {
    year: "2024",
    title: "Hybrid & Storage",
    description: "Expanded hybrid inverter and lithium storage offerings for backup-critical homes and clinics.",
  },
  {
    year: "2026",
    title: "2,500+ Installations",
    description: "Serving homeowners, factories, and institutions with design, subsidy guidance, and long-term O&M.",
  },
];

export const certifications = [
  { title: "MNRE-Aligned Processes", description: "Installations guided by current MNRE and DISCOM frameworks for rooftop solar." },
  { title: "Electrical Safety Focus", description: "Design and commissioning checklists covering earthing, isolation, and anti-islanding." },
  { title: "Tier-1 Procurement", description: "Modules and inverters sourced from bankable brands with India service networks." },
  { title: "ISO-Oriented Quality", description: "Documented project workflows ready for corporate vendor audits and lender reviews." },
];
