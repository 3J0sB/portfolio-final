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
            className={`text-lg font-main transition-colors ${activeSection === section.key
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
              className="absolute w-full flex justify-center min-h-[80vh] mt-20"
            >
              <div className="text-start w-full">
                <h2 className="text-6xl uppercase font-main md:text-[100px] font-bold text-white mb-20">
                  NICO TREJOS
                </h2>
                <h1 className="text-6xl uppercase font-main md:text-[115px] font-bold text-white mt-30">
                  FULLSTACK DEVELOPER
                </h1>
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
              className="space-y-2 p-6 absolute w-full flex flex-col  min-h-[80vh] items-center"
            >

              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl font-main text-white mb-4">{">"} whoami</h2>
                <h1 className="text-3xl font-main text-white mb-4">Full-Stack Developer</h1>
                <p className="text-2xl font-text text-justify text-white mb-4">
                  Hello, my name is Nico Trejos, I'm a Full-Stack Developer from
                  Chile. I specialize in
                  designing and building web applications, integrating both
                  frontend and backend to deliver complete, scalable solutions
                  tailored to user needs. I am characterized by my adaptability
                  to different technological environments, my constant interest
                  in learning new tools, and my commitment to delivering
                  high-quality results in every project I undertake 😼👍
                  <span className="ml-1 animate-pulse">_</span>
                </p>
              </div>

              {/* Contenido adicional - 2/3 */}
              <div className="w-1/2  flex flex-col justify-center">
                {/* Opción 1: Terminal simulado */}
                <div className="bg-black/30 border border-white/20 rounded p-4 font-mono text-sm">
                  <div className="text-green-400 mb-2">$ cat /etc/about-me</div>
                  <div className="text-white space-y-1">
                    <div>Location: Talca, Chile 🇨🇱</div>
                    <div>Languages: Spanish (native), English (Advanced)</div>
                    <div>Status: Available for new opportunities</div>
                    <div className="text-green-400 mt-2">$ ls -la interests/</div>
                    <div>🎮 Gaming • 🎵 Music • 📚 Learning • 😼 cats</div>
                  </div>
                </div>
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
              className="space-y-2 p-6 absolute w-full flex flex-col justify-center"
            >
              <h2 className="text-2xl text-white mb-6">{">"} ./skills.log</h2>
              <div className="grid grid-cols-2 gap-6 font-mono">
                <div className="space-y-2">
                  <div className="text-green-400">[FRONTEND]</div>
                  <div className="text-white pl-4">→ JavaScript.js</div>
                  <div className="text-white pl-4">→ React.jsx</div>
                  <div className="text-white pl-4">→ Next.js</div>
                  <div className="text-white pl-4">→ TailwindCSS</div>
                </div>
                <div className="space-y-2">
                  <div className="text-blue-400">[BACKEND]</div>
                  <div className="text-white pl-4">→ Python.py</div>
                  <div className="text-white pl-4">→ FastAPI</div>
                  <div className="text-white pl-4">→ PostgreSQL</div>
                  <div className="text-white pl-4">→ Prisma</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-yellow-400">[TOOLS]</div>
                <div className="text-white pl-4">→ Docker 🐳 Git 📝 CI/CD ⚙️</div>
              </div>
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
                    target="_blank"
                    href="https://red-maestro.vercel.app/"
                    className="text-white cursor-pointer hover:underline"
                  >
                    RED_MAESTRO/
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
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/nicolas-ignacio-trejos-berrios/"
                  className="text-white cursor-pointer hover:underline"
                >
                  Linkedin
                </Link>
              </p>
              <p className="text-white  ">
                <Link
                  target="_blank"
                  href="https://github.com/3J0sB"
                  className="text-white cursor-pointer hover:underline"
                >
                  Github
                </Link>
              </p>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
