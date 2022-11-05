import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
    justify-center xl:space-y-0 mx-auto items-center
    "
    >
      <h3 className="title">Skills</h3>

      <h3 className="absolute tracking-[3px] text-gray-500 text-sm top-36">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 pt-32 overflow-hidden">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
