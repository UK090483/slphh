import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import { LinkResult, linkQuery } from "@lib/Navigation/query";

const heroBlockQuery = (locale: string = "") => `
_type == "hero" => {
  _type,
  _key,
  'header':(coalesce(header_${locale},header)),
  'image':image{${imageMeta}},
  'link':link{${linkQuery(locale)}},
  'linkText':(coalesce(linkText_${locale},linkText)),
}
`;

export interface HeroBlogResult {
  _key: string;
  title?: string | null;
  header?: string | null;
  image?: ImageMetaResult;
  link?: LinkResult | null;
  linkText?: string | null;
}

export default heroBlockQuery;
