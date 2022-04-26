import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

export const testimonialItemQuery = (locale: string) => `
...,
_id,
'image':image{${imageMeta}},
'description':coalesce(description_${locale},description),
 name,
'position':coalesce(position_${locale},position),
'text':coalesce(text_${locale},text),
`;

export const testimonialQuery = (locale: string) => `
'testimonialItems': testimonialItems[]->{${testimonialItemQuery(locale)}}
`;

export interface TestimonialItemResult {
  image?: ImageMetaResult;
  name?: null | string;
  position?: null | string;
  description?: null | string;
  text?: null | string;
  avatar?: null | ImageMetaResult;
  _id: string;
}
