import React from "react";
import { withLocalization } from "../../Localizer";
import { AiOutlineOrderedList } from "react-icons/ai";
import { IoListCircle } from "react-icons/io";
import { decoration, space, color, getColor } from "../../snippets";
export default withLocalization({
  title: "Listing",
  name: "listing",
  type: "object",
  icon: AiOutlineOrderedList,
  fieldsets: [
    {
      name: "space",
      title: "Space",
      options: { collapsible: true, collapsed: true, columns: 2 },
    },

    {
      name: "decoration",
      title: "Decoration",
      options: { collapsible: true, collapsed: true, columns: 2 },
    },
  ],
  fields: [
    { name: "title", type: "string", title: "Title", localize: true },
    {
      name: "contentType",
      type: "string",
      options: {
        list: [
          { title: "Pages", value: "pages" },
          { title: "Events", value: "event" },
          { title: "Documentations", value: "documentations" },
          { title: "Persons", value: "persons" },
          { title: "Testimonials", value: "testimonials" },
          { title: "Custom", value: "custom" },
        ],
        layout: "radio",
      },
    },

    // Pages
    {
      name: "pagesItems",
      type: "array",
      of: [{ type: "reference", to: [{ type: "page" }] }],
      hidden: ({ parent }) => parent?.contentType !== "pages",
    },
    // Events
    {
      name: "eventIncludeTags",
      type: "array",
      description: "shows all Events if left empty",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
          options: { disableNew: true },
        },
      ],
      hidden: ({ parent }) => parent?.contentType !== "event",
    },
    {
      title: "Variant",
      name: "eventVariant",
      type: "string",
      options: {
        list: [
          { title: "Accordion (default)", value: "accordion" },
          { title: "Open", value: "open" },
        ],
      },
      hidden: ({ parent }) => parent?.contentType !== "event",
    },
    {
      title: "hide done Events",
      name: "hideDoneEvents",
      type: "boolean",
      hidden: ({ parent }) => parent?.contentType !== "event",
    },

    // Documentations
    {
      name: "documentationsIncludeTags",
      type: "array",
      description: "shows all Documentations if left empty",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
          options: { disableNew: true },
        },
      ],
      hidden: ({ parent }) => parent?.contentType !== "documentations",
    },
    // Persons
    {
      name: "personItems",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
      hidden: ({ parent }) => parent?.contentType !== "persons",
    },

    // Testimonials
    {
      name: "testimonialItems",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
      hidden: ({ parent }) => parent?.contentType !== "testimonials",
    },

    //Custom
    {
      name: "customItems",
      type: "array",
      of: [{ type: "listing.custom.item" }],
      hidden: ({ parent }) => parent?.contentType !== "custom",
    },

    {
      name: "customVariants",
      type: "string",
      options: {
        list: [
          { title: "List (default)", value: "list" },
          { title: "Icon List", value: "iconList" },
          { title: "Phases", value: "phases" },
        ],
      },
      hidden: ({ parent }) => parent?.contentType !== "custom",
    },

    {
      title: "Show Title",
      name: "showTitle",
      type: "boolean",
      hidden: ({ parent }) => parent?.contentType !== "custom",
    },

    ...color({ name: "bgColor", title: "Background Color" }),
    ...decoration({ fieldset: "decoration" }),
    ...space({ fieldset: "space" }),
  ],
  preview: {
    select: {
      title: "title",
      contentType: "contentType",
      bgColor: "bgColor",
    },
    prepare(selection) {
      const { contentType, title, bgColor } = selection;

      console.log({ bgColor, c: getColor(bgColor) });
      return {
        title: title,
        subtitle: `Section : ${contentType ? contentType : ""}`,
        media: () => <AiOutlineOrderedList fill={getColor(bgColor)} />,
      };
    },
  },
});

export const customListingItem = withLocalization({
  type: "object",
  title: "Listing",
  name: "listing",
  fields: [
    { name: "title", type: "string", title: "Title", localize: true },
    { name: "subTitle", type: "string", title: "Title", localize: true },
    { name: "featuredImage", type: "defaultImage", title: "Image" },
    { name: "description", type: "text", title: "Description", localize: true },
  ],
});
