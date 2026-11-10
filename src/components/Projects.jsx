import Title from "./Title";
import carrental from "../assets/projects/Carrental.png";
import cours from "../assets/projects/Courseapp.png";
import portfolio from "../assets/projects/Portfolio.png";
import money from "../assets/projects/money.png";
import { createElement } from "react";
import {
  Github,
  HandHeart,
  ShieldCheck,
  UsersRound,
  View,
} from "lucide-react";
import { motion as Motion } from "motion/react";
import {
  sectionRevealVariants,
  sectionRevealViewport,
} from "../lib/motion";

const projects = [
  {
    id: 1,
    title: "ManageMoney",
    description: "Application web de gestion et de suivi des dépenses.",
    technologies: ["Django Rest", "React", "TailwindCss", "PostgreSql", "CI/CD"],
    demoLink: "https://gestiondepenses.netlify.app/",
    repoLink: "https://github.com/Prince9b/backendDevops.git",
    image: money,
  },
  {
    id: 8,
    title: "Authentification et autorisation",
    description:
      "Application web de gestion de l’authentification et des autorisations, avec vérification de compte par code envoyé par e-mail.",
    technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "React"],
    icon: ShieldCheck,
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Portfolio personnel présentant mes projets et mon parcours de développeur.",
    technologies: ["React", "TailwindCss"],
    demoLink: "https://portfoliopprince.netlify.app/",
    repoLink: "https://github.com/Prince9b/Mon_Portfolio",
    image: portfolio,
  },
  {
    id: 3,
    title: "Location de voiture",
    description: "Site web vitrine pour la location de voitures",
    technologies: ["React", "Framer Motion"],
    demoLink: "https://bamakolocation.netlify.app/",
    repoLink: "https://github.com/Prince9b/LocV",
    image: carrental,
    repoLink: "#",
  },
  {
    id: 4,
    title: "Location de voitures",
    description:
      "Application de location de voitures avec un espace d'administration.",
    technologies: ["React", "Laravel", "PostgreSql"],
    demoLink: "https://locationvoiturebamako.netlify.app/",
    repoLink: "https://github.com/Prince9b/Location_voiture",
    image: carrental,
  },
  {
    id: 5,
    title: "Sujet App",
    description:
      "Application mobile de consultation de sujets et de corrigés par filière.",
    technologies: ["React Native", "Django Rest", "MongoDB"],
    demoLink: "#",
    repoLink: "#",
    image: cours,
  },
  {
    id: 6,
    title: "AJTDP",
    description:
      "Site web vitrine de l’Association Jeunesse Tchadienne pour le Développement Personnel, avec formulaire de contact et envoi d’e-mails.",
    technologies: ["React Js", "TailwindCss"],
    icon: UsersRound,
    demoLink: "https://ajtdp.netlify.app/",
    repoLink: "#",
  },
  {
    id: 7,
    title: "Fondation Junior du Tchad",
    description:
      "Site web vitrine de la Fondation Junior du Tchad, avec formulaire de contact et envoi d’e-mails.",
    technologies: ["React Js", "TailwindCss"],
    icon: HandHeart,
    demoLink: "https://fondationjunior.netlify.app/",
    repoLink: "#",
  },
  
];

const Projects = () => {
  return (
    <Motion.div
      id="Projets"
      className="scroll-mt-24 py-16 lg:py-24"
      initial="hidden"
      whileInView="visible"
      variants={sectionRevealVariants}
      viewport={sectionRevealViewport}
    >
      <Title title="Projets" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((projet) => (
          <div
            key={projet.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-content/10 bg-base-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
          >
            {projet.image ? (
              <img
                src={projet.image}
                alt={projet.title}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-52 items-center justify-center bg-gradient-to-br from-accent/20 via-base-200 to-base-300"
              >
                <span className="flex size-20 items-center justify-center rounded-3xl border border-base-content/10 bg-base-100/80 text-accent shadow-lg">
                  {createElement(projet.icon, { className: "size-10" })}
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 text-lg font-semibold">{projet.title}</h3>
              <p className="text-sm leading-6 text-base-content/65">
                {projet.description}
              </p>
              <div className="my-4 flex flex-wrap gap-2">
                {projet.technologies.map((tech) => (
                  <span
                    key={`${projet.id}-${tech}`}
                    className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-base-content/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {projet.demoLink !== "#" && (
                  <a
                    className="btn btn-sm rounded-full border-0 bg-accent text-accent-content hover:brightness-110"
                    href={projet.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                    <View className="size-4" aria-hidden="true" />
                  </a>
                )}
                {projet.repoLink !== "#" && (
                  <a
                    className="btn btn-sm rounded-full border-base-content/15 bg-transparent"
                    href={projet.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <Github className="size-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Motion.div>
  );
};

export default Projects;
