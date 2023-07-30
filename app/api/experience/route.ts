import { NextResponse } from "next/server";
import { groq } from "next-sanity";

import { sanityClient } from "../../../lib/sanity";
import { Experience } from "../../../shared/types";

const query = groq`
  *[_type == 'experience'] {
    ...,
    technologies[]->
  }
`;

export async function GET() {
  const experiences = await sanityClient.fetch<Experience[]>(query);

  return NextResponse.json({ experiences });
}
