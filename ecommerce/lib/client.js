import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "",
  dataset: "production",
  apiVersion: "2022-10-11",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
