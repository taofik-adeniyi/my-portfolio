import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer border border-opacity-20 border-gray-200 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://sanimara.com/assets/img/logo.png"
        // src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/302068146_394294559487715_7390157828212857772_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NwDrD6lgzsAAX9K3-PG&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDhw7CqUuEBkvP0aFFhaF7l9ixFNCisql3leYKaIC3PYQ&oe=636B5FF2"
        alt="experience logo"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job Title: CEO OF TAOFIK ENT</h4>
        <p className="text-2xl font-bold mt-1">TAOFIK ENT</p>
        <div className="flex space-x-4 my-2">
          <img
            src="https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          Started Work ..... Ended Work ....
        </p>
        <ul className="list-disc space-y-4 text-lg m-0 p-0">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis
            labore ea quidem harum nemo eveniet eaque saepe aliquam voluptate
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis
            labore ea quidem harum nemo eveniet eaque saepe aliquam voluptate
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis
            labore ea quidem harum nemo eveniet eaque saepe aliquam voluptate
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis
            labore ea quidem harum nemo eveniet eaque saepe aliquam voluptate
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis
            labore ea quidem harum nemo eveniet eaque saepe aliquam voluptate
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
