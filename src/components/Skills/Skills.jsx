import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, staggerItem } from "../../utils/animations";
import { frontendSkills, backendSkills } from "../../data/skills";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="skills" 
      className="bg-gray-800/50 p-10 md:p-12 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-gray-600/70 relative overflow-hidden"
    >
      {/* Animated background dots */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />

      <motion.div className="relative z-10">
        <motion.h2 
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold mb-12 text-white tracking-tight"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <motion.div 
                className="w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Frontend Development
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {frontendSkills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700/70 text-white px-5 py-2.5 rounded-lg text-sm border border-gray-600/50 hover:bg-gray-700 hover:border-gray-500 transition-all duration-200 cursor-pointer font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <motion.div 
                className="w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              Backend & Tools
            </motion.h3>
            <p className="text-gray-400 text-sm md:text-base">
              Currently learning backend engineering and strengthening Nest.js, Git/GitHub, and REST API skills.
            </p>
            <motion.div 
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {backendSkills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700/70 text-white px-5 py-2.5 rounded-lg text-sm border border-gray-600/50 hover:bg-gray-700 hover:border-gray-500 transition-all duration-200 cursor-pointer font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;

