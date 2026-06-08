export const siteMeta = {
  givenName: "Tanvir",
  surnames: "Hossain Parvin",
  displayName: "Tanvir Hossain Parvin",
  nickname: "Rafi",
  tagline: "Computer Science · AI Systems · Full-Stack Development",
  description:
    "Portfolio of Tanvir Hossain Parvin — computer science student building AI systems and full-stack software.",
  location: "London, UK",
  status: "Active",
  availability: "Open to opportunities",
  systemStatus: "Online",
  timezone: "GMT (UTC+0)",
  aliasLine: "Also known as Rafi",
  profileSummary: "CS student · AI & systems focus · London, UK",
  wordmark: "THP",
  footerIndex: "013",
  email: "thplondon@gmail.com",
  github: "https://github.com/SunriseWasTaken",
  linkedin: "https://www.linkedin.com/in/tanvirhossainp",
  cvPath: "/cv/tanvir-hossain-parvin-resume.pdf",
  cvFilename: "Tanvir-Hossain-Parvin-Resume.pdf",
} as const;

export const about = {
  paragraphs: [
    "Computer Science student focused on building reliable software systems at the intersection of artificial intelligence and full-stack engineering.",
    "Interested in applied machine learning, system design, and tools that make complex data accessible. Current work spans healthcare navigation platforms, data visualization systems, and production-oriented web applications.",
    "Pursuing academic study while actively developing projects that combine research-minded rigour with practical engineering execution.",
  ],
} as const;

export type ProjectLink = {
  label: string;
  href: string;
};

export const projects = [
  {
    id: "medifi",
    title: "Medifi",
    subtitle: "NHS Letter Lens",
    description:
      "Patient-facing AI tool that turns NHS letters and referrals into plain-English action plans. Flags admin risks such as past dates, missing contact details, and vague instructions.",
    role: "Lead Developer",
    stack: [
      "React",
      "Node.js",
      "Express",
      "Firebase",
      "Tesseract.js",
      "OpenAI API",
    ],
    impact:
      "Built OCR + LLM parsing pipeline for letter ingestion; designed patient navigation flow for NHS admin hackathon (Track 02).",
    status: "Completed",
    year: "2024",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/SunriseWasTaken/Medifi-1",
      },
    ] satisfies ProjectLink[],
  },
  {
    id: "crisis-dashboard",
    title: "Bear Witness",
    subtitle: "Crisis Dashboard",
    description:
      "Real-time crisis monitoring dashboard powered by ReliefWeb data. Interactive map with region and crisis-type filters, live feed, and comparative data visualisation.",
    role: "Full-Stack Developer",
    stack: ["JavaScript", "Leaflet", "Chart.js", "ReliefWeb API"],
    impact:
      "Delivered live crisis feed and map-based exploration for humanitarian datasets; deployed as a static GitHub Pages demo.",
    status: "Completed",
    year: "2024",
    links: [
      {
        label: "Live Demo",
        href: "https://sunrisewastaken.github.io/FYProject/",
      },
      {
        label: "GitHub",
        href: "https://github.com/SunriseWasTaken/FYProject",
      },
    ] satisfies ProjectLink[],
  },
] as const;

export const experience = [
  {
    id: "exp-edu",
    period: "Sep 2023 — Jun 2026",
    title: "BSc (Hons) Computer Science",
    organization: "Goldsmiths, University of London",
    description:
      "Placement-year CS degree with focus on software engineering, systems design, and applied AI.",
    highlights: [
      "Building production-oriented projects across healthcare AI, data systems, and full-stack web",
      "Coursework spanning algorithms, databases, software architecture, and machine learning",
    ],
    type: "Education",
  },
  {
    id: "exp-payusd",
    period: "Mar — May 2024",
    title: "Software Engineering Intern",
    organization: "PayUSD",
    description:
      "Hybrid backend engineering role improving platform reliability, scalability, and user-facing product quality.",
    highlights: [
      "Designed and implemented backend features across remote and on-site delivery cycles",
      "Contributed to a 15% increase in platform usability through reliability and API improvements",
    ],
    type: "Engineering",
  },
  {
    id: "exp-marks",
    period: "Nov — Dec 2025",
    title: "Customer Assistant",
    organization: "Marks & Spencer",
    description:
      "High-volume retail operations in a peak-traffic food hall environment.",
    highlights: [
      "Supported 100+ customers per shift with queries, recommendations, and transactions",
      "Maintained availability and visual standards during 30%+ peak footfall under time pressure",
    ],
    type: "Operations",
  },
  {
    id: "exp-mtc",
    period: "Sep 2023 — Jul 2024",
    title: "Tutor",
    organization: "MTC Tuition Centre",
    description:
      "STEM-focused tutoring with measurable learning outcomes and structured progress tracking.",
    highlights: [
      "Improved student grades by an average of 40% through personalised learning strategies",
      "Designed supportive sessions that strengthened analytical thinking and problem decomposition",
    ],
    type: "Education",
  },
  {
    id: "exp-itsu",
    period: "Jul — Aug 2024",
    title: "Team Member",
    organization: "Itsu",
    description:
      "Fast-paced retail environment with revenue and throughput targets.",
    highlights: [
      "Generated £1,500 daily revenue through efficient service and product knowledge",
      "Increased peak-hour transaction volume by 20% via coordinated team workflows",
      "Provided multilingual support for Spanish-speaking customers",
    ],
    type: "Operations",
  },
  {
    id: "exp-achilleus",
    period: "Mar 2024 — Aug 2025",
    title: "Door Supervisor",
    organization: "Achilleus Security",
    description:
      "Large-scale event operations requiring situational awareness and calm decision-making.",
    highlights: [
      "Managed customer flow and safety for events up to 20,000 attendees",
      "De-escalated conflicts and maintained operational standards under high-pressure conditions",
    ],
    type: "Operations",
  },
] as const;

export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Python", "REST APIs", "PostgreSQL", "Firebase", "System Design"],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Git", "Docker", "Linux", "VS Code", "Figma"],
  },
  {
    id: "programming",
    label: "Programming",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Java"],
  },
] as const;

export const spokenLanguages = [
  { name: "Spanish", fluency: "Native" },
  { name: "English", fluency: "Native" },
  { name: "Bangla", fluency: "Native" },
] as const;

export const navLinks = [
  { href: "#about", label: "About", sectionId: "about" },
  { href: "#projects", label: "Projects", sectionId: "projects" },
  { href: "#experience", label: "Experience", sectionId: "experience" },
  { href: "#skills", label: "Skills", sectionId: "skills" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
] as const;
