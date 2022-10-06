import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaStackOverflow,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <header className="sticky top-4 flex justify-between max-w-7xl mx-auto z-20">
      <motion.div
        className="flex flex-row items-center gap-8"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <a
          href="https://github.com/salman-ar-sar"
          className="hover:text-cyan-400"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/salman-ar/"
          className="hover:text-cyan-400"
        >
          <FaLinkedinIn size={25} />
        </a>
        <a
          href="https://www.instagram.com/salman_ar_sar/"
          className="hover:text-cyan-400"
        >
          <FaInstagram size={25} />
        </a>
        <a
          href="https://twitter.com/Salman_A09"
          className="hover:text-cyan-400"
        >
          <FaTwitter size={25} />
        </a>
        <a
          href="https://stackoverflow.com/users/16142197/salman-ar"
          className="hover:text-cyan-400"
        >
          <FaStackOverflow size={25} />
        </a>
      </motion.div>
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
    </header>
  );
}
