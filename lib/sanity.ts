import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);

export const sanityClient = createClient(config);
