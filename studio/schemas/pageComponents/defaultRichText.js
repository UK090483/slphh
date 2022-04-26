import React from "react";
import { BlockEditor } from "part:@sanity/form-builder";

class CustomEditor extends React.PureComponent {
  render() {
    return (
      <div>
        <BlockEditor {...this.props} onPaste={handlePaste} />
      </div>
    );
  }
}

function handlePaste(input) {
  console.log(input);

  const { event } = input;
  const text = event.clipboardData.getData("text/plain");
  const json = event.clipboardData.getData("application/json");
  if (json) {
    console.log(json);
  }
  if (text) {
    console.log(text);
  }
  // return undefined to let the defaults do the work
  return undefined;
}

export default {
  name: "defaultRichText",
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
    { type: "spacer" },
    { type: "imageGalleryPlug" },
    { type: "autoGalleryPlug" },
    { type: "playerPlug" },
    { type: "imagePlug" },
    { type: "eventPlug" },
    { type: "seoText" },
  ],
};
