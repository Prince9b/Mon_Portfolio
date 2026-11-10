import { Container, Github } from "lucide-react";
import { motion as Motion } from "motion/react";

function Footer() {
  return (
    <Motion.footer
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="border-t border-base-content/10 bg-base-200/40 px-5 py-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <a href="#Home" className="flex items-center gap-2 font-bold">
            <Container className="size-5 text-accent" aria-hidden="true" />P
            <span className="text-accent">DEV</span>
          </a>
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} Prince Nato. Tous droits réservés.
          </p>
        </div>
        <a
          href="https://github.com/Prince9b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Prince Nato"
          className="flex size-10 items-center justify-center rounded-full border border-base-content/10 transition-colors hover:border-accent/50 hover:bg-accent/10"
        >
          <Github className="size-5" aria-hidden="true" />
        </a>
      </div>
    </Motion.footer>
  );
}

export default Footer;
