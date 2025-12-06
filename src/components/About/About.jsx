import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const paragraphs = [
    "Hello! I'm Vishal Chavda, a passionate 20-year-old BCA (Bachelor of Computer Applications) student in my third year, dedicated to mastering the art of full-stack web development. My journey in programming began with curiosity and has evolved into a deep commitment to creating meaningful digital experiences.",
    "Currently, I'm immersing myself in modern web technologies, focusing on building robust applications with React for dynamic front-end experiences and exploring backend development with Node.js and Nest.js. I believe in learning by doing, which is why I actively work on real-world projects that challenge my skills and expand my understanding.",
    "Beyond coding, I'm fascinated by the intersection of technology and user experience. I strive to write clean, maintainable code and create applications that not only function well but also provide intuitive and engaging user interfaces. My goal is to become a versatile developer who can contribute meaningfully to innovative projects."
  ];

  return (
    <motion.section 
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="about" 
      className="bg-gray-800/50 p-10 md:p-12 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-gray-600/70 relative overflow-hidden"
    >
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div className="relative z-10">
        <motion.h2 
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold mb-10 text-white tracking-tight"
        >
          About Me
        </motion.h2>
        
        <div className="space-y-8 text-gray-300 leading-relaxed text-lg md:text-xl">
          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className="relative pl-8 border-l-2 border-gray-700/50 hover:border-gray-600 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              {index === 0 && (
                <motion.span
                  className="absolute -left-4 text-6xl font-bold text-white opacity-20"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  H
                </motion.span>
              )}
              {para}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;

