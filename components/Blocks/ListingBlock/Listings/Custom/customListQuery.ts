import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import { SanityBlock } from "@lib/SanityPageBuilder/lib/RichText";

export const customListItemQuery = (locale: string) => {
  return `
    ...,
    'title':coalesce(title_${locale},title),
    'subTitle':coalesce(subTitle_${locale},subTitle),
    'description':coalesce(description_${locale},description),
    'image':image{${imageMeta}}
    `;
};

export interface customListItemResult {
  title?: null | string;
  description?: null | SanityBlock[];
  subTitle?: null | string;
  image?: null | ImageMetaResult;
  _key: string;
}
