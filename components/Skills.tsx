import { motion } from "framer-motion";

import type { Technology } from "../shared/types";
import Skill from "./Skill";

type SkillsProps = {
  technologies: Technology[];
};

export default function Skills({ technologies }: SkillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[125rem] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {technologies.map((tech, index) => {
          const halfLength = technologies.length / 2;

          return (
            <Skill
              key={tech._id}
              tech={tech}
              moveLeft={index < halfLength ? false : true}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
