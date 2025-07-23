import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Vite. Features smooth animations and a clean design to showcase my skills and projects.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/vishalchavda/portfolio",
      live: "#"
    },
    {
      title: "Todo Management App",
      description: "A full-featured todo application with CRUD operations, local storage persistence, and intuitive user interface for task management.",
      tech: ["React", "JavaScript", "Local Storage", "CSS3"],
      github: "https://github.com/vishalchavda/todo-app",
      live: "#"
    },
    {
      title: "Learning Management System",
      description: "Currently developing a comprehensive LMS platform for educational institutions with course management, student tracking, and assessment features.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/vishalchavda/lms-project",
      live: "#"
    }
  ];

  const handleResumeDownload = () => {
    // Create a dummy resume download - replace with actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your actual resume file to public folder
    link.download = 'Vishal_Chavada_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="font-sans bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 text-white min-h-screen selection:bg-blue-500/20">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-gradient-to-r from-slate-900/60 to-gray-900/60 backdrop-blur-md shadow-2xl p-8 border-b border-gray-700/40 sticky top-0 z-50"
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
              Vishal Chavada
            </h1>
            <p className="text-gray-300 text-lg font-medium mt-1 tracking-wide">Fullstack Developer | BCA Student</p>
          </motion.div>
          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 hover:from-blue-700 hover:via-blue-800 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl transition-all duration-500 flex items-center gap-3 border border-blue-500/20 hover:border-blue-400/40 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="p-8 max-w-5xl mx-auto space-y-16"
      >
        {/* About Me Section */}
        <motion.section variants={itemVariants} id="about" className="bg-gradient-to-br from-slate-800/40 to-gray-800/40 backdrop-blur-sm p-10 rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">About Me</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-400 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              Hello! I'm Vishal Chavada, a passionate 20-year-old BCA (Bachelor of Computer Applications) student in my third year, 
              dedicated to mastering the art of full-stack web development. My journey in programming began with curiosity and has 
              evolved into a deep commitment to creating meaningful digital experiences.
            </p>
            <p>
              Currently, I'm immersing myself in modern web technologies, focusing on building robust applications with React for 
              dynamic front-end experiences and exploring backend development with Node.js and Nest.js. I believe in learning by 
              doing, which is why I actively work on real-world projects that challenge my skills and expand my understanding.
            </p>
            <p>
              Beyond coding, I'm fascinated by the intersection of technology and user experience. I strive to write clean, 
              maintainable code and create applications that not only function well but also provide intuitive and engaging 
              user interfaces. My goal is to become a versatile developer who can contribute meaningfully to innovative projects.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants} id="skills" className="bg-gradient-to-br from-gray-800/40 to-slate-800/40 backdrop-blur-sm p-10 rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent tracking-tight">Technical Skills</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Framer Motion", "Bootstrap"].map((skill) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 text-blue-200 px-4 py-2 rounded-full text-sm border border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-400/60 transition-all duration-300 cursor-default shadow-lg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-emerald-300 mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                Backend & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Nest.js", "Git", "GitHub", "REST APIs"].map((skill) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 text-emerald-200 px-4 py-2 rounded-full text-sm border border-emerald-500/40 hover:bg-emerald-600/30 hover:border-emerald-400/60 transition-all duration-300 cursor-default shadow-lg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section variants={itemVariants} id="projects" className="bg-gradient-to-br from-slate-800/40 to-gray-800/40 backdrop-blur-sm p-10 rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900/60 to-slate-900/60 p-8 rounded-xl border border-gray-600/40 shadow-xl hover:shadow-2xl hover:border-gray-500/50 transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-100 group-hover:text-white transition-colors">{project.title}</h3>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-md text-sm border border-gray-600/40 hover:border-gray-500/60 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.github}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-600/30 hover:to-blue-700/30 text-blue-200 px-6 py-3 rounded-lg transition-all duration-300 border border-blue-500/40 hover:border-blue-400/60 shadow-lg group"
                  >
                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                  
                  {project.live !== "#" && (
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.live}
                      className="flex items-center gap-2 bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 hover:from-emerald-600/30 hover:to-emerald-700/30 text-emerald-200 px-6 py-3 rounded-lg transition-all duration-300 border border-emerald-500/40 hover:border-emerald-400/60 shadow-lg group"
                    >
                      <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section variants={itemVariants} id="contact" className="bg-gradient-to-br from-gray-800/40 to-slate-800/40 backdrop-blur-sm p-10 rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent tracking-tight">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              whileHover={{ scale: 1.03, x: 10, y: -5 }}
              href="mailto:vc229067@gmail.com"
              className="flex items-center gap-6 bg-gradient-to-r from-blue-600/10 to-blue-700/10 hover:from-blue-600/20 hover:to-blue-700/20 p-6 rounded-xl transition-all duration-500 border border-blue-500/30 hover:border-blue-400/50 shadow-lg hover:shadow-xl group"
            >
              <div className="bg-gradient-to-r from-blue-600/30 to-blue-700/30 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-blue-200 text-lg">Email</p>
                <p className="text-gray-300 text-sm">vc229067@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, x: 10, y: -5 }}
              href="https://www.linkedin.com/in/vishal-chavda-02559432b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 bg-gradient-to-r from-emerald-600/10 to-emerald-700/10 hover:from-emerald-600/20 hover:to-emerald-700/20 p-6 rounded-xl transition-all duration-500 border border-emerald-500/30 hover:border-emerald-400/50 shadow-lg hover:shadow-xl group"
            >
              <div className="bg-gradient-to-r from-emerald-600/30 to-emerald-700/30 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-emerald-200 text-lg">LinkedIn</p>
                <p className="text-gray-300 text-sm">Connect with me</p>
              </div>
            </motion.a>
          </div>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-center p-12 text-gray-400 bg-gradient-to-r from-slate-950/40 to-gray-950/40 border-t border-gray-700/30 mt-16"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center gap-3 text-lg"
        >
          <span>© 2025 Vishal Chavada</span>
          <span className="text-gray-600">•</span>
          <span>Built with</span>
          <span className="text-blue-400 font-semibold">React</span>
          <span className="text-gray-600">&</span>
          <span className="text-emerald-400 font-semibold">Framer Motion</span>
          <motion.span
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="text-xl"
          >
            💼
          </motion.span>
        </motion.div>
      </motion.footer>
    </div>
  );
}
