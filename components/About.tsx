import { motion } from "framer-motion";
import Image from "next/future/image";

import AboutImage from "../assets/About.jpg";
import { urlFor } from "../lib/sanity";
import { SanityImage } from "../shared/types";

type AboutProps = {
  profilePic: SanityImage;
  backgroundInformation: string;
};

export default function About({
  profilePic,
  backgroundInformation,
}: AboutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="relative -mb-29 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[24rem] xl:h-[30rem]"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          className="rounded-full md:rounded-lg object-cover"
          src={urlFor(profilePic).url()}
          alt="My profile picture"
          sizes="(max-width: 768px) 14rem,
              (max-width: 1200px) 16rem,
              24rem"
          priority
          fill
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A little{" "}
          <span className="underline decoration-cyan-400/50">about</span> me
        </h4>
        <p className="text-base">{backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
