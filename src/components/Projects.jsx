import Title from "./Title";
import carrental from "../assets/projects/Carrental.png";
import finance from "../assets/projects/Financeapp.png";
import cours from "../assets/projects/Courseapp.png";
import portfolio from "../assets/projects/Portfolio.png";
import money from "../assets/projects/money.png";
import { div, span } from "motion/react-client";
import { Github, View } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "ManageMoney",
    description: "App web qui permet de gerer ses depenses",
    technologies: ["Django Rest", "React", "TailwindCss"],
    demoLink: "https://gestiondepenses.netlify.app/",
    repoLink: "https://github.com/Prince9b/Backend_drf_gestionDepenses.git",
    /* repoLink: "https://github.com/Prince9b/Prince9b-frontendGestionDepense.git", */
    image: money,
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Mon portfolio dynamique Mon portfolio dynamique Mon portfolio dynamique",
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
  },
  {
    id: 4,
    title: "Location de voitures",
    description:
      "Application web qui permet la location des voitures muni d' une partie admin",
    technologies: ["React", "Laravel", "PostgreSql"],
    demoLink: "https://locationvoiturebamako.netlify.app/",
    repoLink: "https://github.com/Prince9b/Location_voiture",
    image: carrental,
  },
  {
    id: 5,
    title: "Sujet App",
    description:
      "Application mobile qui fournit les sujets et corrections des matieres d'une filiere",
    technologies: ["React Native", "Django", "MongoDB"],
    demoLink: "#",
    repoLink: "#",
    image: cours,
  },
];

const Projects = () => {
  return (
    <motion.div
      id="Projets"
      className="mt-20"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      <Title title="Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((projet) => (
          <div
            key={projet.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"
          >
            <img
              src={projet.image}
              alt={projet.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold">{projet.title}</h1>
              <p className="text-sm">{projet.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {projet.technologies.map((tech) => (
                <span className="badge badge-accent badge-sm">{tech}</span>
              ))}
            </div>
            <div>
              <a
                className="btn btn-accent w-1/3"
                href={projet.demoLink}
                target="_blank"
              >
                Voir
                <View className="w-3" />
              </a>
              <a
                className="btn btn-neutral ml-2"
                href={projet.repoLink}
                target="_blank"
              >
                Github
                <Github className="w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
