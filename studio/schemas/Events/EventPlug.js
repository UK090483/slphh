export default {
  title: "Events",
  name: "eventPlug",
  type: "object",

  fields: [
    {
      name: "includeTags",
      title: "IncludeTags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
          options: { disableNew: true },
        },
      ],
    },
  ],
  preview: {
    select: {
      name: "name",
      includeTags0: "includeTags[0]",
    },
    prepare({ name, includeTags0 }) {
      console.log(includeTags0);
      return {
        title: "Events: " + includeTags0,
      };
    },
  },
};
