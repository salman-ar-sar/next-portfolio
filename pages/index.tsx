import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";

import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSocials,
  fetchTechnologies,
} from "../services";
import type {
  PageInfo,
  Social,
  Technology,
  Project,
  Experience as ExperienceType,
  SanityImage,
} from "../shared/types";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  technologies: Technology[];
  projects: Project[];
  experiences: ExperienceType[];
};

const Home: NextPage<Props> = ({
  socials,
  pageInfo,
  experiences,
  technologies,
  projects,
}: Props) => {
  const {
    name = "",
    email = "",
    phoneNumber = "",
    address = "",
    landingImage = {} as SanityImage,
    role = "",
    profilePic = {} as SanityImage,
    backgroundInformation = "",
  } = pageInfo;

  return (
    <div
      id="main"
      className="bg-background-color text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400/80 scroll-smooth"
    >
      <Head>
        <title>Salman&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio app for Salman Ambalam Cheri - A full stack engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <main>
        <section id="landing" className="snap-center">
          <Landing landingImage={landingImage} name={name} role={role} />
        </section>
        <section id="about" className="snap-center">
          <About
            profilePic={profilePic}
            backgroundInformation={backgroundInformation}
          />
        </section>
        <section id="experience" className="snap-center">
          <Experience experiences={experiences} />
        </section>
        <section id="skills" className="snap-start">
          <Skills technologies={technologies} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe
            email={email}
            address={address}
            phoneNumber={phoneNumber}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const technologies = await fetchTechnologies();
  const projects = await fetchProjects();
  const experiences = await fetchExperiences();

  return {
    props: {
      pageInfo,
      socials,
      technologies,
      projects,
      experiences,
    },
    revalidate: 10,
  };
};
