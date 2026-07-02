export const portfolioConfig = {
  github: {
    username: "ermiHageez",
    apiUrl: "https://api.github.com/users/ermiHageez/repos",
  },

  personal: {
    name: "Ermiyas Eshetu",
    title: "Backend Software Engineer | AI Engineer | ERP Developer",
    tagline: "Building scalable backend systems, AI-powered applications, and enterprise ERP solutions",
    bio: "I'm a Software Engineer from Ethiopia specializing in Backend Development, Enterprise Systems, Artificial Intelligence, and CRM solutions. I currently work on a large-scale ERP system where I contribute to Inventory, HR, DMS, and CRM modules by fixing production issues and implementing new business features.",
    aboutExtended: "Outside of work, I build AI-powered products including local Large Language Models, Retrieval-Augmented Generation (RAG) systems, mobile CRM applications, and microservice architectures. My long-term goal is to build software products that help Ethiopian businesses grow using Artificial Intelligence.",
    email: "ermihaggez@gmail.com",
    location: "Addis Ababa, Ethiopia",
    profileImage: "/ProfileImage.png",
  },

  social: {
    github: "https://github.com/ermiHageez",
    linkedin: "https://linkedin.com/in/ermiHageez",
    twitter: "https://twitter.com/ermiHageez",
    email: "mailto:ermihaggez@gmail.com",
    telegram: "https://t.me/ermiHageez",
    portfolio: "https://ermiyas.dev",
  },

  skills: [
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "Java", "Spring Boot", "FastAPI", "REST APIs", "JWT", "Prisma"],
    },
    {
      category: "Frontend",
      items: ["Angular", "React", "React Native", "Expo", "TypeScript"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "pgvector", "FAISS"],
    },
    {
      category: "AI",
      items: ["LangGraph", "LangChain", "Ollama", "Gemini", "OpenAI APIs", "RAG", "Embeddings", "Multi-Agent Systems", "Prompt Engineering", "Fine Tuning", "n8n", "MCP"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Git", "GitHub Actions", "Railway", "Linux"],
    },
  ],

  experience: [
    {
      title: "Software Engineer (ERP Focused)",
      company: "eTechsc",
      period: "2024 - Present",
      description: "Contributing to a large-scale ERP/CRM platform across multiple enterprise modules.",
    },
  ],

  currentExperience: {
    title: "Software Engineer",
    company: "eTechsc",
    role: "ERP Focused",
    responsibilities: [
      { category: "ERP Development", description: "Core ERP module development and maintenance" },
      { category: "CRM Development", description: "Customer Relationship Management module" },
      { category: "Inventory Management Module", description: "Stock tracking, bin cards, and inventory workflows" },
      { category: "HR Module", description: "Human resources management features" },
      { category: "Document Management System", description: "DMS module development and integration" },
    ],
    achievements: [
      "Fixed multiple production bugs across ERP modules",
      "Built Stock Bin Card feature for inventory tracking",
      "Developed SIV (Stock Issue Voucher) workflows",
      "Developed SR (Stock Requisition) workflows",
      "Added multiple Inventory management features",
      "Collaborated with enterprise development team on cross-module integration",
    ],
  },

  timeline: [
    {
      year: "2024",
      title: "Software Engineer at eTechsc",
      description: "Working on large-scale ERP/CRM platform. Contributing to Inventory, HR, DMS, and CRM modules. Building AI-powered products on the side including RAG systems and fine-tuned LLMs.",
    },
    {
      year: "2023",
      title: "Enterprise Systems & AI Projects",
      description: "Started building enterprise inventory management systems and ERP workflows. Explored AI integration with LangChain, RAG, and multi-agent architectures.",
    },
    {
      year: "2022",
      title: "Full-Stack Development",
      description: "Built full-stack web applications using React, Node.js, and PostgreSQL. Gained hands-on experience with REST API design and database optimization.",
    },
    {
      year: "2021",
      title: "First Open Source Contributions",
      description: "Started contributing to open-source projects. Built first full-stack applications. Discovered passion for backend engineering and AI.",
    },
    {
      year: "2020",
      title: "Started Computer Science",
      description: "Began Bachelor's in Computer Science. Learned programming fundamentals, data structures, and algorithms. Started building web projects.",
    },
  ],

  websites: [
    {
      name: "AddisLead CRM",
      description: "AI-powered CRM designed for Ethiopian businesses.",
      technologies: ["React Native", "Express", "Prisma", "PostgreSQL"],
      status: "In Active Development" as const,
      url: "#",
      github: "https://github.com/ermiHageez/AddisLead",
    },
    {
      name: "HageezAI",
      description: "Published Ollama AI Model for enterprise assistants.",
      technologies: ["Ollama", "Python", "Fine Tuning"],
      status: "Published" as const,
      url: "https://ollama.com/ermihageez/HageezAI:v1",
      github: "#",
    },
    {
      name: "Enterprise Multi-Agent RAG",
      description: "Sales and Marketing AI platform using LangGraph and local LLMs.",
      technologies: ["Python", "FastAPI", "LangGraph", "Ollama"],
      status: "Completed (Version 2)" as const,
      url: "#",
      github: "https://github.com/ermiHageez/RAG",
    },
    {
      name: "Portfolio Website",
      description: "Personal developer portfolio showcasing projects, experience, and AI research.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      status: "Live" as const,
      url: "#",
      github: "#",
    },
  ],

  featuredProjects: [
    {
      name: "AddisLead CRM",
      description: "AI-powered Lead Management CRM designed for Ethiopian businesses.",
      image: "/addisapp.jpg",
      features: [
        "Telegram Lead Capture",
        "AI Lead Analysis",
        "Dashboard Analytics",
        "CRM Pipeline",
        "Customer Management",
        "Mobile Application",
        "AI Market Insights",
      ],
      techStack: ["React Native", "Express", "Prisma", "PostgreSQL", "Gemini AI", "Railway"],
      status: "MVP (78% Complete)",
      github: "https://github.com/ermiHageez/AddisLead",
    },
    {
      name: "eTech Multi-Agent RAG",
      description: "Enterprise AI assistant built using local LLMs and multi-agent architecture.",
      image: null,
      highlights: [
        "6 AI Agents",
        "LangGraph",
        "FAISS",
        "pgvector",
        "Ollama",
        "FastAPI",
        "Marketing Automation",
        "Sales Assistant",
        "41 REST APIs",
        "92 Automated Tests",
      ],
      techStack: ["Python", "FastAPI", "LangGraph", "Ollama", "PostgreSQL", "Docker"],
      github: "https://github.com/ermiHageez/RAG",
    },
    {
      name: "Blog Platform",
      description: "Full-stack blog platform supporting authentication, ratings, likes, comments, search, and AI-ready architecture.",
      image: null,
      techStack: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "AI Models"],
      github: "https://github.com/ermiHageez",
    },
  ],

  aiModels: [
    {
      name: "HageezAI v1",
      description: "A fine-tuned Llama 3.2 (1.2B) model built specifically for Ethiopian enterprise use cases.",
      image: "/photo_2026-07-02_10-51-42.jpg",
      capabilities: [
        "Sales Assistant",
        "Lead Discovery",
        "Marketing Content Generation",
        "Tender Analysis",
        "Customer Support",
      ],
      platform: "Ollama",
      command: "ollama run ermihageez/HageezAI:v1",
      modelLink: "https://ollama.com/ermihageez/HageezAI:v1",
    },
  ],

  certifications: [
    {
      name: "Huawei Seeds for the Future",
      organization: "Huawei",
      issueDate: "2024",
      credentialId: "N/A",
      image: "/Certifications1.jpg",
      link: "/Certifications1.jpg",
    },
    {
      name: "ALX Software Engineering Certificate",
      organization: "ALX Africa",
      issueDate: "2024",
      credentialId: "N/A",
      image: null,
      link: "/alx.pdf",
    },
    
  ],

  resumeUrl: "/Ermiyas_Eshetu_CV.pdf",
};
