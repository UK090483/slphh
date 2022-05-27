export default {
  title: "Image",
  name: "defaultImage",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Alternative text",
      name: "alt",
      type: "string",
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true,
      },
      validation: (Rule) => {
        return Rule.custom((field, context) => {
          return "asset" in context.parent && field === undefined
            ? "Required! (think about non-visual readers)"
            : true;
        });
      },
    },
    {
      title: "Image Credit",
      name: "credit",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },

    {
      title: "Filter",
      name: "filter",
      type: "string",
      options: {
        isHighlighted: true,
        list: [
          { title: "No Filter", value: "noFilter" },
          {
            title: "Future Hamburg Filter (default)",
            value: "futureHamburgFilter",
          },
        ],
      },
    },
  ],
  preview: {
    select: {
      asset: "asset",
      alt: "alt",
    },
    prepare({ alt, asset }) {
      return {
        title: alt || "(alt text missing)",
        media: asset,
      };
    },
  },
};
