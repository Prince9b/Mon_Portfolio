import React from "react";
import { motion as Motion } from "motion/react";
import hero from '../assets/hero.png'

function Home() {
  return (
    <Motion.div
      id="Home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
    >
      <div>
        <h1 className="text-5xl md:text-6xl text-center md:text-left font-bold mt-4 md:mt-0">
          Bonjour, <br /> je suis{" "}
          <span className="text-accent">Prince Nato</span>
        </h1>
        <p className="my-5 text-center md:text-left text-md">
          Jeune Développeur Full Stack Web et Mobile <br /> passionné de la tech
        </p>
      </div>
      <div className="md:ml-60">
        <Motion.img
          src={hero}
          alt=""
          className="w-90 h-96 object-cover border-8 border-accent shadow-xl"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            borderRadius: "84% 16% 40% 60% / 43% 50% 50% 57% ",
          }}
        />
      </div>
    </Motion.div>
  );
}

export default Home;
