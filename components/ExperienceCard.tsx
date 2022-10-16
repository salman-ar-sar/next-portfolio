import Image from "next/future/image";
import { motion } from "framer-motion";
import type { StaticImageData } from "next/future/image";

type ExperienceCardProps = { imageSrc: StaticImageData };

export default function ExperienceCard({ imageSrc }: ExperienceCardProps) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[32rem] md:w-[38rem] xl:w-[56rem] snap-center bg-background-lite opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-52 xl:h-52 object-cover object-center"
          src={imageSrc}
          alt="Company"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Hatio</h4>
        <p className="font-bold text-2xl mt-1">Software Engineer</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png"
            alt="RN"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png"
            alt="RN"
          />
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Started - Ended</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
}
