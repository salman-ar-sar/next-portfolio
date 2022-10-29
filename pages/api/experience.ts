import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";

import { sanityClient } from "../../lib/sanity";
import { Experience } from "../../shared/types";

type Data = {
  experiences: Experience[];
};

const query = groq`
  *[_type == 'experience'] {
    ...,
    technologies[]->
  }
`;

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences = await sanityClient.fetch<Experience[]>(query);

  res.status(200).json({ experiences });
}
