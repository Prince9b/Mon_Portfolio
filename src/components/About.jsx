import Title from "./Title";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import { motion as Motion } from "motion/react";
import hero from "../assets/hero.png";
import {
  sectionRevealVariants,
  sectionRevealViewport,
} from "../lib/motion";

function About() {
  const aboutSections = [
    {
      id: "1",
      title: "Dev frontend",
      description: "Expérience en dev web et mobile",
      icon: <LetterText className="text-accent scale-150" />,
    },
    {
      id: "2",
      title: "Dev Backend",
      description: "Expérience en dev backend et base de données",
      icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
      id: "3",
      title: "UI/UX",
      description: "Connaissances en UI/UX",
      icon: <Paintbrush className="text-accent scale-150" />,
    },
  ];
  return (
    <Motion.div
      id="Apropos"
      initial="hidden"
      whileInView="visible"
      variants={sectionRevealVariants}
      viewport={sectionRevealViewport}
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
    >
      <Title title="À propos" />
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -inset-3 rotate-3 rounded-[2rem] bg-accent/20"
            aria-hidden="true"
          />
          <img
            src={hero}
            alt="Portrait illustré de Prince Nato"
            className="relative aspect-[4/3] w-full rounded-[1.75rem] border border-base-content/10 bg-base-200 object-cover object-top shadow-xl"
          />
        </div>
        <div>
          <p className="mb-7 text-center text-base leading-7 text-base-content/70 md:text-lg lg:text-left">
            Je conçois et développe des expériences numériques, du web au
            mobile. J’aime transformer des idées en produits accessibles,
            performants et agréables à utiliser.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {aboutSections.map((section) => (
              <div
                key={section.id}
                className="flex flex-col items-center gap-4 rounded-2xl border border-base-content/10 bg-base-200/60 p-5 transition-colors hover:border-accent/40 sm:flex-row lg:max-w-xl"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  {section.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="mb-1 font-semibold">{section.title}</h3>
                  <p className="text-sm text-base-content/65">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Motion.div>
  );
}

export default About;
