import { richTextQuery } from "@components/RichText/richTextQuery";
import { DecorationSettings } from "@components/Section/Decoration/Decoration";
import { SectionBGColor, SectionSpace } from "@components/Section/Section";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

const sectionBlockQuery = (locale: string = "") => `
_type == "section" => {
  ...,
  decorationL,
  decorationR,
  bgColor,
  _key,
  _type,
  title,
  type,
  topSpace,
  bottomSpace,
  imagePosition,
  'content':(coalesce(content_${locale},content))[]{${richTextQuery(locale)}},
  image{${imageMeta}}
}
`;

export interface SectionResult extends DecorationSettings {
  bgColor?: SectionBGColor;
  title?: string;
  topSpace?: SectionSpace;
  bottomSpace?: SectionSpace;
  content?: null | any;
  bgImage?: ImageMetaResult;
  imagePosition?: "l" | "r";
  image?: ImageMetaResult;
  type?: "m" | "l" | "s";
  _key: string;
}

export default sectionBlockQuery;
