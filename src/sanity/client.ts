import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "i1awouo7",
    dataset: "production",
    apiVersion: "2024-02-01",
    useCdn: true, // Set to true for production content delivery
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: unknown): any {
    // @ts-expect-error - source type is unknown but expected by builder.image
    return builder.image(source);
}
