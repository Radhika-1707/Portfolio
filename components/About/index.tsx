import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
    className="h-screen flex flex-col text-center md:text-left relative md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        ABOUT
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src={"/user.png"}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 
            xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Meet Radhika, the coding prodigy with a passion for all things tech!
          Armed with a degree in Computer Science, this dynamic Software
          Development Engineer (SDE) embarked on a thrilling journey in the tech
          industry. With one year of experience under her belt, Radhika's days
          are filled with lines of code dancing on her screen, crafting
          innovative solutions like a digital Picasso. Her fingertips move
          across the keyboard at warp speed, conjuring algorithms like spells of
          enchantment. Stay tuned as Radhika's
          quest for tech supremacy continues to ignite the world with her
          trailblazing expertise!
        </p>
      </div>
    </motion.div>
  );
}
