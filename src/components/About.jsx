import React from "react";
import Title from "./Title";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import { motion } from "motion/react";
import hero from '../assets/hero.png'

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
    <motion.div
      id="Apropos"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="bg-base-300 p-10 mb-10 md:mb-32"
    >
      <Title title="A propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img src={hero} alt="" className="w-96 h-96 object-cover rounded-xl blur-sm" />
        </div>
        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96"
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
