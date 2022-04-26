export const linkQuery = (locale: string = "") => {
  return `
   'href': select( defined(externalLink) => externalLink,
                  defined(internalLink) && defined(internalLink->pageType)  => '/'+ coalesce(internalLink->pageType->slug_${locale}.current,internalLink->pageType->slug.current) + '/' + coalesce(internalLink->slug_${locale}.current ,internalLink->slug.current),
                  defined(internalLink) => '/'+  coalesce(internalLink->slug_${locale}.current ,internalLink->slug.current)
                ),
  'external': select(defined(externalLink)=>true,defined(internalLink)=>false)
`;
};

export interface LinkResult {
  internalLink?: string | null;
  href?: string | null;
  external?: boolean;
}

export interface NavigationMegaMenuResult {
  items: {
    label?: string;
    link?: LinkResult;
  }[];
}

export const navItemQuery2 = (locale: string = "") => `
      'label': coalesce(label_${locale}, label),
      'link':link{
        ${linkQuery(locale)}
      } 
  `;

const NavigationQuery = (locale: string = "", root: string = "mainNav") => `
   'navigation':*[_id == 'siteConfig'][0].${root}[]{
    ${navItemQuery2(locale)},
    'items':items[]{
      ${navItemQuery2(locale)},
      'items':items[]{${navItemQuery2(locale)}}
    }
   }
  `;

interface NavigationItemResult {
  label?: string;
  link?: LinkResult;
  items?: NavigationItemResult[];
}
export type NavigationResult = NavigationItemResult[];

export interface NavItemResult {
  link: LinkResult;
}

export default NavigationQuery;
