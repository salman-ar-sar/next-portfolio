"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaShareAlt,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

import { Social } from "../shared/types";

type HeaderProps = {
  socials: Social[];
};

const getSocialIcon = (site: string) => {
  switch (site) {
    case "GitHub":
      return <FaGithub size={25} />;
    case "LinkedIn":
      return <FaLinkedinIn size={25} />;
    case "Instagram":
      return <FaInstagram size={25} />;
    case "Twitter":
      return <FaTwitter size={25} />;
    case "StackOverflow":
      return <FaStackOverflow size={25} />;
    default:
      return <FaShareAlt size={25} />;
  }
};

export default function Header({ socials }: HeaderProps) {
  return (
    <header className="sticky top-4 flex justify-between max-w-7xl mx-auto z-20 px-8">
      <motion.div
        className="flex flex-row items-center gap-6 md:gap-8"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {socials.map(({ _id, url, title }) => (
          <a className="text-white hover:text-cyan-400" href={url} key={_id}>
            {getSocialIcon(title)}
          </a>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-row gap-6"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <a
          className="flex flex-row gap-2 items-center text-white hover:text-cyan-400"
          href="/SalmanAmbalamCheri_Resume.pdf"
          download
          target="_blank"
        >
          <FaFilePdf size={25} />
          <p className="uppercase hidden md:inline-flex text-sm">Resume</p>
        </a>
        <a
          className="flex flex-row gap-2 items-center text-white hover:text-cyan-400"
          href="#contact"
        >
          <FaEnvelope size={25} />
          <p className="uppercase hidden md:inline-flex text-sm">
            To Get In Touch
          </p>
        </a>
      </motion.div>
    </header>
  );
}
