import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";

import { sanityClient } from "../../lib/sanity";
import { Technology } from "../../shared/types";

type Data = {
  technologies: Technology[];
};

const query = groq`
  *[_type == 'skill']
`;

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const technologies = await sanityClient.fetch<Technology[]>(query);

  res.status(200).json({ technologies });
}
