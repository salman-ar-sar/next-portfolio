import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

import HatioImg from "../assets/hatio.png";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard imageSrc={HatioImg} />
        <ExperienceCard imageSrc={HatioImg} />
        <ExperienceCard imageSrc={HatioImg} />
      </div>
    </motion.div>
  );
}
