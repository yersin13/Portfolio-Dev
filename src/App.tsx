import { motion } from 'framer-motion';
import { useState } from 'react';

export default function App() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects = [
    {
      title: 'Local Shop Inventory',
      desc: 'React + SQL.js + Tailwind + Netlify',
      github: 'https://github.com/yourusername/inventory-app',
      demo: 'https://inventory-demo.netlify.app',
      details: 'Manage inventory with in-browser SQL. Full CRUD, category filters, and offline mode.',
    },
    {
      title: 'Learn Québécois',
      desc: 'Ionic React + Netlify',
      github: 'https://github.com/yourusername/learn-quebecois',
      demo: 'https://learn-quebecois.netlify.app',
      details: 'Language app with lessons, quiz games, and cultural expressions from Québec.',
    },
    {
      title: 'Advanced SQL Demo',
      desc: 'React + sql.js + Live SQL Console',
      github: 'https://github.com/yourusername/sql-demo',
      demo: 'https://sql-demo.netlify.app',
      details: 'Live SQL editor with sortable tables and simulated transactions for learning.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen relative overflow-x-hidden">
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-[length:400%_400%] bg-gradient-to-tr from-purple-900 via-gray-800 to-blue-900 opacity-30" />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Yersin Hernandez
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          Full-Stack Projects • React • SQL • Dev Tools
        </motion.p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition"
        >
          View Projects
        </a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              layout
              onClick={() => setExpanded(i === expanded ? null : i)}
              className="cursor-pointer backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.desc}</p>
              {expanded === i && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-gray-400"
                >
                  {project.details}
                </motion.p>
              )}
              <div className="flex gap-4 mt-4">
                <a href={project.github} target="_blank" className="text-blue-400 hover:underline">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" className="text-green-400 hover:underline">
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          {['React', 'TypeScript', 'Tailwind', 'SQL.js', 'Ionic', 'Netlify', 'Git'].map((skill, i) => (
            <span key={i} className="bg-gray-700 px-4 py-2 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 bg-gray-800 text-center text-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
        <p className="max-w-xl mx-auto text-lg">
          Mechanical engineer turned IT professional with CompTIA A+ and Network+ certifications.
          Passionate about solving real-world problems with code. Actively building and deploying
          projects using React, SQL, and modern web tools.
        </p>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="flex justify-center gap-6 text-xl">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-blue-400">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-blue-400">
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
