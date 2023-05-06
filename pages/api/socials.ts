import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../lib/sanity";
import { Social } from "../../shared/types";

type Data = {
  socials: Social[];
};

const query = groq`
  *[_type == 'social']
`;

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials = await sanityClient.fetch<Social[]>(query);

  res.status(200).json({ socials });
}
