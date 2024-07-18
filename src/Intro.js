import React from "react";
import { motion } from "framer-motion";
import "./Intro.css";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Intro = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="intro"
    >
      <motion.div className="intro-text" variants={childVariants}>
        <h1>
          Hi, I’m <span>Deborah</span>
        </h1>
      </motion.div>
      <motion.div className="intro-text" variants={childVariants}>
        <h2>UI/UX Designer</h2>
      </motion.div>
      <motion.div className="intro-text" variants={childVariants}>
        <p>
          who is obsessed with creating amazing
          user experiences. I love teaming up with awesome people to deliver
          digital magic that makes you smile!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
