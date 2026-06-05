import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaBrain, FaBookOpen, FaUser, FaRocket } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/health.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/cloud.avif';
import projectImg4 from '../assets/project4.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaRocket,
      title: 'Project Driven',
      description: 'I enjoy building practical projects that help me apply concepts and gain real-world development experience.',
      color: 'text-purple'
    },
    {
      icon: FaBookOpen,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies, frameworks, and tools to expand my knowledge and stay updated.',
      color: 'text-pink'
    },
    {
      icon: FaUser,
      title: 'Team Player',
      description: 'I enjoy collaborating with others, sharing ideas, and contributing to projects that create meaningful impact.',
      color: 'text-blue'
    },
    {
      icon: FaBrain,
      title: 'Problem Solver',
      description: 'I love tackling challenges through logical thinking and developing efficient software solutions.',
      color: 'text-pink'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing robust backend systems for seamless application functionality.',
    tags: ['C', 'C++', 'Python']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL', 'Oracle']
  },
  
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Devops Basics']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS Code', 'Vercel']
  },

  {
    title: 'Soft Skills',
    icon: FaUser,
    description: 'Continuous learning and adaptability in dynamic environments.',
    tags: ['Teamwork' , 'Time Management' , 'Leadership Quality',' Communication']
  },
];



export const projects = [
  {
    title: "Smart Health Monitoring System",
    description: "A system that tracks health parameters such as heart rate and temperature with real-time monitoring capabilities.",
    image: projectImg1,
    tech: ["HTML" , "CSS" , "JavaScript" , "Tkinter", "Oracle"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    code: "https://github.com/Poojashri-K/Smart-health-monitoring-system",
  },
  {
    title: "Order Processing System",
    description: "This project manages, processes and tracks status of customer orders efficiently using priority-based order handling.",
    image: projectImg2,
    tech: ["C++" , "HTML", "CSS", "JavaScript" , "Node.js"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    code: "https://github.com/Poojashri-K/Order-processing-system",
  },
  {
    title: "Cloud Optima",
    description: "Compares AWS, Azure, and GCP costs based on user requirements and recommends the most cost-effective cloud provider.",
    image: projectImg3,
    tech: ["React", "Javascript", "CSS" , "C++"],
    icons: [FaReact, FaDatabase],
    code: "https://github.com/Poojashri-K/CloudOptima",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website highlighting my skills, projects, and accomplishments.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Vite", "React"],
    icons: [FaReact, FaCloud],
    code: "https://github.com/Poojashri-K/Portfolio",
  },
];


export const certifications = [
  {
    role: "Foundation level in Programming and Data science",
    company: "Indian Institute of Technology , Madras",
    duration: "2024 - 2025",
    description:
      "Built a strong foundation in programming, computational thinking, statistics, mathematics, and data science concepts through hands-on assignments.",
    color: "purple"
  },
  {
    role: "Python for Data science",
    company: "Indian Institute of Technology , Madras",
    duration: "Jan 2026 - May 2026",
    description:
      "Learned Python for data analysis, data visualization, and working with libraries such as NumPy, Pandas, and Matplotlib.",
    color: "pink"
  },
  {
    role: "Introduction to Devops",
    company: "IBM",
    duration: "May 2026",
    description:
      "Gained foundational knowledge of DevOps practices, Git, CI/CD workflows, Agile methodologies, and modern software development processes.",
    color: "blue"
  }
];
