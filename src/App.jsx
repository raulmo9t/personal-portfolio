import React, { useRef } from "react";
import Hero from "./component/Hero";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";
import { Toaster } from "react-hot-toast";

const App = () => {
  const project = useRef(null);
  const contact = useRef(null);

  const scrollToProject = () => {
    if (project.current) {
      project.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    if (contact.current) {
      contact.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white relative overflow-hidden">
      <Toaster />
      <Hero
        onScrollToProject={scrollToProject}
        onScrollToContact={scrollToContact}
      />
      <About />
      <Project ref={project} />
      <Contact ref={contact} />
    </div>
  );
};

export default App;
