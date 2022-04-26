import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

export const autoGalleryPlugQueryItem = `
_key,
'image':@{${imageMeta}}
`;

const autoGalleryPlugQuery = `
  _type == "autoGalleryPlug" => {
   
  'items':items[]{${autoGalleryPlugQueryItem}},
  }
  `;
export default autoGalleryPlugQuery;

export type AutoGalleryPlugQueryItemResult = {
  image?: ImageMetaResult | null;
  _key: string;
};

export type AutoGalleryPlugQueryResult = {
  items?: AutoGalleryPlugQueryItemResult[];
};
