export interface SeoType {
  metaTitle?: string;
  metaDesc?: string;
  shareTitle?: string;
  shareDesc?: string;
  shareGraphic?: string | null;
}

export interface SeoResult {
  seo?: SeoType;
}

const seoQuery = (locale: string = "") => `
'seo':{
  'shareGraphic':coalesce(featuredImage.asset->url, *[_id == 'siteConfig'][0].seo.shareGraphic.asset->url),
  'metaTitle':coalesce( title_${locale} , title , *[_id == 'siteConfig'][0].seo.metaTitle),
  'metaDesc':coalesce( description_${locale}, description, *[_id == 'siteConfig'][0].seo.metaDesc),
  'shareTitle': coalesce( title_${locale} , title , *[_id == 'siteConfig'][0].seo.metaTitle),
  'shareDesc': coalesce(description_${locale},description,*[_id == 'siteConfig'][0].seo.metaDesc),
}
`;

export default seoQuery;
