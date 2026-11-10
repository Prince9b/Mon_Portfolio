import { createElement } from "react";
import Title from "./Title";
import { motion as Motion } from "motion/react";
import {
  Database,
  PanelsTopLeft,
  Server,
  Workflow,
} from "lucide-react";
import {
  sectionRevealVariants,
  sectionRevealViewport,
} from "../lib/motion";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import php from "../assets/techno/php.png";
import python from "../assets/techno/python.png";
import laravel from "../assets/techno/laravel.png";
import django from "../assets/techno/django.png";
import postgre from "../assets/techno/postgre.png";
import mongo from "../assets/techno/mongo.png";

const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`;

const skillGroups = [
  {
    name: "Frontend",
    icon: PanelsTopLeft,
    skills: [
      // { name: "HTML", image: imgHTML },
      // { name: "CSS", image: imgCSS },
      // { name: "JavaScript", image: imgJS },
      { name: "React( HTML /CSS /JavaScript )", image: imgREACT },
      { name: "React Native", image: imgREACT },
      { name: "Tailwind CSS", image: imgTAILWIND },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      // { name: "Python", image: python },
      { name: "Laravel", image: laravel },
      { name: "Django/REST", image: django },
      { name: "Spring Boot", image: devicon("spring") },
    ],
  },
  {
    name: "Bases de données",
    icon: Database,
    skills: [
      { name: "PostgreSQL", image: postgre },
      { name: "MongoDB", image: mongo },
      { name: "Oracle", image: devicon("oracle") },
      { name: "MySQL", image: devicon("mysql") },
    ],
  },
  {
    name: "CI/CD & Observabilité",
    icon: Workflow,
    skills: [
      { name: "GitHub Actions", image: devicon("githubactions") },
      { name: "Docker", image: devicon("docker") },
      { name: "Prometheus", image: devicon("prometheus") },
      { name: "Grafana", image: devicon("grafana") },
    ],
  },
];

function Competences() {
  return (
    <Motion.div
      id="Competences"
      className="scroll-mt-24 py-20 lg:py-28"
      initial="hidden"
      whileInView="visible"
      variants={sectionRevealVariants}
      viewport={sectionRevealViewport}
    >
      <Title title="Compétences" />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map(({ name, icon, skills }) => (
          <section
            key={name}
            className="rounded-2xl border border-base-content/10 bg-base-200/50 p-5 sm:p-6"
            aria-label={name}
          >
            <h3 className="mb-5 flex items-center gap-3 text-lg font-semibold">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {createElement(icon, {
                  className: "size-5",
                  "aria-hidden": true,
                })}
              </span>
              {name}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group flex items-center gap-2.5 rounded-xl border border-base-content/10 bg-base-100 px-3 py-2.5 transition-colors hover:border-accent/40"
                >
                  {skill.image ? (
                    <span className="flex size-8 items-center justify-center rounded-lg bg-base-200 p-1.5">
                      <img
                        src={skill.image}
                        alt=""
                        aria-hidden="true"
                        className="size-full object-contain"
                      />
                    </span>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent"
                    >
                      {skill.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <span className="text-sm font-medium">{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Motion.div>
  );
}

export default Competences;
