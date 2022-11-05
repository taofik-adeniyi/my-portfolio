import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://sanimara.com/assets/img/logo.png"
        // src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/302068146_394294559487715_7390157828212857772_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NwDrD6lgzsAAX9K3-PG&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDhw7CqUuEBkvP0aFFhaF7l9ixFNCisql3leYKaIC3PYQ&oe=636B5FF2"
        alt="experience logo"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div>
        <h4>Job Title: CEO OF TAOFIK ENT</h4>
        <p>TAOFIK ENT</p>
        <div>
          {/* TECH USED */}
          {/* TECH USED */}
          {/* TECH USED */}
          {/* TECH USED */}
        </div>
        <p>Started Work ..... Ended Work ....</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
