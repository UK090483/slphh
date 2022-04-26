import { RiFileListFill } from "react-icons/ri";
import { withLocalization } from "../Localizer";

export default withLocalization({
  title: "Navigation Dropdown",
  name: "navigationDropdown",
  type: "object",
  fields: [
    { name: "label", type: "string", title: "Label", localize: true },

    {
      name: "items",
      type: "array",
      title: "Main Navigation",
      of: [{ type: "navigationItem" }],
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
        subtitle: "Link",
        media: RiFileListFill,
      };
    },
  },
});
