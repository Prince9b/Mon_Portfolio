import { Container, Github, Linkedin } from "lucide-react";
import React from "react";
import {motion} from 'motion/react'

function Footer() {
  return (
    <motion.footer initial={{ y: 100, opacity: 0 }}        // Position de départ
      whileInView={{ y: 0, opacity: 1 }}       // Position finale
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.2 }} className="footer footer-horizontal footer-center  p-10">
      <aside>
        <Container className='w-15 h-15' />
           
        <p className="font-bold">
           P
            <span className='text-accent'>DEV</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous les droits sont reserves</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Prince9b" target="_blank"><Github/></a>
          <a href="" target="_blank"><Linkedin/></a>
        </div>
      </nav>
    </motion.footer>
  );
}

export default Footer;
