import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../lib/sanity";
import { Technology } from "../../shared/types";

type Data = {
  technologies: Technology[];
};

const query = groq`
  *[_type == 'skill']
`;

export async function GET(_: NextApiRequest, res: NextApiResponse<Data>) {
  const technologies = await sanityClient.fetch<Technology[]>(query);

  res.status(200).json({ technologies });
}
