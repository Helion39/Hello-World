import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    description: "Developed a personal portfolio website to showcase my skills and projects.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    period: "2024",
    overview: "Designed and built a responsive personal portfolio website from scratch using modern frontend technologies. The site features a clean design, smooth animations, and detailed descriptions of my projects and experiences. This project demonstrates my proficiency in building web applications with React and TypeScript, and styling with Tailwind CSS.",
    role: "Developer",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    details: ["Built with React and TypeScript", "Styled with Tailwind CSS", "Responsive design for mobile and desktop", "Deployed using Netlify"]
  },
  {
    id: "digital-forensics",
    title: "Digital Forensic Case Investigations and Incident Analysis",
    category: "Cybersecurity & Analysis",
    description: "Investigated cases involving financial fraud, data exfiltration, and malware infections.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    period: "2025",
    overview: "Worked as part of a team to investigate cases involving financial fraud, data exfiltration, and malware infections. Recovered deleted and hidden files, analyzed network traffic (PCAPs), extracted steganographic data, and traced user activities. Collaborated using tools like Wireshark, Network Miner, and VirusTotal to uncover digital evidence, reconstruct timelines, and assess criminal intent.",
    role: "Team Member / Digital Forensics Investigator",
    technologies: ["Wireshark", "Network Miner", "VirusTotal", "Steganography", "PCAP Analysis"],
    details: ["Recovered deleted and hidden files", "Analyzed network traffic (PCAPs)", "Extracted steganographic data", "Traced user activities", "Uncovered digital evidence, reconstructed timelines, and assessed criminal intent"]
  },
  {
    id: "food-ordering",
    title: "Food Ordering Website",
    category: "Full-Stack Development",
    description: "Developed a functional food ordering website using PHP and MySQL.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    period: "2024",
    overview: "Developed a functional food ordering website using PHP and MySQL, featuring a product listing page, order placement system, and basic database integration for managing items and transactions. This project enhanced my understanding of full-stack web development, including frontend design, server-side scripting, and database management, while also strengthening my ability to build and connect user-friendly interfaces with backend systems.",
    role: "Developer",
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    details: ["Developed product listing page", "Implemented order placement system", "Integrated database for managing items and transactions"]
  },
  {
    id: "chatzing-whatsapp-clone",
    title: "Chatzing – Android-Based WhatsApp Clone",
    category: "Mobile Development",
    description: "Built a mobile chat application using Android Studio and Firebase, replicating key WhatsApp features.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    period: "2024",
    overview: "Built a mobile chat application using Android Studio and Firebase, replicating key WhatsApp features. Independently developed and integrated additional modules including a camera feature for photo sharing, Bluetooth functionality for device connectivity, and a compass tool using Android's SensorManager. This project strengthened my abilities in Android development, real-time communication, and hardware sensor integration.",
    role: "Developer",
    technologies: ["Java", "Android Studio", "Firebase", "Bluetooth", "SensorManager"],
    details: ["Replicated key WhatsApp features", "Integrated camera for photo sharing", "Added Bluetooth functionality for device connectivity", "Implemented a compass tool using SensorManager"]
  }
];