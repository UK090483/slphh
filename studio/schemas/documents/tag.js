import { withLocalization } from "../Localizer";
export default withLocalization({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
      localize: true,
    },
  ],
});
