import type {
  Experience,
  PageInfo,
  Project,
  Social,
  Technology,
} from "../shared/types";

const fetchWrapper = (endpoint: string) =>
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
    next: { revalidate: 60 },
  });

export const fetchPageInfo = async () => {
  const res = await fetchWrapper("pageInfo");

  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};

export const fetchSocials = async () => {
  const res = await fetchWrapper("socials");

  const data = await res.json();

  const socials: Social[] = data.socials;

  return socials;
};

export const fetchTechnologies = async () => {
  const res = await fetchWrapper("technologies");

  const data = await res.json();

  const technologies: Technology[] = data.technologies;

  return technologies;
};

export const fetchProjects = async () => {
  const res = await fetchWrapper("projects");

  const data = await res.json();

  const projects: Project[] = data.projects;

  return projects;
};

export const fetchExperiences = async () => {
  const res = await fetchWrapper("experience");

  const data = await res.json();

  const experiences: Experience[] = data.experiences;

  return experiences;
};
