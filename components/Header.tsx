"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
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
        className="flex flex-row items-center gap-8"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {socials.map(({ _id, url, title }) => (
          <a className="hover:text-cyan-400" href={url} key={_id}>
            {getSocialIcon(title)}
          </a>
        ))}
      </motion.div>
      <a href="#contact">
        <motion.div
          className="flex flex-row items-center gap-4 cursor-pointer"
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <FaEnvelope size={25} className="hover:text-cyan-400" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            To Get In Touch
          </p>
        </motion.div>
      </a>
    </header>
  );
}
