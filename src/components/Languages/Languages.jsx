import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, staggerItem } from "../../utils/animations";

const Languages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Gujarati", level: "Native" },
    { name: "Hindi", level: "Fluent" }
  ];

  return (
    <motion.section 
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="languages" 
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
          className="text-5xl md:text-6xl font-bold mb-12 text-white tracking-tight"
        >
          Languages
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 text-center"
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {lang.name}
              </motion.h3>
              <motion.p 
                className="text-gray-400 text-sm"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {lang.level}
              </motion.p>
              
              {/* Decorative circle */}
              <motion.div
                className="mt-4 mx-auto w-16 h-16 rounded-full bg-gray-700/30 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl">
                  {lang.name === "English" && "🇬🇧"}
                  {lang.name === "Gujarati" && "🇮🇳"}
                  {lang.name === "Hindi" && "🇮🇳"}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Languages;

