import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import prescripto from "../assets/prescripto.png";
import ecommerce from "../assets/e-commerce.png";
import blogApp from "../assets/blogApp.png";
import college from "../assets/college.png";

gsap.registerPlugin(ScrollTrigger);
const Project = ({ ref }) => {
  const contactRef = useRef(null);

  const projects = [
    {
      title: "Ehya – Interactive Blogging Platform",
      link: "https://blog-app-vercel-synk.vercel.app/",
      description:
        "Feature-rich blogging app with a dynamic commenting system, admin panel, and user authentication. Built to scale with modern full-stack technologies.",
      FE: "https://github.com/raulmo9t/blogAppVercel.git",
      BE: "https://github.com/raulmo9t/render-blogApp-express.git",
      image: blogApp,
      tech: ["React", "Node.js", "MongoDB", "TanStack Query", "Redux"],
    },
    {
      title: "Forever – Full-Stack E-Commerce Platform",
      link: "https://e-commerce-app-vercel.vercel.app/",
      description:
        "A sleek and responsive e-commerce web app featuring product listings, cart management, and user flows. Only frontend hosted currently.",
      FE: "https://github.com/raulmo9t/eCommerceAppVercel.git",
      BE: "https://github.com/raulmo9t/eCommerceAppBackend.git",
      ADMIN: "https://github.com/raulmo9t/eCommerceAppAdminVercel.git",
      image: ecommerce,
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Christ – College Management Interface",
      link: "https://college-app-vercel.vercel.app/",
      description:
        "Custom-built portal for college events and announcements. Designed from scratch with smooth animations and an intuitive layout.",
      FE: "https://github.com/raulmo9t/collegeAppVercel.git",
      image: college,
      tech: ["React", "GSAP"],
    },
    {
      title: "Prescripto – Doctor Appointment Booking App",
      link: "https://prescripto-app-vercel.vercel.app/",
      description:
        "Full-stack appointment scheduling platform for healthcare services, with support for admin and patient portals. Only frontend hosted currently.",
      FE: "https://github.com/raulmo9t/prescriptoAppVercel.git",
      BE: "https://github.com/raulmo9t/prescriptoAppBackend.git",
      ADMIN: "https://github.com/raulmo9t/prescriptoAppAdminVercel.git",
      image: prescripto,
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, contactRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-black to-purple-900 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Featured Projects
        </h2>

        <div
          ref={contactRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group project-card relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <a href={project.link}>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                </a>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="pb-1">See code</p>
                <div className="flex flex-wrap gap-2 pb-2">
                  {project.BE ? (
                    <a
                      href={project.BE}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                    >
                      Backend Code
                    </a>
                  ) : null}
                  {project.FE ? (
                    <a
                      href={project.FE}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                    >
                      Frontend Code
                    </a>
                  ) : null}
                  {project.ADMIN ? (
                    <a
                      href={project.ADMIN}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                    >
                      Admin
                    </a>
                  ) : null}
                </div>
                <p className="pb-1">Tech Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
