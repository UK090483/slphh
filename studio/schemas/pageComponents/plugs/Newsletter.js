export default {
  title: "Newsletter",
  name: "newsletter",
  type: "object",
  fields: [
    { name: "html", type: "text", title: "Embed Code" },
    { name: "link", type: "url", title: "Form Link" },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Newsletter",
      };
    },
  },
};
