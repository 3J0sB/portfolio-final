"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SECTIONS = [
  { key: "wellcome", label: "wellcome" },
  { key: "whoami", label: "whoami" },
  { key: "skills", label: "skills.log" },
  { key: "projects", label: "ls projects/" },
  { key: "contact", label: "contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("wellcome");

  return (
    <main
      className="relative mx-auto px-6 py-16 crt min-h-screen flex flex-col"
      style={{
        background: "#181818 url('/fondo-universo.webp') repeat center center",
        overflow: "hidden",
      }}
    >


      <div className="vhs-lines" />

      {/* NAVIGATION */}
      <nav className="flex justify-start gap-6 vhs-nav">
        {SECTIONS.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key)}
            className={`text-lg transition-colors ${activeSection === section.key
              ? "text-white underline"
              : "text-white"
              }`}
          >
            {"["} {section.label} {"]"}
          </button>
        ))}
      </nav>

      {/* SECTION CONTENT */}
      <div className="relative mt-10">
        <AnimatePresence mode="wait">

          {activeSection === "wellcome" && (
            <motion.section
              key="wellcome"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 p-6 absolute w-full"
            >
              <div className="flex">
                <div className="w-1/2">
                  <h2 className="text-7xl text-white ">Nico Trejos</h2>
                  <p className="text-5xl  text-white ">Full Stack Software Developer</p>
                </div>
                <div className="w-1/2">
                  <img
                    src="/waton-antonio.jpg"
                    alt="mifu"
                    className="shadow-lg max-w-xs mx-auto"
                  />
                </div>
              </div>


            </motion.section>
          )}

          {activeSection === "whoami" && (
            <motion.section
              key="whoami"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 p-6 absolute w-full"
            >
              <h2 className="text-2xl text-white ">{">"} whoami</h2>
              <h1 className="text-white">Full-Stack Developer</h1>
              <div className="flex w-1/3">
                <p className="text-justify text-white">
                  Hello, my name is Nico Trejos, I'm a Full-Stack Developer from
                  Chile focused on full-stack development. I specialize in
                  designing and building web applications, integrating both
                  frontend and backend to deliver complete, scalable solutions
                  tailored to user needs. I am characterized by my adaptability
                  to different technological environments, my constant interest
                  in learning new tools, and my commitment to delivering
                  high-quality results in every project I undertake
                  <span className="ml-1 animate-pulse">_</span>
                </p>
              </div>
            </motion.section>
          )}

          {activeSection === "skills" && (
            <motion.section
              key="skills"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 p-6 absolute w-full"
            >
              <h2 className="text-2xl text-white">{">"} skills.log</h2>
              <ul className="list-disc list-inside space-y-1 text-white">
                <li>JavaScript / TypeScript / Python</li>
                <li>Next.js / React / TailwindCSS / Framer Motion</li>
                <li>FastAPI / Prisma / PostgreSQL</li>
                <li>Docker / Git / CI/CD</li>
              </ul>
            </motion.section>
          )}

          {activeSection === "projects" && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 p-6 absolute w-full"
            >
              <h2 className="text-2xl text-white">{">"} ls projects/</h2>
              <ul className="space-y-1 flex flex-col">
                <li>
                  <Link
                    href="https://red-maestro.vercel.app/"
                    className="text-white cursor-pointer hover:underline"
                  >
                    RED_MAESTRO/
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/ecommerce_platform"
                    className="text-white cursor-pointer hover:underline"
                  >
                    ecommerce_platform/
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/portfolio_retro"
                    className="text-white cursor-pointer hover:underline"
                  >
                    portfolio_retro/
                  </Link>
                </li>
              </ul>
            </motion.section>
          )}

          {activeSection === "contact" && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 p-6 absolute w-full"
            >
              <h2 className="text-2xl text-white ">
                {">"} contact --email ni.trejosb@gmail.com
              </h2>
              <p className="text-white">
                https://www.linkedin.com/in/nicolas-ignacio-trejos-berrios/
              </p>
              <p className="text-white  ">https://github.com/tuusuario</p>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
