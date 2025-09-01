import { Education } from "@/types";

export const education: Education[] = [
  {
    id: "president-university",
    degree: "Bachelor of Informatics",
    institution: "President University",
    period: "Sep 2023 - Dec 2026",
    achievements: ["Jababeka Scholarship (Rank 2)"],
    description: "Partial scholarship awarded for outstanding academic performance in high school. Focused on cybersecurity, system analysis, and web development."
  },
  {
    id: "kada-bootcamp",
    degree: "Korean-ASEAN Digital Academy (KADA) Bootcamp",
    institution: "ASEAN-Korea Cooperation Fund & KOMINFO Indonesia",
    period: "Aug 2025 - Oct 2025",
    achievements: ["Full-stack Development", "DevOps Practices", "AI Ethics", "Data Security"],
    description: "Participated in a 10-week government-funded digital upskilling program focusing on AI ethics, data security, web & backend development, cloud services, data analysis, CI/CD, and UI/UX design.",
    additionalInfo: "Collaborated in a cross-functional team to deliver a capstone project applying full-stack development and DevOps practices."
  }
];