export const personal = {
  name: "Sidra Jahangir",
  role: "AI/ML Engineer",
  roleLine: "AI/ML Engineer — Full-Stack Developer",
  tagline:
    "I build production-grade AI systems from computer vision pipelines to patented ML products and the full-stack platforms that ship them.",
  email: "sidrajahangir93@gmail.com",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Itz-Sidra",
  linkedin: "https://www.linkedin.com/in/sidra-jahangir-6a3887320/",
  leetcode: "https://leetcode.com/u/itz_sidru/",
  geeksforgeeks: "https://www.geeksforgeeks.org/profile/itzsidra?tab=activity",
  portrait: "images/portrait.png",
  resume: "resume.pdf",
};

export const about = {
  summary:
    "Computer Science and Engineering (AI & Machine Learning) student at Vishwakarma Institute of Technology, Pune, building end-to-end ML and NLP applications from data pipelines to production interfaces. Two patents filed, one paper under review, and a habit of shipping things that outlive the hackathon they were built for.",
  facts: [
    { label: "University", value: "VIT Pune" },
    { label: "Degree", value: "B.Tech CS (AI/ML)" },
    { label: "CGPA", value: "9.6 / 10.0" },
    { label: "Location", value: "Pune, India" },
    { label: "Status", value: "Open to work" },
  ],
  interests: [
    "AI & ML Student",
    "Software Engineer",
    "Machine Learning",
    "Computer Vision",
    "Full-Stack Development",
    "Backend Systems",
    "AI Products",
  ],
};

// Skills grouped exactly as they should read on a resume, each entry
// carrying a react-icons key resolved in <SkillBadge />.
export const skillGroups = [
  {
    category: "Programming Languages",
    accent: "forest",
    items: [
      { name: "Python", icon: "SiPython" },
      { name: "Java", icon: "SiOpenjdk" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
    ],
  },
  {
    category: "AI / Machine Learning",
    accent: "rust",
    items: [
      { name: "PyTorch", icon: "SiPytorch" },
      { name: "TensorFlow", icon: "SiTensorflow" },
      { name: "MobileNetV2", icon: "TbCpu" },
      { name: "Transfer Learning", icon: "TbBrain" },
      { name: "XGBoost", icon: "TbChartHistogram" },
      { name: "Random Forest", icon: "TbTree" },
      { name: "Scikit-learn", icon: "SiScikitlearn" },
      { name: "Explainable AI (SHAP/LIME)", icon: "TbEye" },
      { name: "Computer Vision", icon: "TbCamera" },
      { name: "Tesseract OCR", icon: "TbScan" },
      { name: "Hume AI", icon: "TbMoodSmile" },
    ],
  },
  {
    category: "Data",
    accent: "gold",
    items: [
      { name: "NumPy", icon: "SiNumpy" },
      { name: "Pandas", icon: "SiPandas" },
      { name: "OpenCV", icon: "SiOpencv" },
      { name: "Data Cleaning", icon: "TbWashMachine" },
      { name: "Visualization", icon: "TbChartDots" },
    ],
  },
  {
    category: "Frontend",
    accent: "clay",
    items: [
      { name: "React.js", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    category: "Backend",
    accent: "forest",
    items: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "Flask", icon: "SiFlask" },
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "REST APIs", icon: "TbApi" },
      { name: "JWT Auth", icon: "TbLock" },
    ],
  },
  {
    category: "Databases",
    accent: "rust",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Prisma ORM", icon: "SiPrisma" },
    ],
  },
  {
    category: "Cloud & DevOps",
    accent: "gold",
    items: [
      { name: "Vercel", icon: "SiVercel" },
      { name: "Render", icon: "SiRender" },
      { name: "Firebase", icon: "SiFirebase" },
    ],
  },
  {
    category: "Tools & Version Control",
    accent: "clay",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman" },
      { name: "Figma", icon: "SiFigma" },
    ],
  },
];

export const experience = [
  {
    role: "AI Research Intern",
    company: "IEEE Computational Intelligence Society (CIS), Pune Section",
    period: "Jun 2026 – Jul 2026",
    location: "Pune, India",
    tech: ["Python", "Scikit-learn", "XGBoost", "SHAP"],
    points: [
      "Developed machine learning models for loan approval prediction using feature engineering and model evaluation techniques.",
      "Compared multiple classification algorithms and contributed to a research paper for publication.",
      "Collaborated with researchers to improve model performance and interpretability using Explainable AI techniques.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "AMDOX Technologies",
    period: "Nov 2025 – Feb 2026",
    location: "Pune, India",
    tech: ["React.js", "Node.js", "REST APIs"],
    points: [
      "Built and shipped web application features end-to-end, working across frontend components and backend REST APIs.",
      "Collaborated in an agile team on debugging and performance optimization, improving application reliability and load times.",
    ],
  },
];

export const projects = [
  {
    id: "evalvate",
    title: "Evalvate",
    subtitle: "Multimodal AI Interview Intelligence Platform",
    badge: "Startup Runner-Up",
    period: "Aug 2025 – Present",
    description:
      "A multimodal AI interview platform combining LLMs, speech analysis, and computer vision to evaluate candidates across technical, behavioral, and communication dimensions.",
    highlights: [
      "Scalable FastAPI backend integrating Gemini API, Hume AI, DeepFace, and MediaPipe",
      "End-to-end Next.js frontend for interactive interview simulations",
      "Runner-Up, LSE Generate Startup Competition (100+ international teams)",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Gemini API", "Hume AI", "DeepFace", "MediaPipe", "Next.js"],
    github: "https://github.com/Itz-Sidra/Evalvate_Interview",
    live: "https://www.evalvate.dev/",
    accent: "rust",
  },
  {
    id: "surface-defect",
    title: "Surface Defect Detection",
    subtitle: "Industrial Quality Inspection — Bekart",
    badge: "Industry Project",
    period: "Mar 2026 – Present",
    description:
      "A computer vision system that automatically classifies defective and non-defective industrial wire surfaces using MobileNetV2 with transfer learning.",
    highlights: [
      "Image preprocessing, augmentation and evaluation pipeline",
      "End-to-end inference system for automated quality inspection",
    ],
    tech: ["Python", "TensorFlow", "MobileNetV2", "OpenCV", "NumPy", "Pandas"],
    github: "https://github.com/Itz-Sidra/Surface-Defect-Detection",
    live: null,
    accent: "forest",
  },
  {
    id: "contact-builder",
    title: "Contact Builder",
    subtitle: "Industrial CRM Application — Passion Infotech",
    badge: "Industrial Project",
    period: "Jan 2026 – Mar 2026",
    description:"An AI-powered platform that extracts structured contact information from resumes, business cards, PDFs, and images, then enriches and verifies it into CRM-ready profiles using OCR, NLP, and semantic search.",
    highlights: [
      "OCR pipeline for extracting contact details from resumes, business cards, PDFs and images",
      "NLP-based entity recognition and data normalization into structured profiles",
      "AI-powered contact enrichment, verification and CRM-ready export",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Gemini API", "OCR"],
    github: "https://github.com/Itz-Sidra/Contact-Builder",
    live: null,
    accent: "forest",
  },
  {
    id: "speaker-label",
    title: "Speaker Label",
    subtitle: "Audio Speaker Identification System",
    badge: "Hackathon Winner",
    period: "Jan 2025 – May 2025",
    description:
      "A machine learning system that identifies and labels individual speakers in multi-speaker audio using signal processing, wrapped in a React interface.",
    highlights: [
      "Audio signal-processing pipeline for voice recognition",
      "Won CSI Codezilla Hackathon at VIT Pune",
    ],
    tech: ["Python", "React.js", "PostgreSQL", "Signal Processing"],
    github: "https://github.com/Itz-Sidra/Speaker-Label",
    live: null,
    accent: "gold",
  },
  {
    id: "loan-approval",
    title: "Loan Approval Prediction",
    subtitle: "Explainable AI for Credit Decisioning",
    badge: "Top 10 Finalist",
    period: "Feb 2026 – Apr 2026",
    description:
      "ML models to predict loan approval with extensive preprocessing and feature engineering, applying explainable AI to interpret the key drivers behind each decision.",
    highlights: [
      "Random Forest vs. XGBoost comparison for prediction accuracy",
      "Top 10, MIT ADT AI Grand Challenge",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "XGBoost", "Random Forest"],
    github: "https://github.com/Itz-Sidra/Loan-Approval-Prediction",
    live: null,
    accent: "clay",
  },
  {
    id: "timetable-ai",
    title: "AI Timetable Generator",
    subtitle: "Automated Academic Scheduling",
    badge: null,
    period: "Jan 2025 – May 2025",
    description:
      "Automated timetable generation using Constraint Satisfaction and Backtracking to produce conflict-free academic schedules across faculty, classrooms, batches, and subjects.",
    highlights: [
      "Constraint Satisfaction + Backtracking for conflict-free scheduling",
      "REST APIs with FastAPI and PostgreSQL",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Prisma"],
    github: "https://github.com/Itz-Sidra/timetable_ai",
    live: null,
    accent: "forest",
  },
];

export const patents = [
  {
    title: "A Machine Learning Based Prescription Scanner with Error Detection System",
    jurisdiction: "Republic of South Africa",
    appNumber: "App. No. 2026/05156",
    tags: ["OCR", "NLP", "Healthcare AI", "Drug Interaction Detection"],
  },
  {
    title:
      "A Privacy Protection System for Personal Sensitive Information Using Local AI Redaction and Verifiable Credential (VC) Access Control",
    jurisdiction: "Republic of South Africa",
    appNumber: "App. No. 2025/10605",
    tags: ["Edge AI", "Privacy", "Computer Vision", "Verifiable Credentials"],
  },
];

export const publications = [
  {
    title: "Loan Approval Prediction using Explainable Machine Learning Models",
    status: "Under Review",
  },
];

export const achievements = [
  {
    title: "Hackathon Winner",
    event: "CSI Codezilla Hackathon",
    org: "VIT Pune — National Level, 2025",
    detail: "Won with Speaker Label, an ML-based audio speaker identification system.",
    kind: "hackathon",
  },
  {
    title: "Startup Runner-Up",
    event: "LSE Generate Startup Competition",
    org: "London School of Economics, 2025",
    detail: "Evalvate placed among the top teams out of 100+ international startups.",
    kind: "startup",
  },
  {
    title: "Top 10 Finalist",
    event: "MIT ADT AI Grand Challenge",
    org: "MIT ADT University, 2026",
    detail: "Reached the top 10 with an explainable AI system for loan approval prediction.",
    kind: "competition",
  },
  {
    title: "2 Patents Filed",
    event: "Republic of South Africa",
    org: "Healthcare AI & Privacy-Preserving Systems, 2025–2026",
    detail: "Filed as inventor on two ML/edge-AI patent applications.",
    kind: "patent",
  },
  {
    title: "Open Source Contributor",
    event: "GSSOC / SWOC / WOC 2025",
    org: "Multiple Programs",
    detail: "30+ pull requests submitted, 13+ merged across API and documentation work.",
    kind: "opensource",
  },
  {
    title: "LangChain & Gen AI",
    event: "Certification",
    org: "Udemy, Aug 2025",
    detail: "Applied coursework in retrieval, agents and generative AI tooling.",
    kind: "certification",
  },
];

export const stats = {
  github: { repos: "40+", contributions: "750+" },
  leetcode: { solved: "40+", focus: "Arrays & Algorithms" },
  opensource: { prs: "30+", merged: "13+" },
};
