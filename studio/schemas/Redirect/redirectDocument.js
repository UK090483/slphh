import { FiRepeat } from "react-icons/fi";
import sanityClient from "part:@sanity/base/client";

export default {
  title: "Redirect",
  name: "redirect",
  type: "object",
  icon: FiRepeat,
  fields: [
    // {
    //   title: "From",
    //   name: "from",
    //   type: "slug",
    //   validation: (Rule) => [
    //     Rule.required(),
    //     Rule.custom((slug) => {
    //       if (!slug) return true;
    //       if (slug.current.indexOf(" ") >= 0)
    //         return "no whitespace allowed (use - for binding words)";
    //       if (slug.current.indexOf("/") >= 0)
    //         return "no backslashes allowed (use - for binding words)";
    //       return true;
    //     }).error(),
    //   ],
    // },
    {
      title: "To",
      name: "to",
      type: "url",
      validation: (Rule) => [Rule.required()],
    },
    {
      title: "Is Permanent?",
      name: "isPermanent",
      type: "boolean",
    },
  ],
  initialValue: {
    isPermanent: true,
  },
  preview: {
    select: {
      to: "to",
      from: "from",
      isPermanent: "isPermanent",
    },
    prepare({ from, to, isPermanent }) {
      return {
        title: from && to ? `/${from.current} → ${to}` : "New Redirect",
        subtitle: isPermanent ? "301" : "302",
      };
    },
  },
};
