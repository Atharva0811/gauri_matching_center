import { defineField, defineType } from "sanity";

export default defineType({
    name: "accessory",
    title: "Accessories",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "isSoldOut",
            title: "Sold Out",
            type: "boolean",
            initialValue: false,
        }),
    ],
});
