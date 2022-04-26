export default {
  title: "Auto Gallery",
  name: "autoGalleryPlug",
  type: "object",

  fields: [
    { name: "name", title: "title", type: "string" },
    {
      name: "items",
      title: "Images",
      type: "array",
      of: [{ type: "autoGalleryItem" }],
    },
    // {
    //   name: "rows",
    //   title: "Rows",
    //   type: "number",
    //   initialValue: 4,
    //   validation: (Rule) => Rule.required().integer().min(1).max(8),
    // },
    // {
    //   name: "rows_mobile",
    //   title: "Rows Mobile",
    //   type: "number",
    //   initialValue: 2,
    //   validation: (Rule) => Rule.required().integer().min(1).max(8),
    // },
    // {
    //   name: "ratio",
    //   title: "Ratio",
    //   type: "string",
    //   initialValue: "1:1",
    //   options: {
    //     list: ["1:1", "16:9", "2:3", "3:2"],
    //   },
    // },
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare({ name }) {
      return {
        title: "ImageGallery: " + name,
      };
    },
  },
};
