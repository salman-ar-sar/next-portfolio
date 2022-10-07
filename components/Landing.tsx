import Image from "next/future/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import ProfilePicture from "../assets/ProfilePicture.jpg";
import Link from "next/link";

type LandingProps = {};

export default function Landing({}: LandingProps) {
  const [text, count] = useTypewriter({
    words: ["Hey, Salman here", "<TechNerd />", "GeekyPerfectionist.tsx"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 object-cover"
        src={ProfilePicture}
        alt="My profile picture"
      />
      <div className="z-10">
        <h2 className="text-lg uppercase text-gray-500 pb-2 tracking-[0.75rem]">
          Full Stack Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="cyan" />
        </h1>

        <div className="mt-5">
          <Link href="#about">
            <button className="landing-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="landing-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="landing-button">Skills</button>
          </Link>
          <Link href="#works">
            <button className="landing-button">Works</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
