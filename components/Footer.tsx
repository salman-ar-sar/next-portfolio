import Link from "next/link";
import { useEffect,useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById("main");

    const scrollHandler = () => {
      if (container && container.scrollTop > window.innerHeight)
        setIsScrolled(true);
      else setIsScrolled(false);
    };

    container?.addEventListener("scroll", scrollHandler);

    return () => {
      container?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <footer
      className={`sticky bottom-5 w-full flex justify-center ${
        isScrolled ? "" : "invisible"
      }`}
    >
      <Link href="#landing">
        <HiArrowCircleUp className="h-10 w-10 rounded-full text-gray-400 hover:text-cyan-400 cursor-pointer" />
      </Link>
    </footer>
  );
}
