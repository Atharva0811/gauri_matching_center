import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "i1awouo7",
    dataset: "production",
    apiVersion: "2024-02-01",
    useCdn: true, // Set to true for production content delivery
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
