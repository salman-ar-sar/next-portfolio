import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import ProfilePicture from "../assets/ProfilePicture.jpg";
import Link from "next/link";
import { SanityImage } from "../shared/types";
import { urlFor } from "../lib/sanity";

type LandingProps = {
  name: string;
  landingImage: SanityImage;
  role: string;
};

export default function Landing(props: LandingProps) {
  const { name = "", landingImage = {} as SanityImage, role = "" } = props;
  const [text] = useTypewriter({
    words: [
      `Hey, ${name.split(" ")[0]} here`,
      "<TechNerd />",
      "GeekyPerfectionist.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8">
      <BackgroundCircles />
      <div className="relative h-32 w-32">
        <Image
          className="rounded-full"
          src={urlFor(landingImage).url()}
          alt="My landing picture"
          sizes="32rem"
          priority
          fill
        />
      </div>
      <div className="z-10">
        <h2 className="text-lg uppercase text-gray-500 pb-2 tracking-[0.75rem]">
          {role}
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
          <Link href="#projects">
            <button className="landing-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
