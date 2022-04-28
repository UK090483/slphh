export default {
  title: "Trust",
  name: "trust.item",
  type: "object",
  fields: [
    {
      name: "image",
      type: "defaultImage",
      title: "Image",
    },
    {
      name: "description",
      type: "text",
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
