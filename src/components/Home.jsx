import React from "react";
import { easeOut, motion } from "motion/react";
import hero from '../assets/hero.png'

function Home() {
  return (
    <motion.div
      id="Home"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: easeOut }}
      >
        <h1 className="text-5xl md:text-6xl text-center md:text-left font-bold mt-4 md:mt-0">
          Bonjour, <br /> je suis{" "}
          <span className="text-accent">Prince Nato</span>
        </h1>
        <p className="my-5 text-center md:text-left text-md">
          Jeune Développeur Full Stack Web et Mobile <br /> passionné de la tech
        </p>
      </motion.div>
      <div className="md:ml-60" animate={{ x: [null, 100, 0] }}>
        <motion.img
          src={hero}
          alt=""
          className="w-90 h-96 object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: "84% 16% 40% 60% / 43% 50% 50% 57% ",
          }}
        />
      </div>
    </motion.div>
  );
}

export default Home;
