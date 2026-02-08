import { ThemeToggle } from "@/app/components/theme-toggle";
import { ArrowUpRight, FileText } from "lucide-react";
import { datas as DATA } from "./data/data";
import Image from "next/image";
import Link from "next/link";
import PresentationCard from "./components/PresentationCard";

function companyLogo(company: string) {
  switch (company) {
    case "Efficience Digitale":
      return "/efficience-logo.png";
    case "Ganatan":
      return "/ganatan-logo.png";
    default:
      return "/default-logo.png";
    case "365fois":
      return "/365fois-logo.png";
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-cream dark:bg-neutral-950 text-sage-dark dark:text-cream transition-colors duration-300 ease-in-out selection:bg-sage selection:text-cream">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* HEADER */}
        <header className="flex justify-between items-center mb-16">
          <h1 className="font-bold text-xl tracking-tight text-sage dark:text-cream">
            {DATA.nickname}
          </h1>
          <ThemeToggle />
        </header>

        {/* HERO / ABOUT */}
        <section className="mb-16 flex flex-col gap-5">
          <PresentationCard
            title={DATA.name}
            image="/steve.jpg"
            location={DATA.location}
            role={DATA.role}
          />
          {/* <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-sage dark:text-sage-light">
              {DATA.title}
            </h2>
            <p className="text-sage dark:text-neutral-400 leading-relaxed text-lg">
              {DATA.about}
            </p>
          </div> */}
        </section>

        {/* PROJETS */}
        <section className="mb-16">
          <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sage"></span>
            Projets Sélectionnés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA.projects.map(
              (project, index) =>
                !project.company && (
                  <a
                    key={index}
                    href={`${project.active ? project.link : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.active ? "border-sage" : "border-gray-200 dark:border-0 pointer-events-none  "} group block p-5 border border-sage/20 dark:border-neutral-800 rounded-lg bg-cream-dark/30 dark:bg-neutral-900/50 hover:border-sage hover:bg-white dark:hover:border-sage-light dark:hover:bg-neutral-900 transition-all duration-300 select-none`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-sage-dark dark:text-cream group-hover:text-sage transition-colors">
                        {project.title}
                      </h4>
                      <ArrowUpRight className="h-4 w-4 text-sage/60 group-hover:text-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-sm text-sage/80 dark:text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                  </a>
                ),
            )}
          </div>
          <div className="flex flex-col gap-3 pt-5 ">
            <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              Projets en entreprise
            </h3>
            <div className="flex gap-3">
              {DATA.projects.map(
                (project, index) =>
                  project.company && (
                    <a
                      key={index}
                      href={`${project.active ? project.link : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.active ? "border-sage" : "border-gray-200 dark:border-0 pointer-events-none  "} group block p-5 border border-sage/20 dark:border-neutral-800 rounded-lg bg-cream-dark/30 dark:bg-neutral-900/50 hover:border-sage hover:bg-white dark:hover:border-sage-light dark:hover:bg-neutral-900 transition-all duration-300 select-none`}
                    >
                      <div className="flex relative justify-between items-start mb-3">
                        <Image
                          src={companyLogo(project.company)}
                          alt={`Logo ${project.company}`}
                          width={25}
                          height={25}
                          className="rounded-xl object-contain absolute -top-[1.6rem] animate-heartbeat -left-6 opacity-85"
                        />
                        <div className="flex flex-col gap-1 ">
                          <h4 className="font-medium text-sage-dark dark:text-cream group-hover:text-sage transition-colors">
                            {project.title}
                          </h4>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-sage/60 group-hover:text-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <p className="text-sm text-sage/80 dark:text-neutral-400 leading-relaxed">
                        {project.description}
                      </p>
                    </a>
                  ),
              )}
            </div>
          </div>
        </section>

        {/* EXPÉRIENCES */}
        <section className="mb-16">
          <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sage"></span>
            Expérience
          </h3>
          <div className="space-y-8 border-l-2 border-sage/20 pl-6 ml-1">
            {DATA.experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-cream dark:border-neutral-950 bg-sage/40 group-hover:bg-sage transition-colors"></span>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  {exp.link && (
                    <Link
                      href={exp.link}
                      className="hover:text-sage hover:scale-110 hover:ease-in-out hover:duration-150 hover:transition animate-pulse dark:hover:text-cream transition-colors"
                    >
                      <span className="font-medium text-sage-dark dark:text-cream">
                        {exp.company}
                      </span>
                    </Link>
                  )}
                  {!exp.link && (
                    <span className="font-medium text-sage-dark dark:text-cream">
                      {exp.company}
                    </span>
                  )}
                  <span className="text-sm font-mono text-sage/70 dark:text-neutral-500">
                    {exp.date}
                  </span>
                </div>
                <span className="text-sm text-sage dark:text-neutral-400 block mt-1">
                  {exp.role}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 pl-7">
            <a
              href={DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sage text-cream text-sm font-medium hover:bg-sage-dark transition-colors shadow-sm hover:shadow-md"
            >
              <FileText className="h-4 w-4" />
              Voir le CV complet
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-sage/10 dark:border-neutral-800 flex justify-between items-center text-sm text-sage/60 dark:text-neutral-500">
          <p>
            © {new Date().getFullYear()} {DATA.name}
          </p>
          <div className="flex gap-4">
            {DATA.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage dark:hover:text-cream transition-colors p-2 hover:bg-sage/10 rounded-full"
                aria-label={social.name}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
