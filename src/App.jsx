import { lazy, Suspense } from "react";
import "./App.css";
import About from "./components/About";
import Competences from "./components/Competences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import imgCSS from "./assets/techno/css.png";
import imgDjango from "./assets/techno/django.png";
import imgHTML from "./assets/techno/html.png";
import imgJavaScript from "./assets/techno/js.png";
import imgLaravel from "./assets/techno/laravel.png";
import imgMongo from "./assets/techno/mongo.png";
import imgNode from "./assets/techno/node-js.png";
import imgPHP from "./assets/techno/php.png";
import imgPostgre from "./assets/techno/postgre.png";
import imgPython from "./assets/techno/python.png";
import imgReact from "./assets/techno/react.png";
import imgTailwind from "./assets/techno/tailwind.png";
import hero from "./assets/hero.png";

const HeroSection44 = lazy(
  () => import("./components/ui/shadcn-studio-hero-section-44"),
);

function App() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen bg-base-100" role="status">
            <span className="sr-only">Chargement de la présentation…</span>
          </div>
        }
      >
        <HeroSection44
          greetings={["Bonjour", "Bienvenue", "Salut"]}
          name="Prince Nato"
          role="Développeur Full Stack Web et Mobile"
          description="Passionné par la création d’expériences numériques utiles, du design d’interfaces aux applications web et mobiles."
          availabilityLabel="Ouvert aux opportunités"
          profileImage={hero}
          downloadAction={{ label: "Découvrir mes projets", href: "#Projets" }}
          connectAction={{ label: "Me contacter", href: "#Contact" }}
          brandLogos={[
            { image: imgHTML, name: "HTML" },
            { image: imgCSS, name: "CSS" },
            { image: imgJavaScript, name: "JavaScript" },
            { image: imgReact, name: "React" },
            { image: imgTailwind, name: "Tailwind CSS" },
            { image: imgNode, name: "Node.js" },
            { image: imgPHP, name: "PHP" },
            { image: imgPython, name: "Python" },
            { image: imgLaravel, name: "Laravel" },
            { image: imgDjango, name: "Django" },
            { image: imgPostgre, name: "PostgreSQL" },
            { image: imgMongo, name: "MongoDB" },
          ]}
        />
      </Suspense>
      <About />
      <div className="p-5 md:px-[15%]">
        <Competences />
        <Projects />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
