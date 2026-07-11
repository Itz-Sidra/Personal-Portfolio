import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Patents from "./sections/Patents";
import Achievements from "./sections/Achievements";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="bg-paper text-ink min-h-screen font-body">
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Patents />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
