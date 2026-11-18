export const personalInfo = {
  name: "Daniel Hailu",
  role: "Full-Stack Web & Mobile App Developer",
  tagline: "Software Engineer specializing in fluid cross-platform mobile apps (React Native) and scalable web systems (React, Node.js, Laravel).",
  location: "Addis Ababa, Ethiopia",
  phone: "+251 963 173 142",
  timezone: "EAT (UTC+3)",
  email: "danihailhabt321@gmail.com",
  github: "https://github.com/daniman2115",
  linkedin: "https://linkedin.com/in/daniel-hailu-4a7bb741a",
  resumePath: "/Daniel_Hailu_CV_Updated.pdf",
  profileImage: "/prof2.jpg",
  availability: "Available for Full-Time Roles & High-Impact Contracts",
  yearsExperience: "3+",
  shippedProjects: "5+",
  education: "B.Sc. in Software Engineering — Debre Berhan University",
  roles: [
    "Full-Stack Web Developer",
    "React Native Mobile Engineer",
    "Node.js & Express Specialist",
    "Laravel Backend Architect",
    "Real-Time Systems Builder",
  ],
  bio: "Software Engineering graduate with proven hands-on experience building full-stack web and mobile applications using React, React Native, Node.js, Laravel, PostgreSQL, and MongoDB. Experienced working in Agile Scrum teams at Fanaye Technologies, designing secure REST APIs, and delivering 60 FPS mobile user experiences.",
}

export const metrics = [
  { label: "Years Experience", value: "1+", detail: "Full-stack & mobile engineering" },
  { label: "Shipped Projects", value: "5+", detail: "Web apps, APIs & mobile builds" },
  { label: "Mobile Performance", value: "60 FPS", detail: "Native gestures & fluid touch" },
  { label: "API Latency Focus", value: "<100ms", detail: "Optimized queries & caching" },
]

export const experience = [
  {
    role: "Full Stack Web & Mobile Application Developer",
    company: "Fanaye Technologies",
    period: "03/2025 – 06/2025",
    type: "Production Experience",
    description:
      "Spearheaded web and mobile development across high-traffic platforms including a Social Media platform and Chamber of Commerce application.",
    achievements: [
      "Engineered cross-platform mobile interfaces in React Native with responsive gesture navigation.",
      "Designed and implemented RESTful APIs using Node.js and Laravel with role-based access control (RBAC).",
      "Built resilient backend services for content management, user authentication, and inventory tracking.",
      "Collaborated in Agile Scrum sprints with Git/GitHub, code reviews, and automated testing.",
    ],
    tech: ["React", "React Native", "Node.js", "Laravel", "MySQL", "REST APIs", "Git"],
  },
]

export const educationAndCertifications = [
  {
    title: "Bachelor of Degree in Software Engineering",
    institution: "Debre Berhan University",
    period: "2022 – 2026",
    badge: "Degree",
    detail: "Awarded Certification of Appreciation for Final Year Project (AIMDS).",
  },
  {
    title: "Programming Fundamentals Nanodegree",
    institution: "Udacity",
    period: "2024",
    badge: "Certified",
    detail: "Core computer science principles, data structures, and algorithmic problem-solving.",
  },
]

export const mobileProject = {
  title: "CineFlow — React Native Movie App",
  subtitle: "Cross-Platform Mobile Entertainment Discovery",
  description:
    "A production-grade mobile app built with React Native and Expo. Seamlessly discovers movies, trending shows, cast breakdowns, and trailers with real-time TMDb synchronization and persistent offline watchlists.",
  tech: ["React Native", "Expo", "TMDb API", "Tailwind CSS", "Context API", "AsyncStorage"],
  image: "/movie-app.png",
  github: "https://github.com/daniman2115/react-native-movie-app",
  live: "https://github.com/daniman2115/react-native-movie-app",
  screens: [
    {
      id: "browse",
      name: "Discover Feed",
      description: "Infinite scroll feed with category filters, trending carousels, and instant debounce search.",
      badge: "UI/UX",
    },
    {
      id: "details",
      name: "Movie Details & Cast",
      description: "Dynamic routing with TMDb API integration, HD trailer playback, and actor biographies.",
      badge: "API Sync",
    },
    {
      id: "watchlist",
      name: "Offline Watchlist",
      description: "Local storage persistence with AsyncStorage for seamless offline bookmarking.",
      badge: "Offline Ready",
    },
  ],
  highlights: [
    "Fluid 60 FPS gesture handling and native touch feedback on iOS and Android",
    "TMDb REST API integration with real-time rating and poster streaming",
    "Cross-platform compilation targeting both Android and iOS devices",
    "Clean modular architecture using Expo CLI and scalable folder structure",
  ],
}

export const projects = [
  {
    id: "movie-app",
    title: "CineFlow Mobile App",
    category: "Mobile",
    badge: "React Native (iOS & Android)",
    description:
      "A responsive mobile discovery app featuring instant search, live TMDb ratings, trailers, and offline watchlists built with clean gesture navigation.",
    tags: ["React Native", "Expo", "TMDb API", "Tailwind", "AsyncStorage"],
    github: "https://github.com/daniman2115/react-native-movie-app",
    live: "https://github.com/daniman2115/react-native-movie-app",
    image: "/movie-app.png",
    featured: true,
    isMobile: true,
    stats: "60 FPS · Cross-Platform",
  },
  {
    id: "aimds",
    title: "Agricultural Inputs Management & Distribution System",
    category: "Full-Stack",
    badge: "Award-Winning Enterprise Platform",
    description:
      "End-to-end management platform for agricultural cooperatives (Awarded Certification of Appreciation). Handles seed & fertilizer procurement, automated warehouse stock tracking, order workflows, and real-time dashboards.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Material UI", "REST API"],
    github: "https://github.com/daniman2115",
    live: "https://agri-demo.onrender.com/",
    image: "/AIMDS.png",
    featured: true,
    isMobile: false,
    stats: "Awarded University Honor",
  },
  {
    id: "realtime-chat",
    title: "OmniChat — Real-Time Messaging Platform",
    category: "Real-Time",
    badge: "Full-Stack WebSockets",
    description:
      "Scalable real-time messaging application with live presence indicators, typing broadcast, and instant socket sync. Engineered with horizontal scaling and resilient connection recovery.",
    tags: ["React", "Socket.io", "Node.js", "Express", "Google API", "Render"],
    github: "https://github.com/daniman2115/chatbot-with-react-css",
    live: "https://chatbot-with-react-css.onrender.com",
    image: "/chatbot.png",
    featured: true,
    isMobile: false,
    stats: "<50ms Socket Broadcast",
  },
  {
    id: "chamber-commerce-social",
    title: "Chamber of Commerce & Social Media Platforms",
    category: "Full-Stack",
    badge: "Enterprise Web & Mobile",
    description:
      "Developed at Fanaye Technologies: A robust commerce portal and social application featuring Laravel backend services, MySQL transactions, role-based permissions, and React Native frontend views.",
    tags: ["Laravel", "PHP", "MySQL", "React Native", "REST API", "RBAC"],
    github: "https://github.com/daniman2115",
    live: "https://github.com/daniman2115",
    image: "/AIMDS.png",
    featured: false,
    isMobile: false,
    stats: "Production Deployed",
  },
]

export const skillCategories = [
  {
    category: "Mobile App Development",
    iconName: "Smartphone",
    accent: "from-blue-500 to-cyan-400",
    glow: "rgba(59, 130, 246, 0.15)",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    description: "Engineering cross-platform iOS & Android mobile apps with native feel, 60fps animations, and offline synchronization.",
    skills: [
      { name: "React Native", level: "Expert", experience: "Production Ready" },
      { name: "Expo Ecosystem", level: "Advanced", experience: "CLI & EAS Build" },
      { name: "Mobile UI / UX", level: "Advanced", experience: "Touch & Gestures" },
      { name: "Offline Storage", level: "Advanced", experience: "AsyncStorage / Cache" },
      { name: "Native APIs Integration", level: "Proficient", experience: "Camera, Geo, Push" },
    ],
  },
  {
    category: "Frontend Web Architecture",
    iconName: "Globe",
    accent: "from-violet-500 to-indigo-400",
    glow: "rgba(139, 92, 246, 0.15)",
    badgeColor: "border-violet-500/30 text-violet-400 bg-violet-500/10",
    description: "Crafting highly responsive, accessible, and blazingly fast user interfaces with modern component architectures.",
    skills: [
      { name: "React 19 & Next.js", level: "Expert", experience: "Modern Hooks & SSR" },
      { name: "Tailwind CSS v4", level: "Expert", experience: "Design Systems" },
      { name: "State Architecture", level: "Advanced", experience: "Context & Redux" },
      { name: "JavaScript (ES6+) / TS", level: "Expert", experience: "Clean Patterns" },
      { name: "Responsive Layouts", level: "Expert", experience: "Pixel-Perfect UX" },
    ],
  },
  {
    category: "Backend & Real-Time APIs",
    iconName: "Server",
    accent: "from-emerald-500 to-teal-400",
    glow: "rgba(16, 185, 129, 0.15)",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    description: "Designing robust, secure, and performant server-side architectures, RESTful APIs, and real-time WebSocket pipelines.",
    skills: [
      { name: "Node.js & Express", level: "Expert", experience: "REST & Middleware" },
      { name: "Laravel (PHP)", level: "Advanced", experience: "MVC, Eloquent, RBAC" },
      { name: "Socket.io & WebSockets", level: "Advanced", experience: "Real-Time Broadcast" },
      { name: "Authentication", level: "Advanced", experience: "JWT, OAuth, Cookies" },
      { name: "Email Services", level: "Advanced", experience: "Nodemailer & SMTP" },
    ],
  },
  {
    category: "Databases & Cloud DevOps",
    iconName: "Database",
    accent: "from-amber-500 to-orange-400",
    glow: "rgba(245, 158, 11, 0.15)",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    description: "Reliable database modeling, indexing, and seamless deployment pipelines for production stability.",
    skills: [
      { name: "PostgreSQL & MySQL", level: "Advanced", experience: "Relational Modeling" },
      { name: "MongoDB & Mongoose", level: "Expert", experience: "Aggregation & Indexes" },
      { name: "Git & GitHub Workflows", level: "Expert", experience: "Agile / Scrum CI" },
      { name: "Cloud & Deployment", level: "Proficient", experience: "Render & Cloud Hosts" },
      { name: "RESTful API Security", level: "Advanced", experience: "CORS & Validation" },
    ],
  },
]

export const engineeringProcess = [
  {
    step: "01",
    title: "Architecture & System Modeling",
    description:
      "Translating requirements into database schemas, API contracts, mobile navigation hierarchies, and scalable system blueprints before writing code.",
    icon: "Layers",
  },
  {
    step: "02",
    title: "High-Performance Development",
    description:
      "Writing clean, maintainable code across both web (React) and mobile (React Native) with modular components, design tokens, and robust error handling.",
    icon: "Code2",
  },
  {
    step: "03",
    title: "Real-Time & API Integration",
    description:
      "Connecting clients to secure REST or WebSocket endpoints with low latency, token-based authentication, and optimized data serialization.",
    icon: "Zap",
  },
  {
    step: "04",
    title: "Testing, Optimization & Launch",
    description:
      "Ensuring 60fps mobile transitions, zero-downtime deployments on cloud platforms (Render), and automated health checks.",
    icon: "Shield",
  },
]

export const terminalResponses = {
  help: [
    "Available commands:",
    "  • bio        - Read a quick summary about Daniel",
    "  • experience - View production work at Fanaye Technologies",
    "  • stack      - View core tech stack & frameworks",
    "  • mobile     - Review React Native mobile experience",
    "  • projects   - List shipped featured projects",
    "  • education  - View Software Engineering degree & certifications",
    "  • contact    - Get email, phone, location, and social links",
    "  • hire       - Reasons to bring Daniel on your team",
    "  • clear      - Clear terminal screen",
  ],
  bio: [
    "Daniel Hailu is a Full-Stack Web & Mobile App Developer based in Addis Ababa, Ethiopia.",
    "B.Sc. graduate in Software Engineering from Debre Berhan University.",
    "Specializes in cross-platform mobile apps (React Native) and scalable web platforms (React, Node.js, Express, Laravel, PostgreSQL, MongoDB).",
    "Experienced in Agile Scrum teams at Fanaye Technologies, building production web & mobile systems.",
  ],
  experience: [
    "Full Stack Web & Mobile Application Developer — Fanaye Technologies (03/2025 – 06/2025):",
    "  • Built full-stack web and mobile applications using React, React Native, Node.js, Laravel, and MySQL.",
    "  • Engineered Chamber of Commerce web & mobile portal and social media application backend.",
    "  • Designed RESTful APIs, role-based access control (RBAC), and inventory tracking.",
  ],
  stack: [
    "Frontend:  React 19, Next.js, Tailwind CSS v4, JavaScript (ES6+), HTML5/CSS3",
    "Mobile:    React Native, Expo, AsyncStorage, Native Gestures, Mobile UI/UX",
    "Backend:   Node.js, Express, Laravel (PHP), REST APIs, Socket.io, GraphQL",
    "Databases: PostgreSQL, MongoDB, MySQL",
    "DevOps:    Git/GitHub, CI/CD, Render, Agile Scrum, Docker basics",
  ],
  mobile: [
    "React Native Specialist:",
    "  • Cross-platform iOS & Android mobile applications via Expo & React Native CLI",
    "  • Offline-first architectures using local caches & persistent storage",
    "  • Fluid 60fps micro-interactions, responsive touch targets, and dark-mode native themes",
    "  • Examples: CineFlow Movie App (TMDb sync) & Chamber of Commerce Mobile App",
  ],
  projects: [
    "1. CineFlow Movie App — React Native (Expo) + TMDb API (Mobile)",
    "2. AIMDS Enterprise Platform — Full-Stack MERN (Awarded Certification of Appreciation)",
    "3. OmniChat Messenger — React + Socket.io Real-Time Engine (Render Cloud)",
    "4. Chamber of Commerce & Social Media Platforms — Laravel + React Native + MySQL",
  ],
  education: [
    "• B.Sc. in Software Engineering — Debre Berhan University (2022 – 2026)",
    "• Certification of Appreciation — AIMDS Final Year Project",
    "• Programming Fundamentals Nanodegree — Udacity (2024)",
    "• Languages: English (Proficient), Amharic (Native)",
  ],
  contact: [
    "Email:    danihailhabt321@gmail.com",
    "Phone:    +251 963 173 142",
    "GitHub:   https://github.com/daniman2115",
    "LinkedIn: https://linkedin.com/in/daniel-hailu-4a7bb741a",
    "Location: Addis Ababa, Ethiopia (UTC+3)",
    "Status:   Available for Full-Time & High-Impact Contracts",
  ],
  hire: [
    "Why hire Daniel Hailu?",
    "✓ Dual Competency: Deliver both the web app and the native mobile app from one engineer.",
    "✓ Production Experience: Built real software for Fanaye Technologies and university cooperatives.",
    "✓ End-to-End Ownership: From database schema design to pixel-perfect mobile animations.",
    "✓ Real-Time Mastery: Proven experience in WebSockets, live messaging, and event-driven architecture.",
    "✓ Reliable & Communicative: Rapid turnaround, clean git history, and dedication to code quality.",
  ],
}
