export default {
  name: "siteConfig",
  title: "Site config",
  type: "document",
  fields: [
    {
      name: "indexPage",
      title: "Home Page",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },

    {
      name: "imprintPage",
      title: "Imprint Page",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "privacyPolicyPage",
      title: "Privacy Policy Page",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainNav",
      type: "array",
      title: "Main Navigation",
      of: [
        { type: "navigationItem" },
        { type: "navigationDropdown" },
        { type: "navigationMegaMenu" },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socialMedia",
      type: "array",
      title: "SocialMedia",
      of: [
        {
          type: "socialMedia.item",
        },
      ],
    },
    {
      name: "logos",
      type: "array",
      title: "Logos",
      of: [
        {
          type: "logo",
        },
      ],
    },
    {
      title: "Default / Seo",
      name: "seo",
      type: "seo",
    },
  ],
};
