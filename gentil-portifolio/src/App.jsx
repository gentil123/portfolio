import Navbar from "./Pages/Nav";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Projects from "./Pages/Project";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
