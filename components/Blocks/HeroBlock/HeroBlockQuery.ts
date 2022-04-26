import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

const marksQuery = `
markDefs[]{
  ...,
  _type == "image" => {
    ${imageMeta}
  }
}`;

const heroBlockQuery = (locale: string = "") => `
_type == "hero" => {
  _type,
  _key,
  'text': (coalesce(text_${locale},text))[]{...,${marksQuery}}
}
`;

export interface HeroBlogResult {
  _key: string;
  title?: string | null;
  text?: any;
}

export default heroBlockQuery;
