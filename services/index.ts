import type {
  Experience,
  PageInfo,
  Project,
  Social,
  Technology,
} from "../shared/types";

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });

  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });

  const data = await res.json();

  const socials: Social[] = data.socials;

  return socials;
};

export const fetchTechnologies = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/technologies`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    }
  );

  const data = await res.json();

  const technologies: Technology[] = data.technologies;

  return technologies;
};

export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });

  const data = await res.json();

  const projects: Project[] = data.projects;

  return projects;
};

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/experience`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    }
  );

  const data = await res.json();

  const experiences: Experience[] = data.experiences;

  return experiences;
};
