import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

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

export async function GET(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences = await sanityClient.fetch<Experience[]>(query);

  res.status(200).json({ experiences });
}
