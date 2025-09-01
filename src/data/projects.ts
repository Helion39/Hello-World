import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "digital-forensics",
    title: "Digital Forensic Case Investigations and Incident Analysis",
    category: "Cybersecurity & Analysis",
    description: "Investigated cases involving financial fraud, data exfiltration, and malware infections.",
    image: "/projects/Cybersecurity Audit PT. Sequre Gate One1.png",
    images: [
      "/projects/Cybersecurity Audit PT. Sequre Gate One1.png",
      "/projects/Cybersecurity Audit PT. Sequre Gate One2.png"
    ],
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
    image: "/projects/FoodOrder1.png",
    images: [
      "/projects/FoodOrder1.png",
      "/projects/FoodOrder2.png"
    ],
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
  },
  {
    id: "smart-surfing",
    title: "Social Project: Smart Surfing",
    category: "Project Management & Social Initiative",
    description: "Promoting Internet Safety and Digital Literacy in Local Communities.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    period: "2024",
    overview: "As the Project Manager for Smart Surfing, a social initiative organized by my team in collaboration with President University and CSR partners, I led a team of 10 to educate students in Pangalengan, Bandung, on internet safety and digital literacy. We designed interactive activities— including mini-games, scenario-based discussions, and a digital literacy quiz—to engage participants and reinforce learning. The initiative achieved strong outcomes, with students scoring an average of 80% on post-activity quizzes, demonstrating effective knowledge transfer. My role involved planning content, facilitating sessions, and contributing creative ideas to make the program more relatable and engaging for the local students.",
    role: "Project Manager",
    technologies: ["Project Management", "Public Speaking", "Community Engagement", "Digital Literacy"],
    details: ["Led a team of 10", "Educated students on internet safety and digital literacy", "Designed interactive activities (mini-games, discussions, quizzes)", "Planned content and facilitated sessions"]
  },
  {
    id: "soona-gift-box",
    title: "Economic Survival Project: Soona",
    category: "Entrepreneurship & Marketing",
    description: "Co-founded a custom gift box service as part of a university-wide business simulation.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    period: "2023",
    overview: "Participated in the Economic Survival Project, a university-wide business simulation where students developed and ran a real business from scratch. Co-founded Soona, a gift box service aimed at filling the gap in Cikarang’s gifting market. I actively contributed to product development and marketing efforts, including promotional broadcasts on WhatsApp, managing Instagram content, and handling booth activities during a university-wide exhibition with 100+ attendees. Soona operates on a pre-order basis with free delivery to President University students, and we committed to delivering high-quality, elegant gift experiences. This project strengthened my entrepreneurial mindset, customer engagement skills, and practical understanding of running a small business end-to-end.",
    role: "Co-founder, Product & Marketing",
    technologies: ["Entrepreneurship", "Marketing", "Customer Engagement", "Product Development"],
    details: ["Co-founded a gift box service", "Contributed to product development and marketing", "Managed promotional broadcasts and social media", "Handled booth activities at a university exhibition"]
  }
];