import { defineField, defineType } from "sanity";

export default defineType({
    name: "tailoring",
    title: "Tailoring Services",
    type: "document",
    fields: [
        defineField({
            name: "serviceName",
            title: "Service Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "basePrice",
            title: "Base Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "turnaroundTime",
            title: "Turnaround Time (e.g., 2 days)",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],
});
