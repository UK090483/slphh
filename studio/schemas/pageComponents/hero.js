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
      title: "Header",
      name: "header",
      type: "text",
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
