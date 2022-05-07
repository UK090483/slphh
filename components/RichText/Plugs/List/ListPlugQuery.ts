import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import { SanityBlock } from "@lib/SanityPageBuilder/lib/RichText";

export const listPlugQueryItem = `
description,
_key,
'image':image{${imageMeta}}
`;

const listPlugQuery = `
  _type == "list" => {
  'items':items[]{${listPlugQueryItem}},
  variation,
  }
  `;
export default listPlugQuery;

export type ListPlugQueryItemResult = {
  description?: SanityBlock[];
  image?: ImageMetaResult | null;
  _key: string;
};

export type ListPlugQueryResult = {
  items?: ListPlugQueryItemResult[];
  variation?: string;
};
