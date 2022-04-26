import { colorList } from "../../snippets";

export default {
  title: "Button",
  name: "button",
  type: "object",
  fields: [
    { name: "label", type: "string", title: "Label" },

    {
      title: "Link",
      name: "link",
      type: "link",
    },
    {
      title: "Position",
      name: "position",
      type: "string",
      options: {
        list: [
          { title: "Inline", value: "inline" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "center", value: "center" },
        ],
      },
      initialValue: "inline",
    },
  ],
  preview: {
    select: {
      label: "label",
    },
    prepare(value) {
      return { title: value.label || "Label" };
    },
  },
};
