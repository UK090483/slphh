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
    },

    {
      title: "Content",
      name: "content",
      type: "text",
      type: "easyRichText",
      localize: true,
    },
    {
      title: "Link",
      name: "link",
      type: "link",
    },
    {
      title: "Link text",
      name: "linkText",
      type: "string",
      localize: true,
    },
    {
      name: "image",
      type: "defaultImage",
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
