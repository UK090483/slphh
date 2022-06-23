import { richTextQueryShort } from "@components/RichText/richTextQuery";
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
  'content':(coalesce(content_${locale},content))[]{${richTextQueryShort(
  locale
)}}
}
`;

export interface HeroBlogResult {
  _key: string;
  title?: string | null;
  header?: string | null;
  image?: ImageMetaResult;
  link?: LinkResult | null;
  linkText?: string | null;
  content?: any;
}

export default heroBlockQuery;
