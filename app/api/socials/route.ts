import { NextResponse } from "next/server";
import { groq } from "next-sanity";

import { sanityClient } from "../../../lib/sanity";
import { Social } from "../../../shared/types";

const query = groq`
  *[_type == 'social']
`;

export async function GET() {
  const socials = await sanityClient.fetch<Social[]>(query);

  return NextResponse.json({ socials });
}
