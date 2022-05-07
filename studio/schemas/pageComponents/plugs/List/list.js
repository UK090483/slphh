export default {
  title: "List",
  name: "list",
  type: "object",
  fields: [
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          type: "list.item",
        },
      ],
    },
    {
      title: "Variation",
      name: "variation",
      type: "string",
      options: {
        list: [
          { title: "List (default)", value: "list" },
          { title: "Phases", value: "phases" },
        ],
      },
    },
  ],
  preview: {
    select: {
      label: "label",
      variation: "variation",
    },
    prepare({ variation }) {
      return { title: `List ${variation ? "| " + variation : ""}` };
    },
  },
};
