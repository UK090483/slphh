const decorationList = [
  "line",
  "line-animated",
  "circle",
  "circle-animated",
  "arrow",
  "arrow-animated",
];
export default {
  title: "Decoration",
  name: "decoration",
  type: "object",
  collapsible: true,
  collapsed: true,

  fields: [
    {
      title: "Decoration",
      name: "decorationL",
      type: "string",
      options: {
        list: decorationList,
      },
    },
    {
      title: "Decoration",
      name: "decorationR",
      type: "string",

      options: {
        list: decorationList,
      },
    },
  ],
};
