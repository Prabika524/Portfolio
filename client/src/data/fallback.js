import heroImage from "../assets/hero.png";

export const fallbackProfile = {
  name: "Prabika Rai",
  role: "Software Engineering Student specializing in Quality Assurance",
  subtitle: "B.Sc. Software Engineering — Year (2025–2028)",
  greeting: "Good Afternoon! – Hope you are doing well!",
  tagline: "I build quality solutions and ensure they work flawlessly through rigorous testing.",
  bio:
    "I am a Software Engineering student passionate about building web applications, exploring data, and ensuring quality through testing.",
  bioParagraphs: [
    "I'm Prabika Rai, a Software Engineering student with a passion for Quality Assurance and frontend development. I focus on building user-friendly interfaces and ensuring software quality through comprehensive testing.",
    "I work with React and Node.js on the frontend, and I specialize in manual, API, and SQL-based testing to ensure software reliability and quality.",
  ],
  latelyParagraphs: [
    "My current focus is on deepening my Quality Assurance expertise through hands-on testing projects and learning different testing methodologies. I'm passionate about finding bugs before users do and ensuring software quality is never compromised. I'm looking for opportunities to grow as a QA professional and contribute to building reliable, high-quality software products.",
  ],
  resumeUrl: "",
  skills: [
    { label: "Frontend", value: "React • JavaScript • HTML • CSS", iconKey: "code", accentColor: "purple" },
    { label: "Backend", value: "Node.js", iconKey: "database", accentColor: "orange" },
    { label: "QA & Testing", value: "Manual • API • SQL Testing", iconKey: "shield-check", accentColor: "purple" },
    { label: "Tools", value: "Postman • Git • VS Code", iconKey: "wrench", accentColor: "pink" },
  ],
  education: [
    {
      title: "B.Sc. (Hons) – Software Engineering",
      subtitle: "Patan College Professional Studies (PCPS), University of Bedfordshire",
      period: "2025 – 2028",
      description: "Coursework in Data Structures, Databases, Software Testing, Web Development, and Quality Assurance.",
    },
  ],
  experience: [
    {
      title: "QA & Frontend Developer",
      subtitle: "Hands-on Projects & Hackathons",
      period: "Ongoing",
      description: "Testing web applications, writing test cases, identifying bugs, and building responsive frontend interfaces with React. Active in hackathons and real-world project development.",
    },
  ],
  hackathons: [
    {
      title: "Orchid HackX 2026",
      subtitle: "Orchid International College",
      period: "July 10–12, 2026",
      description: "Participated in a 48-hour hackathon, building MediShield — a hospital data security and insider threat detection platform featuring anomaly detection, device-level logging, and admin dashboard controls.",
    },
  ],
  volunteerExperience: [
    {
      title: "Volunteer – NYEF Kathmandu Summit",
      subtitle: "Nepalese Young Entrepreneurs' Forum (NYEF) | Marriott Hotel, Kathmandu",
      period: "April 2026",
      description: "Supported event activities and coordination, ensuring a smooth experience for participants and guests. Built professional networks by interacting with entrepreneurs, business professionals, international delegates, and diplomatic representatives. Developed practical skills in professional communication, networking, teamwork, relationship building, and event coordination.",
    },
  ],
  certifications: [
    { text: "Data Science Essentials with Python — Cisco Networking Academy (16 Aug 2026)" },
    { text: "CCNA: Introduction to Networks — Cisco Networking Academy via University of Bedfordshire" },
    { text: "Orchid HackX 2026 – Certificate of Participation (Orchid International College)" },
  ],
  social: {
    github: "https://github.com/Prabika524",
    linkedin: "https://www.linkedin.com/in/prabika-rai-b49061377/",
    email: "mailto:raiprabika34@gmail.com",
  },
  heroImage,
};

export const fallbackProjects = [
  {
    _id: "1",
    title: "Daily Fitness Tracker System",
    description:
      "A full-stack fitness management system with comprehensive testing for users, trainers & admins to track workouts, progress, and daily activities.",
    tags: ["Testing", "QA", "Backend", "PostgreSQL"],
    iconKey: "dumbbell",
    accentColor: "purple",
    githubUrl: "https://github.com/",
    liveUrl: "",
  },
  {
    _id: "2",
    title: "Dental Management System",
    description:
      "A comprehensive management system for dental clinic operations. Designed and tested end-to-end workflow for managing patients, dentists, receptionists, and appointments.",
    tags: ["Java", "JavaFX", "MySQL", "Testing"],
    iconKey: "shield-check",
    accentColor: "orange",
    githubUrl: "https://github.com/Prabika524/DentalManagementSystem",
    liveUrl: "",
  },
  {
    _id: "3",
    title: "Nepal Heritage",
    description:
      "A full-stack ticketing and discovery platform for Nepal's heritage sites and trekking routes. Features a booking system for travelers and an operator/admin portal for managing sites, tours, and bookings.",
    tags: ["React", "TypeScript", "Express", "Tailwind CSS", "AI Chatbot"],
    iconKey: "landmark",
    accentColor: "orange",
    githubUrl: "https://github.com/Prabika524/mid-valley-hackathon",
    liveUrl: "https://mid-valley-hackathon.vercel.app/",
  },
];
