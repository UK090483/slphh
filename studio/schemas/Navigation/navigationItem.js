import { AiOutlineLink } from "react-icons/ai";
import { withLocalization } from "../Localizer";

export default withLocalization({
  title: "Link",
  name: "navigationItem",
  type: "object",
  fields: [
    { name: "label", type: "string", title: "Label", localize: true },
    {
      name: "link",
      title: "Link",
      type: "link",
    },
  ],

  preview: {
    select: {
      label: "label",
    },
    prepare(selection) {
      const { label } = selection;

      return {
        title: label,

        media: AiOutlineLink,
      };
    },
  },
});
