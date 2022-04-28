import NavigationQuery, { NavigationResult } from "@lib/Navigation/query";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

export const footerQuery = (locale?: string) => `
${NavigationQuery(locale, "footerNav")},
'socialMedia': *[_id == 'siteConfig'].socialMedia[]{icon,url,_key},
'logos': *[_id == 'siteConfig'].logos[]{'image':image{${imageMeta}},'text':coalesce(text_${locale},text), _key},
`;

export type FooterQueryResult = {
  navigation?: NavigationResult;

  socialMedia?: { icon?: string | null; url?: string | null; _key: string }[];
  logos?: {
    image?: ImageMetaResult | null;
    text?: string | null;
    _key: string;
  }[];
};
