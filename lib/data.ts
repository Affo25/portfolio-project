export const personalInfo = {
  name: "Afaq Ahmad",
  title: "Full Stack Mobile Developer",
  location: "Lahore, Pakistan",
  email: "afaq.affo17@gmail.com",
  phone: "+92 320 6475636",
  linkedin: "https://www.linkedin.com/in/afaq-ahmad-a684411b0",
  portfolio: "https://afaq-portfolio-nine.vercel.app/",
  github: "https://github.com",
  resumeUrl:
    "https://drive.google.com/file/d/10KBT3Y0XzkU9q0K9-B7cR-Wp2kCeA2v9/view?usp=drive_link",
  avatarUrl: "/avatar.png",
  summary:
    "Full Stack Mobile Developer with strong experience in building scalable, high-performance applications across both frontend and backend systems. Skilled in mobile application development and backend technologies including Node.js, .NET Core, and FastAPI. Experienced in clean architecture, REST APIs, secure backend development, and modern mobile technologies. Passionate about building innovative digital products with exceptional user experiences.",
  tagline: "I build mobile apps and the backends that power them.",
};

export const stats = [
  { label: "Years of experience", value: 3, suffix: "+" },
  { label: "Apps published", value: 5, suffix: "" },
  { label: "APIs shipped", value: 15, suffix: "+" },
  { label: "Technologies used", value: 12, suffix: "+" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  responsibilities: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Mobile Developer",
    company: "Code5 Technologies",
    period: "January 2025 — Present",
    location: "Lahore, Pakistan",
    current: true,
    responsibilities: [
      "Develop scalable mobile applications using Flutter.",
      "Build and maintain backend APIs using Node.js, .NET Core, and FastAPI.",
      "Implement clean architecture and state management solutions.",
      "Collaborate with teams to deliver high-quality applications.",
      "Optimize performance, security, and user experience.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "VU360 Solution",
    period: "February 2024 — May 2024",
    location: "Lahore, Pakistan",
    current: false,
    responsibilities: [
      "Built and maintained Flutter mobile applications as part of the development team.",
      "Developed the Kametia app with API integration, state management, and a focus on clean UI.",
      "Contributed to Hisab Rakh with expense tracking features, REST API integration, and state management.",
      "Integrated backend APIs and implemented state management for efficient data flow across app screens.",
      "Collaborated with senior developers to implement features, fix bugs, and deliver production-ready builds.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science",
    school: "PMAS Arid Agriculture University, Rawalpindi",
    period: "2019 — 2023",
    detail: "GPA: 3.7",
  },
];

export type SkillGroup = {
  category: string;
  icon: "smartphone" | "server" | "layout" | "wrench";
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Mobile Development",
    icon: "smartphone",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 92 },
      { name: "React Native", level: 80 },
      { name: "Java / Kotlin", level: 72 },
      { name: "SwiftUI", level: 65 },
    ],
  },
  {
    category: "Backend Development",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "ASP.NET Core", level: 82 },
      { name: "C++", level: 72 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Frontend Development",
    icon: "layout",
    skills: [
      { name: "React.js", level: 78 },
      { name: "Next.js", level: 65 },
      { name: "WordPress", level: 70 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "wrench",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  linkLabel: string;
  features: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Jaaydaad Real Estate App",
    description:
      "A real estate platform where users can buy, sell, and rent properties seamlessly.",
    technologies: ["Flutter", "Dart", ".NET Core APIs"],
    link: "https://play.google.com/store/apps/details?id=com.jaaydaad.real_estate_app",
    linkLabel: "View on Google Play",
    image: "/projects/jaaydaad-app.webp",
    features: [
      "Property buying and selling",
      "Rental listings",
      "Search and filtering",
      "Secure backend integration",
    ],
  },
  {
    name: "Raya Hotel Booking App",
    description:
      "A hotel booking application that enables users to discover and reserve hotels according to their preferences.",
    technologies: ["Flutter", ".NET Core APIs", "C#"],
    link: "https://play.google.com/store/apps/details?id=com.rayaapp.app",
    linkLabel: "View on Google Play",
    image: "/projects/raye.webp",
    features: [
      "Hotel discovery",
      "Online booking",
      "User-friendly interface",
      "Secure API integration",
    ],
  },
  {
    name: "InvoicePro",
    description:
      "A modern invoicing and billing application designed to simplify business financial operations. Create professional invoices, manage customers, track payments, and maintain organized billing records with automated generation and detailed reporting.",
    technologies: ["Flutter", "Dart", "Node.js"],
    link: "https://play.google.com/store/apps/details?id=com.invoicepro.app",
    linkLabel: "View on Google Play",
    image: "/projects/invoicepro-app.webp",
    features: [
      "Professional invoice creation",
      "Customer management",
      "Payment tracking",
      "Automated billing & reports",
    ],
  },
  {
    name: "EazyManage",
    description:
      "A smart expense tracking application that helps individuals and businesses manage finances with ease. Record income and expenses, categorize transactions, monitor budgets, and generate insightful financial reports in real time.",
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.code5Tech.expenses_trackers_app",
    linkLabel: "View on Google Play",
    image: "/projects/eazymanage-app.webp",
    features: [
      "Income & expense tracking",
      "Transaction categorization",
      "Budget monitoring",
      "Financial reports & analytics",
    ],
  },
  {
    name: "WellNet Dragon App",
    description:
      "A Flutter mobile application for the WellNet DragonPro internet distribution platform, enabling users to manage ISP services, track connectivity, view account details, and access support features on the go with a smooth native experience.",
    technologies: ["Flutter", "Dart", "Node.js"],
    link: "https://dashboard.d.dragonpro.pk/login",
    linkLabel: "View platform portal",
    image: "/projects/image.png",
    features: [
      "ISP service management",
      "Account & connectivity tracking",
      "Support & ticket access",
      "API-driven mobile experience",
    ],
  },
  {
    name: "POS Pharmacies Web Portal",
    description:
      "A full-stack pharmacy point-of-sale web portal built for managing pharmacy operations online. Enables secure staff login, inventory control, sales processing, and streamlined business workflows through a modern web dashboard.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    link: "https://pos-opal-ten.vercel.app/",
    linkLabel: "Visit live portal",
    image: "/projects/pos-pharmacies.png",
    features: [
      "Secure authentication",
      "Pharmacy POS management",
      "Inventory & sales tracking",
      "Modern responsive dashboard",
    ],
  },
  {
    name: "IMS Leads Management Portal",
    description:
      "A full-stack web portal for lead generation and management, built to help teams capture, track, and organize leads efficiently. Features secure authentication and a clean dashboard for managing the full lead lifecycle.",
    technologies: ["Next.js", "Node.js", "React.js"],
    link: "https://ims-pk.vercel.app/signin",
    linkLabel: "Visit live portal",
    image: "/projects/ims-leads.png",
    features: [
      "Lead generation & capture",
      "Lead tracking & management",
      "Secure user authentication",
      "Modern responsive UI",
    ],
  },
  {
    name: "Jaaydaad Property Management Portal",
    description:
      "A full-stack web portal for the Jaaydaad real estate platform, enabling dealers and admins to manage properties, societies, dealers, users, and cities through a centralized dashboard powered by a .NET Core Web API backend.",
    technologies: [".NET Core Web API", "Angular", "C#"],
    link: "https://portal.jaaydaad.net/login",
    linkLabel: "Visit live portal",
    image: "/projects/jaaydaad-portal.png",
    features: [
      "Property & society management",
      "Dealer & user administration",
      "City & property type controls",
      "Search, filters & data tables",
    ],
  },
  {
    name: "DragonPro Internet Distribution Portal",
    description:
      "A full-stack ISP management web portal for internet distribution operations. Enables customer onboarding, sales ID registration, employee management, support tickets, SAS Radius user profiles, and area-based service provisioning through a centralized admin dashboard.",
    technologies: ["React.js", "Node.js"],
    link: "https://dashboard.d.dragonpro.pk/login",
    linkLabel: "Visit live portal",
    image: "/projects/dragonpro-portal.png",
    features: [
      "Customer & sales ID management",
      "ISP service registration",
      "Support tickets & leads",
      "Area & connectivity controls",
    ],
  },
  {
    name: "Raye Hotel Booking Admin Portal",
    description:
      "A full-stack admin web portal for the Raye hotel booking platform, enabling teams to manage hotels, rooms, apartments, bookings, and users through a centralized dashboard powered by a .NET Core backend and Angular frontend.",
    technologies: [".NET Core", "Angular", "C#"],
    link: "http://admin.rayekamkiraye.com/hotels",
    linkLabel: "Visit live portal",
    image: "/projects/raye-portal.png",
    features: [
      "Hotel & room management",
      "Booking administration",
      "User management",
      "Search, filters & listings",
    ],
  },
];

export const achievements = [
  { title: "Full Stack Mobile Developer", icon: "layers" },
  { title: "Flutter Specialist", icon: "smartphone" },
  { title: "Backend API Development", icon: "server" },
  { title: "Clean Architecture Expert", icon: "boxes" },
  { title: "Cross-Platform App Development", icon: "shuffle" },
  { title: "Modern Mobile UI/UX", icon: "sparkles" },
] as const;

export const services = [
  {
    title: "Flutter App Development",
    description:
      "Native-feeling, high-performance iOS and Android apps built from a single Flutter codebase.",
    icon: "smartphone",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end product builds — from mobile UI down to database schema and API design.",
    icon: "layers",
  },
  {
    title: "Backend API Development",
    description:
      "Secure, well-documented REST APIs built with Node.js, FastAPI, or ASP.NET Core.",
    icon: "server",
  },
  {
    title: "Cross-Platform Solutions",
    description:
      "One codebase, every device — reducing engineering overhead without compromising quality.",
    icon: "shuffle",
  },
  {
    title: "App Performance Optimization",
    description:
      "Profiling and tuning apps for faster load times, smoother animations, and lower memory use.",
    icon: "gauge",
  },
  {
    title: "Deployment & DevOps",
    description:
      "Containerized deployments, CI pipelines, and release management with Docker and Git.",
    icon: "cloud",
  },
] as const;

export const interests = [
  { label: "Coding", icon: "code" },
  { label: "Traveling", icon: "plane" },
  { label: "Cricket", icon: "target" },
  { label: "Hiking", icon: "mountain" },
  { label: "Watching Movies", icon: "clapperboard" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
