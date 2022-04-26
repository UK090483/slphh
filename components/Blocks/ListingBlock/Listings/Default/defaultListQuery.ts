import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

export const defaultListItemQuery = (locale: string) => {
  return `
    _id,
    'tags': tags._ref,
    'title':coalesce(title_${locale},title),
    'subTitle':coalesce(subTitle_${locale},subTitle),
    'description':coalesce(description_${locale},description),
    'slug':select(
      defined(pageType) && defined(pageType->slug_${locale}.current)  => pageType->slug_${locale}.current + '/' + coalesce(slug_${locale}.current,slug.current),
      defined(pageType) => pageType->slug.current + '/' +  coalesce(slug_${locale}.current,slug.current),
      coalesce(slug_${locale}.current,slug.current)
      ),
    'featuredImage':featuredImage{${imageMeta}}
    `;
};

export interface DefaultListItemResult {
  title?: null | string;
  tags?: string | null;
  description?: null | string;
  subTitle?: null | string;
  slug?: null | string;
  featuredImage?: null | ImageMetaResult;
  _id: string;
  _updatedAt?: string;
}
