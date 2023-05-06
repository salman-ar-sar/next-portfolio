import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import type { Technology } from "../shared/types";

type SkillProps = {
  tech: Technology;
  moveLeft?: boolean;
};

export default function Skill({ tech, moveLeft }: SkillProps) {
  const { image, title = "" } = tech;

  return (
    <div className="group flex cursor-pointer">
      <motion.div
        initial={{ x: moveLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div
          className="w-16 h-16 md:w-20 md:h-20 xl:w-24
            xl:h-24 rounded-full border border-gray-500 object-cover group-hover:grayscale transition duration-300 ease-out"
        >
          <Image
            className="p-4 object-contain"
            alt={title}
            src={urlFor(image).url()}
            sizes="6rem"
            fill
          />
        </div>
        <div className="absolute top-0 opacity-0 hover:opacity-80 transition duration-200 ease-in-out flex items-center justify-center h-full w-full p-2 break-all rounded-full group-hover:bg-white">
          <p className="text-2xl text-center font-semibold text-black opacity-100">
            {title}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

Skill.defaultProps = {
  moveLeft: false,
};
