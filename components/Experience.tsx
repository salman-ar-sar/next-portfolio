import { motion } from "framer-motion";

import type { Experience as ExperienceType } from "../shared/types";
import ExperienceCard from "./ExperienceCard";

type ExperienceProps = {
  experiences: ExperienceType[];
};

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl z-10">
        Experience
      </h3>

      {/* Remove justify-center when more experiences are added */}
      <div className="w-full flex justify-center space-x-5 overflow-x-scroll mt-32 p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
