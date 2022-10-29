import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";

import { sanityClient } from "../../lib/sanity";
import { Project } from "../../shared/types";

type Data = {
  projects: Project[];
};

const query = groq`
  *[_type == 'project'] {
    ...,
    technologies[]->
  }
`;

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects = await sanityClient.fetch<Project[]>(query);

  res.status(200).json({ projects });
}
