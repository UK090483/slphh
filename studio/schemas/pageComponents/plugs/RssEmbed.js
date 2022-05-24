export default {
  title: "RssEmbed",
  name: "rssEmbed",
  type: "object",
  fields: [{ name: "link", type: "url", title: "Form Link" }],
  preview: {
    select: {},
    prepare() {
      return {
        title: "RssEmbed",
      };
    },
  },
};
