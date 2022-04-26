import { withLocalization } from "../Localizer";

export default withLocalization({
  title: "Logo",
  name: "logo",
  type: "object",

  fields: [
    {
      title: "Logo Text",
      name: "text",
      type: "text",
      localize: true,
    },
    {
      title: "Logo",
      name: "image",
      type: "defaultImage",
    },
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image",
    },
  },
});
