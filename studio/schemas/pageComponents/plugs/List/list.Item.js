export default {
  title: "List Item",
  name: "list.item",
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
      image: "image",
    },
    prepare(value) {
      return { media: value.image };
    },
  },
};
