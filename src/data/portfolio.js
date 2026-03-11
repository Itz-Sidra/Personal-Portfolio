export const personal = {
  name: "Sidra Jahangir",
  title: "Backend & AI Engineer",
  tagline: "Building intelligent systems at the intersection of backend engineering and applied machine learning.",
  email: "sidrajahangir93@gmail.com",
  github: "https://github.com/Itz-Sidra",
  linkedin: "https://www.linkedin.com/in/sidra-jahangir-6a3887320/",
  leetcode: "https://leetcode.com/u/itz_sidru/",
  portfolio: "https://sidra-portfolio.dev",
  location: "Pune, Maharashtra, India",
};

export const about = `I'm a Computer Science student specializing in AI/ML at Vishwakarma Institute of Technology, Pune, with a CGPA of 9.54. I build backend systems, REST APIs, and AI-powered applications from audio speaker identification pipelines to intelligent interview preparation platforms. I recently completed a web development internship at AMDOX Technologies and have contributed to 13+ open source repositories through programs like GirlScript Summer of Code, SWOC and WOC.`;

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "TypeScript"],
  Backend: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs", "JWT Auth"],
  Frontend: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "AI / ML": ["TensorFlow", "HuggingFace", "LangChain", "NumPy", "Pandas"],
  Tools: ["Git", "GitHub", "Postman", "Figma", "Vercel", "Render"],
};

export const projects = [
  {
    id: 1,
    title: "Speaker Label",
    subtitle: "Audio Speaker Identification System",
    description:
      "A machine learning system that identifies and labels individual speakers in multi-speaker audio conversations. Built an end-to-end pipeline from raw audio ingestion through signal processing and classification to labeled output.",
    tech: ["Python", "React.js", "PostgreSQL", "Signal Processing", "ML"],
    github: "https://github.com/Itz-Sidra/Speaker-Label",
    badge: "Hackathon Winner",
    period: "Jan 2025 – Mar 2025",
    highlights: [
      "Audio processing and speaker detection pipeline",
      "Optimized classification for improved accuracy",
      "Won CSI Codezilla Hackathon at VIT Pune",
    ],
  },
  {
    id: 2,
    title: "Evalvate",
    subtitle: "AI Interview Preparation Platform",
    description:
      "A full-featured AI-powered mock interview platform where users practice technical interviews and receive automated feedback. Integrated multiple AI APIs to simulate real interview scenarios with dynamic question generation.",
    tech: ["Python", "NLP", "PostgreSQL", "Gemini API", "ElevenLabs API", "JavaScript"],
    github: "https://github.com/Itz-Sidra",
    badge: "Startup Runner-Up",
    period: "Mar 2025 – Jun 2025",
    highlights: [
      "AI-driven question generation and answer evaluation",
      "Voice synthesis via ElevenLabs for realistic scenarios",
      "Runner-Up at LSE Generate Startup Competition (100+ international teams)",
    ],
  },
];

export const experience = [
  {
    role: "Web Development Intern",
    company: "AMDOX Technologies",
    period: "Nov 2025 – Feb 2026",
    location: "Pune, India",
    points: [
      "Developed and maintained backend services and REST APIs for production web applications",
      "Implemented authentication, data processing, and API integration across multiple modules",
      "Collaborated on debugging, testing, and improving existing codebases",
      "Documented API endpoints and coordinated with cross-functional developers",
    ],
  },
];

export const achievements = [
  {
    title: "Hackathon Winner",
    event: "CSI Codezilla Hackathon",
    org: "VIT Pune — National Level, 2025",
    detail: "Won Track 3 with Speaker Label, an ML-based speaker identification system.",
  },
  {
    title: "Startup Runner-Up",
    event: "LSE Generate Startup Competition",
    org: "London School of Economics, 2025",
    detail: "Evalvate placed among top teams out of 100+ international startups.",
  },
  {
    title: "Open Source Contributor",
    event: "GSSOC / SWOC / WOC 2025",
    org: "Multiple Programs",
    detail: "30+ pull requests submitted, 13+ contributions merged across API and documentation work.",
  },
];

export const stats = {
  github: {
    repos: "40+",
    contributions: "750+",
  },
  leetcode: {
    solved: "40+",
    focus: "Arrays & Algorithms",
  },
  opensource: {
    prs: "30+",
    merged: "13+",
  },
};

export const certifications = [
  { name: "LangChain and Gen AI", issuer: "Udemy", date: "Aug 2025" },
  { name: "Data Analysis with Pandas and Python", issuer: "Coursera", date: "Feb 2026" },
];
