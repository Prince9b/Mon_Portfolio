import React from "react";
import Title from "./Title";
import { motion } from "motion/react";

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

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "PHP", image: php },
  { id: 5, name: "Python", image: python },
  { id: 6, name: "React", image: imgREACT },
  { id: 7, name: "React Native", image: imgREACT },
  { id: 8, name: "Node.js", image: imgNODE },
  { id: 9, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 10, name: "Laravel", image: laravel },
  { id: 11, name: "Django Rest", image: django },
  { id: 12, name: "PostgreSql", image: postgre },
  { id: 13, name: "MongoDB", image: mongo },
];

function Competences() {
  return (
    <motion.div
      id="Competences"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      <Title title="Compétences" />
      <div className="">
        <div
          className="flex flex-wrap gap-4 justify-center items-center
             mt-4 md:mt-0"
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="objet-cover rounded-full w-full h-full"
                />
              </div>
              <span className="text-sm mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </motion.div>
  );
}

export default Competences;
