import { Github, Linkedin } from "./svgs";

export const datas = {
  name: "Steve Mothmora",
  nickname: "Steviggio",
  title: "Développeur JS | React.js / Node.js",
  about:
    "Développeur JavaScript, passionné de langues et de développement, j'aime prendre part à des projets innovants mélant créativité et modernité.",
  description:
    "Je suis Steviggio, un développeur Fullstack JS spécialisé dans les technologies modernes telles que Next.js, React, et Node.js. Avec une passion pour la création d'applications web performantes et intuitives, je m'efforce de transformer des idées innovantes en solutions numériques concrètes. En plus de mes compétences techniques, j'ai un intérêt marqué pour les langues et la communication interculturelle, ce qui enrichit ma perspective dans le développement de projets globaux.",
  age: 29,
  location: "Orléans, France",
  role: "Développeur Fullstack JS",
  projects: [
    {
      title: "Polypost",
      description: "Tableau de bord temps réel avec Next.js 14 et Tremor.",
      link: "https://github.com/Steviggio/polypost",
      active: true,
    },
    {
      title: "E-commerce Headless ",
      description:
        "Template E-commerce 'Headless' optimisé pour la performance.",
      link: "https://github.com/Steviggio/eshop-template",
      active: true,
      
    },
    {
      title: "Speakio",
      description: "Plateforme d'accompagnement à l'apprentissage des langues.",
      link: "https://github.com",
      active: false,
    },
    {
      title: "Portfolio Minimaliste",
      description: "Le site sur lequel vous naviguez actuellement.",
      link: "https://github.com/Steviggio/next-portfolio",
      active: true,
      // tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Ganatan",
      description: "Plateforme de formation Fullstack Angular/Node.",
      link: "https://ganatan.com",
      active: true,
      company: "Ganatan",
      tech: ["Angular", "Node.js"],
    },
    {
      title: "Qobook",
      description: "Librairie mobile pour découvrir et lire des livres.",
      link: "https://qobook.app",
      active: true,
      company: "Efficience Digitale",
      tech: ["React Native", "Redux Toolkit", "Supabase"],
    },
    {
      title: "365fois plus de laicité",
      description: "Application native de sensibilisation à la laïcité.",
      link: "https://365fois.com",
      active: true,
      company: "365fois",
      tech: ["React Native", "Redux Toolkit", "Strapi", "Mistral AI"],
    },
  ],
  experiences: [
    {
      company: "Efficience Digitale",
      role: "Développeur Frontend",
      date: "Sept. 2024 — Oct. 2025",
      link: "https://efficience.com",
    },
    {
      company: "Ganatan",
      role: "Développeur Fullstack",
      date: "Août 2022 - Sept. 2023",
      link: "https://ganatan.com",
    },
    {
      company: "Freelance",
      role: "Développeur Web",
      date: "Août 2023 - Présent",
    },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Steviggio", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/stevemothmora/",
      icon: Linkedin,
    },
  ],
  resumeUrl: "/Mothmora_2026.pdf",
};

export const technologies = [
  {
    javascript: [
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "TypeScript",
    ],
    python: ["Django", "Flask"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    devops: ["Docker", "Jenkins", "AWS", "Nginx"],
  },
];
