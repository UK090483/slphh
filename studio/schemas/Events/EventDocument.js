import { withLocalization } from "../Localizer";
export default withLocalization({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
      localize: true,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      localize: true,
    },

    {
      name: "tags",
      title: "Tag",
      type: "reference",
      to: [{ type: "tag" }],
    },
    {
      name: "date",
      title: "Datum",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Datum",
      type: "date",
    },

    {
      name: "link",
      title: "Link ",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },

    // {
    //   name: "Text",
    //   title: "Text",
    //   type: "defaultRichText",
    //   localize: true,
    // },
    {
      name: "content",
      title: "Content",
      type: "eventRichText",
      localize: true,
    },
  ],
});
