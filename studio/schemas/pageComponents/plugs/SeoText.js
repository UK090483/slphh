export default {
  title: "SeoText",
  name: "seoText",
  type: "object",
  fields: [
    { name: "text", type: "text", title: "Text" },
    {
      name: "textStyle",
      type: "string",
      title: "Header Style",
      initialValue: "H1",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Normal",
            value: "normal",
          },
          {
            title: "H1 ",
            value: "h1",
          },
          {
            title: "H2 ",
            value: "h2",
          },
          {
            title: "H3 ",
            value: "h3",
          },
          {
            title: "H4",
            value: "h4",
          },
        ],
      },
    },
    {
      name: "textTag",
      type: "string",
      title: "Header Tag",
      initialValue: "Header-big",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Paragraph",
            value: "p",
          },
          {
            title: "H1 (just one perpage)",
            value: "h1",
          },
          {
            title: "H2 ",
            value: "h2",
          },
          {
            title: "H3 ",
            value: "h3",
          },
          {
            title: "H4",
            value: "h4",
          },
        ],
      },
    },
  ],
  preview: {
    select: {
      text: "text",
      textStyle: "textStyle",
      textTag: "textTag",
    },
    prepare({ text, textStyle, textTag }) {
      return {
        title: `${text ? text : "Seo Text"}`,
        subtitle: `${textStyle ? `Style: ${textStyle}` : ""} ${
          textTag ? `Tag: ${textTag}` : ""
        }  `,
      };
    },
  },
};
