import { motion } from "framer-motion";

type SkillProps = {
  moveLeft?: boolean;
};

export default function Skill({ moveLeft }: SkillProps) {
  return (
    <div className="group flex cursor-pointer">
      <motion.div
        initial={{ x: moveLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <img
          className="w-16 h-16 md:w-20 md:h-20 xl:w-24
          xl:h-24 rounded-full border border-gray-500 object-cover group-hover:grayscale transition duration-300 ease-out"
          src="https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png"
          alt="RN"
        />
        <div className="absolute top-0 opacity-0 hover:opacity-80 transition duration-200 ease-in-out flex items-center justify-center h-full w-full rounded-full group-hover:bg-white">
          <p className="text-2xl text-center font-semibold text-black opacity-100">
            React Native
          </p>
        </div>
      </motion.div>
    </div>
  );
}

Skill.defaultProps = {
  moveLeft: false,
};
