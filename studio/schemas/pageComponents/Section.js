import React from "react";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { withLocalization } from "../Localizer";
import { colorList, sizesList, decoration, space, color } from "../snippets";

const decorationList = [
  "line",
  "line-animated",
  "circle",
  "circle-animated",
  "arrow",
  "arrow-animated",
];
export default withLocalization({
  type: "object",
  name: "section",
  title: "Section",
  fieldsets: [
    {
      name: "space",
      title: "Space",
      options: { collapsible: true, collapsed: true, columns: 2 },
    },
    {
      name: "Image",
      title: "Image",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "decoration",
      title: "Decoration",
      options: { collapsible: true, collapsed: true, columns: 2 },
    },
  ],
  icon: () => <AiOutlineBorderOuter />,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      name: "content",
      type: "defaultRichText",
      title: "Content",
      localize: true,
    },

    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Medium", value: "m" },
          { title: "Wide", value: "l" },
          { title: "Narrow", value: "s" },
        ],
      },
    },
    ...color({ name: "bgColor", title: "Background Color" }),
    ...decoration({ fieldset: "decoration" }),
    ...space({ fieldset: "space" }),
    {
      title: "Image",
      name: "image",
      type: "defaultImage",
      fieldset: "Image",
    },
    {
      title: "Image Position",
      name: "imagePosition",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "l" },
          { title: "Right", value: "r" },
        ],
      },
      fieldset: "Image",
    },
  ],
  preview: {
    select: {
      title: "title",
      content: "content",
      image: "image",
    },
    prepare(selection) {
      const { title, content, image } = selection;
      const block = (content || []).find((block) => block._type === "block");

      return {
        title: `Section : ${title || "unnamed"}`,
        // subtitle: `${content ? content.length : "0"} Items`,
        subtitle: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
        media: image,
      };
    },
  },
});
