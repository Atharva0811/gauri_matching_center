import { defineField, defineType } from "sanity";

export default defineType({
    name: "customization",
    title: "Customization Options",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title (e.g., Neck Style, Sleeves)",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "options",
            title: "Options",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required(),
        }),
    ],
});
