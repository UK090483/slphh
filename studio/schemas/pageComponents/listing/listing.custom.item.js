export default {
  title: "List Item",
  name: "listing.custom.item",
  type: "object",
  fields: [
    {
      name: "title",
      type: "text",
      title: "Title",
    },
    {
      name: "image",
      type: "defaultImage",
      title: "Image",
    },

    {
      name: "description",
      type: "easyRichText",
      title: "Text",
    },
  ],
  preview: {
    select: {
      media: "image",
      title: "title",
    },
    prepare({ title, media }) {
      return { media, title };
    },
  },
};
