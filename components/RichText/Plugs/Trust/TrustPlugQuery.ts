import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

export const trustPlugQueryItem = `
description,
_key,
'image':image{${imageMeta}}
`;

const trustPlugQuery = `
  _type == "trust" => {
  'items':items[]{${trustPlugQueryItem}},
  variation,
  }
  `;
export default trustPlugQuery;

export type TrustPlugQueryItemResult = {
  description?: string;
  image?: ImageMetaResult | null;

  _key: string;
};

export type TrustPlugQueryResult = {
  items?: TrustPlugQueryItemResult[];
  variation?: string;
};
