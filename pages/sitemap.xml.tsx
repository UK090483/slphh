import { getSanityClient } from "@lib/SanityService/sanity.server";
import buildSitemap from "@lib/SiteMap/buildSitemap";
import { GetServerSideProps } from "next";
import AppConfig from "../app.config.json";
const Sitemap = () => {};

let pages: { slug: string }[] | undefined;
let lastMod: number | null = null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (lastMod && new Date().getTime() - lastMod > 60000) {
    pages = undefined;
  }

  if (!pages) {
    lastMod = new Date().getTime();
    pages = await getSanityClient().fetch<{ slug: string }[]>(
      `*[_type == 'page'][]{   
      'slug':  coalesce('/'+pageType->slug.current,'') + '/' + slug.current,
      'slug_de': coalesce('/'+pageType->slug_en.current,pageType->slug.current,'') +'/'+  coalesce(slug_en,slug).current,
    }
      `
    );
  }

  console.log(pages);

  const sitemap = await buildSitemap({
    pages: pages || [],
    hostname: AppConfig.hostname,
    locales: { en: AppConfig.locales.en },
  });

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
