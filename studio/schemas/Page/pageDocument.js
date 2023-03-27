import { defaultBockContent } from "../snippets";
import { withLocalization } from "../Localizer";

export default withLocalization({
  type: "document",
  name: "page",
  title: "Page",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
      localize: true,
      hidden: ({ parent }) => {
        return parent.redirect;
      },
    },
    // {
    //   name: "subTitle",
    //   type: "string",
    //   title: "SubTitle",
    //   localize: true,
    // },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "should be between 50 and 160 characters",
      validation: (Rule) => [
        Rule.max(160).warning("should not be more than 160 characters"),
        Rule.min(50).warning("should be at least 50 characters"),
      ],
      localize: true,
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => [
        Rule.required(),
        Rule.custom((slug) => {
          if (!slug) return true;
          if (slug.current.indexOf(" ") >= 0)
            return "no whitespace allowed (use - for binding words)";
          if (slug.current.indexOf("/") >= 0)
            return "no backslashes allowed (use - for binding words)";
          return true;
        }).error(),
      ],
      localize: true,
    },
    {
      name: "tags",
      title: "Tag",
      type: "reference",
      to: [{ type: "tag" }],
      hidden: ({ parent }) => {
        return !(
          parent?.pageType?._ref === "88e611ea-581e-48c4-b63c-13e1084acf4f"
        );
      },
    },
    {
      name: "pageType",
      type: "reference",
      to: [{ type: "pageType" }],
      options: {
        disableNew: true,
      },
    },
    {
      name: "featuredImage",
      type: "defaultImage",
    },

    defaultBockContent,

    // {
    //   title: "Redirect",
    //   name: "redirect",
    //   type: "redirect",
    //   options: {
    //     collapsible: true,
    //   },
    // },

    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      options: {
        collapsible: true,
      },
    },
  ],

  // preview: {
  //   select: {
  //     to: "redirect.to",
  //     slug: 'slug.current',
  //     isPermanent: "isPermanent",
  //   },
  //   prepare({ slug, to, isPermanent }) {
  //     return {
  //       title: from && to ? `/${from.current} → ${to}` : "New Redirect",
  //       subtitle: isPermanent ? "301" : "302",
  //     };
  //   },
  // },
  preview: {
    select: {
      title: "slug.current",
      subtitle: "title",
    },
  },
});
