import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../lib/sanity";
import { PageInfo } from "../../shared/types";

type Data = {
  pageInfo: PageInfo[];
};

const query = groq`
  *[_type == 'pageInfo'][0]
`;

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo = await sanityClient.fetch<PageInfo[]>(query);

  res.status(200).json({ pageInfo });
}
