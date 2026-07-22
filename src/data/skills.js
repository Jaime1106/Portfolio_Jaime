import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaNetworkWired,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJsSquare },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: FaPython },
    ],
  },

  {
    title: "Bases de datos",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "SQL", icon: FaDatabase },
    ],
  },

  {
    title: "Otros conocimientos",
    items: [
      { name: "Cisco Networking", icon: FaNetworkWired },
      { name: "Cybersecurity", icon: FaShieldAlt },
      { name: "Blockchain", icon: FaDatabase },
      { name: "Generative AI", icon: FaRobot },
    ],
  },
];

export default skills;