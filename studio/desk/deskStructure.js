import S from "@sanity/desk-tool/structure-builder";
import { CgProfile, CgCalendar, CgTag } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "../parts/resolveProductionUrl";

export const getDefaultDocumentNode = (doc) => {
  if (doc.schemaType !== "page") return S.document().views([S.view.form()]);
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
        defaultSize: `mobile`,
      })
      .title("Preview"),
  ]);
};

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.list()
            .id("settings")
            .title("Settings")
            .items([
              S.documentListItem()
                .schemaType("siteConfig")
                .title("Configuration")
                .id("siteConfig"),
            ])
        ),

      // S.listItem({
      //   id: "pages",
      //   title: "Pages",
      //   schemaType: "page",
      //   child: async () => {
      //     const pageTypes = await client.fetch(
      //       '*[_type == "pageType"]{_id ,name}'
      //     );
      //     const root = S.listItem()
      //       .id("page")
      //       .title("Root")
      //       .child(
      //         S.documentTypeList("page")
      //           .title(`Pages`)
      //           .filter(`_type == "page" && !defined(pageType) `)
      //       );

      //     const items = pageTypes.map(({ _id: pageTypeId, name }) =>
      //       S.listItem()
      //         .id(pageTypeId)
      //         .title(name)
      //         .child(
      //           S.documentTypeList("page")
      //             .title(`${name}`)
      //             .filter("_type == $type && pageType._ref == $pageTypeId")
      //             .params({ pageTypeId, type: "page" })
      //             .initialValueTemplates([
      //               S.initialValueTemplateItem("page-by-pageType", {
      //                 pageTypeId,
      //               }),
      //             ])
      //         )
      //     );
      //     return S.list({ id: "li", items: [root, ...items] });
      //   },
      // }),

      S.listItem()
        .title("Pages")
        .icon(CgCalendar)
        .child(
          S.documentTypeList("page").filter(
            '_type == "page" && !defined(pageType) '
          )
        ),
      S.listItem()
        .title("UseCases")
        .icon(CgCalendar)
        .child(
          S.documentTypeList("page").filter(
            '_type == "page" && pageType._ref == "a697a676-d535-4531-830e-7fd89d23dd33"'
          )
        ),

      // S.listItem()
      //   .title("PagesTypes")
      //   .icon(CgCalendar)
      //   .child(S.documentTypeList("pageType")),

      S.listItem()
        .title("Persons/Institutions")
        .icon(CgProfile)
        .child(S.documentTypeList("person")),

      S.listItem()
        .title("Testimonial")
        .icon(CgTag)
        .child(S.documentTypeList("testimonial")),
    ]);
