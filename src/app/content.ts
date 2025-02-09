export interface ExperienceProps {
  company: string;
  role: string;
  technologies: string[];
  start: string;
  end: string;
  location: string;
}

export const experienceContent: ExperienceProps[] = [
  {
    company: "Scope Labs",
    role: "Fullstack Developer",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Flask",
      "Python",
      "Firebase",
      "Figma",
      "Vercel",
    ],
    start: "JAN2025",
    end: "PRESENT",
    location: "Remote",
  },
  {
    company: "Resonite",
    role: "Fullstack Developer",
    technologies: [
      "Next.js",
      "Supabase",
      "TailwindCSS",
      "Figma",
      "Golang",
      "Railway",
      "Vercel",
      "ZOD",
      "React",
    ],
    start: "OCT2023",
    end: "JUL2024",
    location: "Remote",
  },
  {
    company: "Astrazeneca",
    role: "Data Analyst Intern",
    technologies: [
      "Python",
      "PowerBI",
      "Excel",
      "Salesforce",
      "VBA",
      "Pandas",
      "DAX",
      "Dashboarding",
      "Design",
    ],
    start: "JUN2023",
    end: "SEP2023",
    location: "Wilmington, DE",
  },
  {
    company: "Virginia Elections",
    role: "Data Analyst Intern",
    technologies: [
      "SQL",
      "Excel",
      "VBA",
      "Dashboarding",
      "Design",
      "Data Automation",
      "ArcGIS",
    ],
    start: "JUN2022",
    end: "SEP2022",
    location: "Richmond, VA",
  },
];
