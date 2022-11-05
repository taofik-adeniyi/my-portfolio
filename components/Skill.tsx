import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import sanitylogo from "../public/sanity.png";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full object-cover border-gray-500 border h-24 w-24  md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F4000%2F0*yqbRInqX0ZRUlVS0&f=1&nofb=1&ipt=1119c06e377c851984c42c2e33632391b5eb96de52e99e507bde4c590080d653&ipo=images"
        // src="../public/sanity.png"
        src={sanitylogo.src}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl text-black opacity-100 font-bold">100%</p>
        </div>
      </div>
      {/* <Image src={sanitylogo} width="100px" height="200px"/> */}
    </div>
  );
};

export default Skill;
