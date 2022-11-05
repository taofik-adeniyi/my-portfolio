import { motion } from "framer-motion";
import React from "react";
import sanimaraLandingLogo from "../public/sanimara.png";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden text-left flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="title">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab08]/80 scrollbar-thin">
        {/* projects */}
        {projects.map((project, key) => (
          <motion.div
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={key}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <img src={sanimaraLandingLogo.src} alt="project prime" />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  Project {key + 1} of {projects.length}:
                </span>
                Sanimara
              </h4>
              <p className="text-center md:text-left text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, neque. Autem placeat, velit beatae adipisci molestiae,
                culpa cupiditate possimus iste odit perferendis, eum harum? Hic
                quam sit fuga quis quae!
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
