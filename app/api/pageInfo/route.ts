import { NextResponse } from "next/server";
import { groq } from "next-sanity";

import { sanityClient } from "../../../lib/sanity";
import { PageInfo } from "../../../shared/types";

const query = groq`
  *[_type == 'pageInfo'][0]
`;

export async function GET() {
  const pageInfo = await sanityClient.fetch<PageInfo[]>(query);

  return NextResponse.json({ pageInfo });
}
