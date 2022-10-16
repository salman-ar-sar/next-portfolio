import Head from "next/head";
import Link from "next/link";
import { HiArrowCircleUp } from "react-icons/hi";
import type { NextPage } from "next";

import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const Home: NextPage = () => {
  return (
    <div className="bg-background-color text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400/80">
      <Head>
        <title>Salman&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio app for Salman Ambalam Cheri - A full stack engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section id="landing" className="snap-center">
          <Landing />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <Experience />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </main>

      <footer className="sticky bottom-5 w-full flex justify-center">
        <Link href="#landing">
          <HiArrowCircleUp className="h-10 w-10 rounded-full text-gray-400 hover:text-cyan-400 cursor-pointer" />
        </Link>
      </footer>
    </div>
  );
};

export default Home;
