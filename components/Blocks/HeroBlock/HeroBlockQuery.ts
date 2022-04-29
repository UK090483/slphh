import { richTextQuery } from "@components/RichText/richTextQuery";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

const heroBlockQuery = (locale: string = "") => `
_type == "hero" => {
  _type,
  _key,
  'header':(coalesce(header_${locale},header)),
  'image':image{${imageMeta}},
}
`;

export interface HeroBlogResult {
  _key: string;
  title?: string | null;
  header?: string | null;
  image?: ImageMetaResult;
}

export default heroBlockQuery;
