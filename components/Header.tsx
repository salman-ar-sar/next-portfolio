import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <header className="stick top-0 flex justify-between max-w-7xl mx-auto z-20">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <SocialIcon
          url="https://github.com/salman-ar-sar"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/salman-ar/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/salman_ar_sar/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://stackoverflow.com/users/16142197/salman-ar"
          fgColor="gray"
          bgColor="white"
        />
        <SocialIcon
          url="https://twitter.com/Salman_A09"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          To Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
