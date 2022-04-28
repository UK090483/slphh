export default {
  title: "Trust",
  name: "trust",
  type: "object",
  fields: [
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          type: "trust.item",
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
    },
    prepare(value) {
      return { title: value.label || "Label" };
    },
  },
};
