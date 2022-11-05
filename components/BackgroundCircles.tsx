import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="circle w-[200px] h-[200px]" />
      <div className="circle w-[300px] h-[300px]" />
      <div className="circle w-[500px] h-[500px]" />
      <div className="border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] animate-pulse absolute mt-52 rounded-full" />
      <div className="circle w-[800px] h-[800px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
