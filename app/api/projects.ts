import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

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

export async function GET(_: NextApiRequest, res: NextApiResponse<Data>) {
  const projects = await sanityClient.fetch<Project[]>(query);

  res.status(200).json({ projects });
}
