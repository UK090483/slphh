import { withLocalization } from "../Localizer";

export default withLocalization({
  name: "pageType",
  title: "Page type",
  type: "document",

  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
      localize: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      localize: true,
    },
  ],
});
