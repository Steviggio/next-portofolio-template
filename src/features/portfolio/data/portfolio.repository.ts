import { PortfolioData, PortfolioDataSchema } from "../types/portfolio.schema";
import { Locale } from "../../../../i18n-config";
import { getDictionnary } from "@/app/[lang]/dictionnaries";

export const RAW_DATA = {
  lang: "en",
  profile: {
    status: "available",
    name: "John Doe",
    nickname: "Johnny",
    title: "Fullstack Developer | React / TypeScript",
    about:
      "A passionate Fullstack Developer crafting seamless digital experiences with modern web technologies.",
    description:
      "Hello! I am John Doe, a Fullstack Developer focused on creating performant, accessible, and beautiful web applications. I specialize in the React ecosystem, deeply leveraging Next.js and TypeScript to build robust frontends, while utilizing tools like Node.js and PostgreSQL for backend services. Always eager to learn and tackle complex challenges.",
    location: "San Francisco, CA",
    role: "Senior Fullstack Developer",
    resumeUrl: "/CV_placeholder.pdf",
    avatarUrl: "/steve.jpg", // We will replace steve.jpg with a generic one later
    email: "hello@johndoe.dev",
  },
  socials: [
    { name: "GitHub", url: "https://github.com/", iconName: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      iconName: "linkedin",
    },
  ],
  projects: [
    {
      id: "project-omega",
      title: "Project Omega",
      description: "A comprehensive real-time dashboard built with Next.js and Tremor.",
      link: "https://github.com/",
      active: true,
      isSideProject: true,
      tech: ["Next.js", "Tremor", "TypeScript"],
    },
    {
      id: "ecommerce-headless",
      title: "Headless E-commerce",
      description:
        "A highly optimized, performant headless e-commerce storefront template.",
      link: "https://github.com/",
      active: true,
      isSideProject: true,
      tech: ["Next.js", "TailwindCSS", "Zendesk"],
    },
    {
      id: "learning-platform",
      title: "Linguify",
      description: "A language learning companion app serving thousands of users.",
      link: "https://github.com",
      active: false,
      isSideProject: true,
    },
    {
      id: "portfolio-v1",
      title: "Minimalist Portfolio",
      description: "The very site you are browsing right now.",
      link: "https://github.com/",
      active: true,
      isSideProject: true,
      tech: ["Next.js", "TailwindCSS", "TypeScript", "Zod"],
    },
    {
      id: "company-alpha",
      title: "Alpha Platform",
      description: "A fullstack training platform used by internal teams.",
      link: "https://example.com",
      active: true,
      companyLogoUrl: "/placeholder-logo.png",
      company: "Company Alpha",
      tech: ["React", "Go", "Node.js"],
      isSideProject: false,
    },
    {
      id: "mobile-reader",
      title: "Bookish",
      description: "A mobile library app to discover and read books seamlessly.",
      link: "https://example.com",
      active: true,
      companyLogoUrl: "/placeholder-logo.png",
      company: "Tech Solutions",
      tech: ["React Native", "TypeScript", "Redux Toolkit", "Supabase"],
      isSideProject: false,
    },
    {
      id: "civic-app",
      title: "Civic Duty App",
      description: "A mobile application dedicated to civic engagement and awareness.",
      link: "https://example.com",
      active: true,
      companyLogoUrl: "/placeholder-logo.png",
      company: "GovTech",
      tech: [
        "React Native",
        "Redux Toolkit",
        "TypeScript",
        "Strapi",
      ],
      isSideProject: false,
    },
  ],
  experiences: [
    {
      id: "tech-solutions",
      company: "Tech Solutions Inc.",
      role: "Frontend Team Lead",
      date: "Sept. 2021 — Present",
      link: "https://example.com",
    },
    {
      id: "company-alpha-exp",
      company: "Company Alpha",
      role: "Fullstack Developer",
      date: "Aug 2019 - Sept. 2021",
      link: "https://example.com",
    },
    {
      id: "freelance-exp",
      company: "Freelance",
      role: "Web Consultant",
      date: "Jan 2018 - Aug 2019",
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
  static async getPortfolio(lang: Locale): Promise<PortfolioData> {
    try {
      const dict = await getDictionnary(lang);

      const localizedData = {
        ...RAW_DATA,
        lang: lang,
        profile: {
          ...RAW_DATA.profile,
          title: dict.profile.title,
          about: dict.profile.about,
          description: dict.profile.description,
          role: dict.profile.role,
          location: dict.profile.location,
        },
        sections: dict.sections,
        projects: RAW_DATA.projects.map((project) => {
          const translation =
            dict.projects.informations[
              project.id as keyof typeof dict.projects.informations
            ];
          return {
            ...project,
            title: translation?.title ?? project.title,
            description: translation?.description ?? project.description,
          };
        }),
        experiences: RAW_DATA.experiences.map((exp) => {
          const localizedRole =
            dict.experiences.role[exp.id as keyof typeof dict.experiences.role];
          return {
            ...exp,
            role: localizedRole ?? exp.role,
          };
        }),
      };

      const result = PortfolioDataSchema.safeParse(localizedData);
      if (!result.success) {
        console.error("Invalid portfolio Data: ");
        throw new Error("Data integrity check failed");
      }
      return result.data;
    } catch (error) {
      console.error("Error fetching portfolio data: ", error);
      return RAW_DATA as unknown as PortfolioData;
    }
  }
}
