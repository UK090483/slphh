import { SitemapStream, streamToPromise, SitemapItemLoose } from "sitemap";
import { Readable } from "stream";
type Page = {
  slug: string;
  [k: string]: string | null | undefined;
};

type Locales = { [k: string]: { isDefault?: boolean; [k: string]: any } };

type buildSitemapProps = {
  pages: Page[];
  hostname: string;
  locales?: Locales;
};
type BuildSitemap = (props: buildSitemapProps) => Promise<string>;
const buildSitemap: BuildSitemap = (props) => {
  const { pages, hostname, locales } = props;

  const stream = new SitemapStream({ hostname });

  const preparePages = pages.reduce<SitemapItemLoose[]>((acc, page) => {
    return [...acc, ...getLocalItem(page, locales)];
  }, []);

  return streamToPromise(Readable.from(preparePages).pipe(stream)).then(
    (data) => data.toString()
  );
};

export default buildSitemap;

type GetLocalItem = (page: Page, locales?: Locales) => SitemapItemLoose[];
const getLocalItem: GetLocalItem = (page, locales) => {
  return locales
    ? Object.keys(locales).map((locale) => ({
        url: getUrl(page, locale, locales),
        links: Object.keys(locales).map((locale) => ({
          lang: locale,
          url: getUrl(page, locale, locales),
        })),
      }))
    : [{ url: page.slug }];
};

const getUrl = (page: Page, locale: string, locales: Locales) => {
  return locales[locale].isDefault
    ? `${page.slug}`
    : `${locale}${page[`slug_${locale}`]}`;
};
