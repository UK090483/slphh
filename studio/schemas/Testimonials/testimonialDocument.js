import { withLocalization } from "../Localizer";

export default withLocalization({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "defaultImage",
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      localize: true,
    },

    {
      name: "position",
      title: "Position",
      type: "text",
      localize: true,
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
