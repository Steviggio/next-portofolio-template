import { PortfolioData, PortfolioDataSchema } from "../types/portfolio.schema";

export const RAW_DATA = {
  profile: {
    name: "Steve Mothmora",
    nickname: "Steviggio",
    title: "Développeur JS | React.js / Node.js",
    about:
      "Développeur JavaScript, passionné de langues et de développement, j'aime prendre part à des projets innovants mélant créativité et modernité.",
    description:
      "Je suis Steviggio, un développeur Fullstack JS spécialisé dans les technologies modernes telles que Next.js, React, et Node.js. Avec une passion pour la création d'applications web performantes et intuitives, je m'efforce de transformer des idées innovantes en solutions numériques concrètes. En plus de mes compétences techniques, j'ai un intérêt marqué pour les langues et la communication interculturelle, ce qui enrichit ma perspective dans le développement de projets globaux.",
    location: "Orléans, France",
    role: "Développeur Fullstack JS",
    resumeUrl: "/CV_Mothmora_2026.pdf",
    avatarUrl: "/steve.jpg",
  },
  socials: [
    { name: "GitHub", url: "https://github.com/Steviggio", iconName: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/stevemothmora/",
      iconName: "linkedin",
    },
  ],
  projects: [
    {
      title: "Polypost",
      description: "Tableau de bord temps réel avec Next.js 14 et Tremor.",
      link: "https://github.com/Steviggio/polypost",
      active: true,
      isSideProject: true,
      tech: ["Next.js", "Tremor"],
    },
    {
      title: "E-commerce Headless ",
      description:
        "Template E-commerce 'Headless' optimisé pour la performance.",
      link: "https://github.com/Steviggio/eshop-template",
      active: true,
      isSideProject: true,
      tech: ["Next.js", "Tremor"],
    },
    {
      title: "Speakio",
      description: "Plateforme d'accompagnement à l'apprentissage des langues.",
      link: "https://github.com",
      active: false,
      isSideProject: true,
    },
    {
      title: "Portfolio Minimaliste",
      description: "Le site sur lequel vous naviguez actuellement.",
      link: "https://github.com/Steviggio/next-portfolio",
      active: true,
      isSideProject: true,
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Zod"],
    },
    {
      title: "Ganatan",
      description: "Plateforme de formation Fullstack Angular/Node.",
      link: "https://ganatan.com",
      active: true,
      companyLogoUrl: "/ganatan-logo.png",
      company: "Ganatan",
      tech: ["React", "Angular", "Node.js"],
      isSideProject: false,
    },
    {
      title: "Qobook",
      description: "Librairie mobile pour découvrir et lire des livres.",
      link: "https://qobook.app",
      active: true,
      companyLogoUrl: "/efficience-logo.png",
      company: "Efficience Digitale",
      tech: ["React Native", "Redux Toolkit", "Supabase"],
      isSideProject: false,
    },
    {
      title: "365 fois plus de laicité",
      description: "Application native de sensibilisation à la laïcité.",
      link: "https://365fois.com",
      active: true,
      companyLogoUrl: "/365fois-logo.png",
      company: "365fois",
      tech: ["React Native", "Redux Toolkit", "Strapi", "Mistral AI"],
      isSideProject: false,
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

export class PortfolioRepository {
  static async getPortfolio(): Promise<PortfolioData> {
    const result = PortfolioDataSchema.safeParse(RAW_DATA);

    if (!result.success) {
      console.error("Invalid portfolio Data: ");
      throw new Error("Data integrity check failed");
    }
    return result.data;
  }
}
