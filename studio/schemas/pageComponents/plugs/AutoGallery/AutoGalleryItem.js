export default {
  title: "Image Gallery Item",
  name: "autoGalleryItem",
  type: "image",
  options: {
    hotspot: true, // <-- Defaults to false
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
  ],
};
