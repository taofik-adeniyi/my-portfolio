import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex  flex-col relative overflow-hidden text-left max-w-full px-8 justify-evenly mx-auto items-center"
    >
      <h3 className="my-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      {/* <div className="w-[500px] h-[500px] bg-blue-600 rounded-full"></div> */}

      <div className="w-full h-fit flex md:flex-row space-x-5 overflow-x-scroll snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab08]/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
