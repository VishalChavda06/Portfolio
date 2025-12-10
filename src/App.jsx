import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Statistics from "./components/Statistics/Statistics";
import Education from "./components/Education/Education";
import Languages from "./components/Languages/Languages";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-950 text-white min-h-screen relative overflow-x-hidden">
      {/* Animated background elements */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <Header />
      
      <main className="relative z-10 p-6 md:p-8 max-w-6xl mx-auto space-y-20 md:space-y-24 pt-12">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Statistics />
        <Languages />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
