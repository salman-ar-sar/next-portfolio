import Image from "next/future/image";
import { motion } from "framer-motion";
import type { StaticImageData } from "next/future/image";
import { Experience, SanityImage } from "../shared/types";
import { urlFor } from "../lib/sanity";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    companyImage = {} as SanityImage,
    company = "",
    dateEnded = "",
    dateStarted = "",
    isCurrentlyHere = false,
    jobTitle = "",
    points = [""],
    technologies = [],
  } = experience;

  // Update styles when more experiences are added
  // opacity-40 hover:opacity-100 transition-opacity duration-200
  // w-[32rem] md:w-[38rem] xl:w-[56rem]

  return (
    <article
      className="flex flex-col rounded-lg items-center 
     w-full md:py-4 space-y-4 flex-shrink-0 snap-center bg-background-lite overflow-hidden"
    >
      <motion.div
        className="relative w-32 h-32 xl:w-52 xl:h-52"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="rounded-full object-cover object-center"
          src={urlFor(companyImage).url()}
          alt="Company"
          fill
        />
      </motion.div>

      <div className="px-0 md:px-6">
        <h4 className="text-4xl font-light">{company}</h4>
        <p className="font-bold text-2xl mt-1">{jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {technologies.map((technology) => (
            <div key={technology._id} className="relative w-10 h-10">
              <Image
                className="p-1 object-contain"
                alt={technology.title}
                src={urlFor(technology.image).url()}
                sizes="2.5rem"
                fill
              />
            </div>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(dateStarted).toDateString()} -{" "}
          {isCurrentlyHere ? "Present" : new Date(dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-2 ml-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-back scrollbar-thumb-cyan-500/80">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
