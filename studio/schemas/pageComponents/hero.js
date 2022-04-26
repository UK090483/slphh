import React from "react";
import { withLocalization } from "../Localizer";
import imageUrlBuilder from "@sanity/image-url";
import conf from "../../sanity.json";

const builder = imageUrlBuilder({ ...conf.api });

export default withLocalization({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      localize: true,
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      localize: true,
      of: [
        {
          type: "block",
          title: "Block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              {
                title: "Brake word",
                value: "brake",
                blockEditor: {
                  icon: () => <div>----</div>,
                  render: ({ children }) => (
                    <span style={{ backgroundColor: "lightcyan" }}>
                      -{children}
                    </span>
                  ),
                },
              },
              {
                title: "Unbreakable",
                value: "unbreakable",
                blockEditor: {
                  icon: () => <div>----</div>,
                  render: ({ children }) => (
                    <span style={{ backgroundColor: "lightblue" }}>
                      {children}
                    </span>
                  ),
                },
              },
            ],
            annotations: [
              {
                name: "image",
                type: "image",
                title: "Image",
                blockEditor: {
                  render: (props) => {
                    console.log(props);

                    return <span>--Image--</span>;
                  },
                },
              },
            ],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
});
