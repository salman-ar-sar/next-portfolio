import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSocials,
  fetchTechnologies,
} from "../services";
import type { SanityImage } from "../shared/types";

export default async function Home() {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const technologies = await fetchTechnologies();
  const projects = await fetchProjects();
  const experiences = await fetchExperiences();

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
}
