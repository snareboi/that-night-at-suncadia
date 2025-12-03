export default {
  name: "scene",
  title: "Scene",
  type: "document",
  fields: [
    {
        name: "name",
        title: "Name",
        type: "string"
    },
    {
        name: "id",
        title: "ID",
        type: "number",
    },
    {
        name: "chapter",
        title: "Chapter",
        type: "number"
    },
    {
        name: "section",
        title: "Section",
        type: "string",
    },
    {
        name: "text",
        title: "Text",
        type: "array",
        of: [
            { type: "block" },
        ],  
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        validation: (Rule) => Rule.required(),
        options: {
            source: "name",
            maxLength: 96,
        },
    },
  ],
};