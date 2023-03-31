import S from "@sanity/desk-tool/structure-builder";
import { CgProfile, CgCalendar, CgTag } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "../parts/resolveProductionUrl";
import initialUseCase from "../parts/initialValueTemplates";

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
        .title("Use Cases")
        .icon(CgCalendar)
        .child(
          S.documentTypeList("page")
            .title("Use Cases")
            .filter(
              '_type == "page" && pageType._ref == "3efaf8b1-8110-4143-b36f-838041281f32"'
            )
            .initialValueTemplates(
              S.initialValueTemplateItem("page-by-pageType", {
                pageTypeId: "3efaf8b1-8110-4143-b36f-838041281f32",
              })
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
