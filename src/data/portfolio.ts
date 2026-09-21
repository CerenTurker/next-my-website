export const portfolio = {
  profile: {
    name: "Ceren Demir",
    role: "Backend Developer",
    location: "İzmir, Türkiye",
    email: "ceren.turker89@gmail.com",
    github: "https://github.com/CerenTurker",
    linkedin: "https://linkedin.com/in/cerenturker",
    availability: "Open to new opportunities",
    image: "/images/ceren-demir.jpg",
  },

  hero: {
  eyebrow: "Backend Developer",
  title: "Building reliable backend systems for enterprise products.",
  description:
    "I am a backend-focused software developer with professional experience in PHP-based systems, Moodle LMS platforms, REST APIs and database-driven applications.",
},

  navigation: [
  { label: "Home", href: "#home" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
],

  stats: [
    { value: "5+", label: "Years of professional experience" },
    { value: "3", label: "Professional software roles" },
    { value: "10+", label: "Backend technologies and tools" },
  ],

  experience: [
    {
      period: "July 2023 — Present",
      company: "MTR Bilişim",
      role: "Software Developer",
      description:
        "Contributing to enterprise-level educational platforms and Moodle-based learning management systems.",
      responsibilities: [
        "Developing and maintaining Moodle-based LMS platforms",
        "Building custom Moodle plugins and backend modules",
        "Managing users, roles, courses and permission workflows",
        "Designing and optimizing MySQL-backed features",
        "Refactoring legacy PHP code and resolving production issues",
        "Collaborating with product and content teams",
      ],
      technologies: [
        "PHP",
        "Moodle",
        "MySQL",
        "JavaScript",
        "Git",
      ],
      current: true,
    },
    {
      period: "June 2022 — July 2023",
      company: "ShipsGo",
      role: "Backend Developer",
      description:
        "Worked on data-driven backend systems and reporting solutions in the maritime logistics domain.",
      responsibilities: [
        "Developing analytics and reporting backend features",
        "Presenting customer data through charts, tables and PDF reports",
        "Writing tests for controller layers",
        "Developing CRM-related backend functionality",
        "Integrating third-party REST APIs",
      ],
      technologies: [
        "Laravel",
        "PHP",
        "JavaScript",
        "MySQL",
        "REST API",
      ],
      current: false,
    },
    {
      period: "April 2021 — February 2022",
      company: "AdresGezgini",
      role: "Full Stack Developer",
      description:
        "Developed custom web solutions and CMS-based applications for local and international clients.",
      responsibilities: [
        "Designing and developing corporate websites",
        "Building custom CMS solutions",
        "Contributing to CRM-focused R&D projects",
        "Developing UX-oriented web applications",
      ],
      technologies: [
        "PHP",
        "CodeIgniter",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
      ],
      current: false,
    },
  ],

  stack: [
    {
      category: "Backend",
      description:
        "Languages and frameworks used to build backend services and enterprise applications.",
      items: [
        "PHP",
        "Laravel",
        "CodeIgniter",
        "Node.js",
        "TypeScript",
        "NestJS",
        "Go",
        "Moodle",
      ],
    },
    {
      category: "Database",
      description:
        "Relational database systems used in data-driven backend applications.",
      items: [
        "MySQL",
        "PostgreSQL",
        "Database Design",
        "Query Optimization",
        "Data Consistency",
      ],
    },
    {
      category: "Architecture",
      description:
        "Development practices used to keep applications maintainable and extensible.",
      items: [
        "REST APIs",
        "Authentication",
        "Authorization",
        "RBAC",
        "Clean Architecture",
        "Repository Pattern",
        "Service Layer",
      ],
    },
    {
      category: "Tools",
      description:
        "Tools used throughout development, testing and delivery workflows.",
      items: [
        "Git",
        "Docker",
        "Swagger",
        "Postman",
        "Composer",
        "npm",
        "Linux",
      ],
    },
  ],
  projects: [
  {
    title: "Enterprise LMS Development",
    category: "Professional Work",
    description:
      "Backend development for enterprise Moodle-based learning platforms, including custom plugins, role and permission systems, course workflows and database-driven modules.",
    technologies: [
      "PHP",
      "Moodle",
      "MySQL",
      "JavaScript",
    ],
    highlights: [
      "Custom Moodle plugin development",
      "Role and permission workflows",
      "Legacy code refactoring",
    ],
    href: null,
    featured: true,
  },
  {
    title: "Maritime Analytics & Reporting",
    category: "Professional Work",
    description:
      "Data-driven backend features for maritime logistics products, including analytics dashboards, PDF reports, CRM functionality and third-party API integrations.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
    ],
    highlights: [
      "Customer analytics",
      "PDF report generation",
      "Third-party API integration",
    ],
    href: null,
    featured: true,
  },
  {
    title: "Oyun Çarkı",
    category: "Personal Project",
    description:
      "A free party games platform in Turkish for friends, couples and families. Games run directly in the browser on phone, tablet or desktop, with customizable question and task lists and online multiplayer support.",
    technologies: [
      "Next.js",
      "React",
      "Vercel",
    ],
    highlights: [
      "Free to play, no download or sign-up required",
      "Works across phone, tablet and desktop",
      "Online multiplayer and customizable game content",
    ],
    href: "https://www.oyuncarki.com/",
    featured: true,
  },
  {
    title: "Akl Law",
    category: "Freelance Website",
    description:
      "Corporate web presence developed for a professional legal services company with a clear and accessible content structure.",
    technologies: [
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Corporate website",
      "Responsive interface",
      "Content-focused structure",
    ],
    href: "https://akl-law.com/",
    featured: false,
  },
  {
    title: "Kano Marine",
    category: "Freelance Website",
    description:
      "A corporate website created for a maritime business, presenting company services and industry-focused content.",
    technologies: [
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Maritime industry",
      "Corporate content",
      "Responsive pages",
    ],
    href: "https://kanomarine.com/",
    featured: false,
  },
  {
    title: "Malton London",
    category: "Freelance Website",
    description:
      "An international-facing business website built with reusable content sections and responsive layouts.",
    technologies: [
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    highlights: [
      "International client",
      "Responsive design",
      "Content management",
    ],
    href: "https://maltonlondon.com/",
    featured: false,
  },
  {
    title: "LEBIS Conference",
    category: "Freelance Website",
    description:
      "Conference website developed to communicate event information, speakers and programme content.",
    technologies: [
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Conference platform",
      "Event content",
      "Responsive structure",
    ],
    href: "https://lebisconference.com/",
    featured: false,
  },
],
} as const;