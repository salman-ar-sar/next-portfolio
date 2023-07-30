"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { urlFor } from "../lib/sanity";
import type { Project } from "../shared/types";

type ProjectsProps = {
  projects: Array<Project>;
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400/80">
        {projects
          .slice(0)
          .reverse()
          .map((project, index) => (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 mD:p-44 h-screen"
            >
              <motion.div
                className="relative w-1/2 h-1/2"
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  className="p-1 object-contain"
                  alt={project.title}
                  src={urlFor(project.image).url()}
                  fill
                />
              </motion.div>

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-cyan-400/50">
                    {index + 1} of {projects.length}
                  </span>
                  :&nbsp;
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 cursor-pointer"
                  >
                    {project.title}
                  </a>
                </h4>

                <div className="flex items-center justify-center space-x-2">
                  {project.technologies.map((tech) => (
                    <div key={tech._id} className="relative w-10 h-10">
                      <Image
                        className="p-1 object-contain"
                        alt={tech.title}
                        src={urlFor(tech.image).url()}
                        sizes="2.5rem"
                        fill
                      />
                    </div>
                  ))}
                </div>

                <p className="text-lg text-center md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-cyan-400/10 left-0 h-[30rem] -skew-y-12" />
    </motion.div>
  );
}
