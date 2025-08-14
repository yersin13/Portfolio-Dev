import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const projects = [
    // NEW — Mar‑Bec Website
    {
      title: 'Mar‑Bec Entretien (Bilingual Site)',
      desc: 'React + Vite + CSS + Netlify',
      github: 'https://github.com/yersin13/mar-bec-website', // update if different
      demo: 'https://mar-bec-website.netlify.app/', // update if not live yet
      image: '/mar.png',        // add this image to /public
      details:
        'Bilingual (FR/EN) website for a Québec cleaning company. Services, testimonials, About, and a secure contact form. Lightweight React/Vite build with polished, mobile-first CSS.',
    },

    // NEW — Résumé Builder
    {
      title: 'Résumé Builder (Multi-template)',
      desc: 'React + Vite + TypeScript + CSS',
      github: 'https://github.com/yersin13/Resume-builder', // update if different
      demo: 'https://resume-builder-yersin.netlify.app/',     // put your Netlify URL
      image: '/resume.png',                         // add this image to /public
      details:
        'Resume builder with live preview, FR/EN toggle, multiple templates (Modern/Creative/Classic), and PDF export. Structured form data with add/remove entries.',
    },

    // EXISTING
    {
      title: 'Local Shop Inventory',
      desc: 'React + SQL.js + Tailwind + Netlify',
      github: 'https://github.com/yourusername/inventory-app',
      demo: 'https://netlify-local-shop-inventory.netlify.app/',
      image: '/local.png',
      details:
        'Manage inventory with in-browser SQL. Full CRUD, category filters, and offline mode.',
    },
    {
      title: 'Learn Québécois',
      desc: 'Ionic React + Netlify',
      github: 'https://github.com/yourusername/learn-quebecois',
      demo: 'https://learn-quebecois.netlify.app',
      image: '/learn.png',
      details:
        'Language app with lessons, quiz games, and cultural expressions from Québec.',
    },
    {
      title: 'Advanced SQL Demo',
      desc: 'React + sql.js + Live SQL Console',
      github: 'https://github.com/yourusername/sql-demo',
      demo: 'https://sql-demo.netlify.app',
      image: '/sql.png',
      details:
        'Live SQL editor with sortable tables and simulated transactions for learning.',
    },
    {
      title: 'Enneagram Personality App',
      desc: 'Ionic React + CSS Modules + Firebase + Netlify',
      github: 'https://github.com/yersin13/enneagram-app',
      demo: 'https://enneagram-app-yersin.netlify.app/',
      image: '/eneagram.png',
      details:
        'An Enneagram personality test built with Ionic React and CSS Modules. Features animated type results, celebrity comparisons, and a dynamic multi-step layout. Firebase handles user sessions. Demo login available for testing.',
      note: 'Demo credentials — Email: test@gmail.com | Password: 123456',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen relative overflow-x-hidden">
      <div className="absolute inset-0 -z-10 animate-gradient bg-[length:400%_400%] bg-gradient-to-tr from-purple-900 via-gray-800 to-blue-900 opacity-30" />

      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm shadow">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold text-white tracking-wide">Yersin.dev</h1>
          <ul className="hidden md:flex gap-6 text-sm text-gray-300 font-medium">
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-black/80 text-white px-6 py-4 space-y-4">
            <a href="#projects" onClick={() => setMobileOpen(false)} className="block hover:text-blue-400">Projects</a>
            <a href="#skills" onClick={() => setMobileOpen(false)} className="block hover:text-blue-400">Skills</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="block hover:text-blue-400">About</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block hover:text-blue-400">Contact</a>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-6">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold mb-4">
          Yersin Hernandez
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl text-gray-300 mb-6 max-w-xl">
          From mechanical systems to digital ones — I build tools that solve problems, teach through interaction, and just work.
        </motion.p>
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition">
          View Projects
        </a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              layout
              onClick={() => setExpanded(i === expanded ? null : i)}
              className="cursor-pointer backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover object-top rounded-lg mb-4 border border-white/10 shadow"
              />
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.desc}</p>

              {expanded === i && (
                <>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-sm text-gray-400"
                  >
                    {project.details}
                  </motion.p>

                  {project.note && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 text-xs text-yellow-300 italic"
                    >
                      {project.note}
                    </motion.p>
                  )}
                </>
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
      <section id="skills" className="px-6 py-20 text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          {[
            'React',
            'Vite',
            'TypeScript',
            'CSS',
            'SQL / sql.js',
            'Ionic Framework',
            'Node.js',
            'Netlify',
            'Git & GitHub',
            'Windows Deployment (MDT)',
            'Linux (Ubuntu)',
            'Active Directory',
            'CompTIA A+ Certified',
            'Network+ Certified',
            'JavaScript',
            'HTML / CSS',
          ].map((skill, i) => (
            <span key={i} className="bg-gray-700 px-4 py-2 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-center text-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
        <div className="bg-white/5 rounded-xl p-6 shadow-inner max-w-xl mx-auto">
          <p className="text-lg">
            I'm a former mechanical engineer who fell in love with tech.
            After earning my CompTIA A+ and Network+ certifications and completing a DEP in Computing Support,
            I’ve been building web apps and system deployment tools that solve real problems — and help others learn too.
            I’m currently enrolled in an AEC in Cybersecurity, and I believe in learning by doing.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 text-center bg-gray-950">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
        <div className="flex justify-center gap-6 text-xl text-gray-300">
          <a href="https://github.com/yersin13" target="_blank" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/yersin-hernandez/" target="_blank" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
