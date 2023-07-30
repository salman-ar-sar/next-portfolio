import { NextResponse } from "next/server";
import { groq } from "next-sanity";

import { sanityClient } from "../../../lib/sanity";
import { Technology } from "../../../shared/types";

const query = groq`
  *[_type == 'skill']
`;

export async function GET() {
  const technologies = await sanityClient.fetch<Technology[]>(query);

  return NextResponse.json({ technologies });
}
