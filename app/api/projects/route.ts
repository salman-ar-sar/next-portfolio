import { NextResponse } from "next/server";
import { groq } from "next-sanity";

import { sanityClient } from "../../../lib/sanity";
import { Project } from "../../../shared/types";

const query = groq`
  *[_type == 'project'] {
    ...,
    technologies[]->
  }
`;

export async function GET() {
  const projects = await sanityClient.fetch<Project[]>(query);

  return NextResponse.json({ projects });
}
