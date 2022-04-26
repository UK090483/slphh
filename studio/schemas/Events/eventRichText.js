import React from "react";

export default {
  name: "eventRichText",
  type: "array",
  title: "Text",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Underline",
            value: "underline",
          },
        ],
        annotations: [
          {
            name: "tag",
            type: "object",
            title: "Tag",
            fields: [
              {
                title: "Tag",
                name: "tag",
                type: "string",
                options: {
                  list: [
                    { title: "Paragraph", value: "p" },
                    { title: "H1", value: "h1" },
                    { title: "H2", value: "h2" },
                    { title: "H3", value: "h3" },
                    { title: "H4", value: "h4" },
                    { title: "H5", value: "h5" },
                  ],
                },
                initialValue: "p",
              },
            ],
            blockEditor: {
              icon: () => "Tag",
              render: (props) => {
                return <span>{props.children}</span>;
              },
            },
          },
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              { title: "Link", name: "link", type: "link" },
              {
                title: "As Button",
                name: "asButton",
                type: "boolean",
              },
            ],
            blockEditor: {
              icon: () => "Link",
              render: (props) => {
                return (
                  <a style={{ textDecoration: "underline", color: "red" }}>
                    {props.children}
                  </a>
                );
              },
            },
          },
        ],
      },
    },
  ],
};
