export default {
  name: "character",
  title: "Character",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "pronoun1",
      title: "Pronoun1",
      type: "string",
    },
    {
      name: "pronoun2",
      title: "Pronoun2",
      type: "string",
    },
    {
      name: "backstory",
      title: "Backstory",
      type: "text",
    },
    {
      name:"slug",
      title:"Slug",
      type:"slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
      },

    }
  ]


}