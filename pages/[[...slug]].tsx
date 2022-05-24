import { useAppContext } from "@components/AppContext";
import appQuery, { appQueryResult } from "@components/AppContext/appQuery";
import HeroBlock from "@components/Blocks/HeroBlock";
import heroBlockQuery from "@components/Blocks/HeroBlock/HeroBlockQuery";
import ListingBlock from "@components/Blocks/ListingBlock";
import listingBlockQuery from "@components/Blocks/ListingBlock/listingBlockQuery";
import SectionBlock from "@components/Blocks/SectionBlock";
import sectionBlockQuery from "@components/Blocks/SectionBlock/SectionBlockQuery";
import type { layoutQueryResult } from "@components/Layout/LayoutQuery";
import layoutQuery from "@components/Layout/LayoutQuery";
import useAnimation from "@lib/Animation/useAnimation";
import useParallax from "@hooks/useParallax/useParallax";
import BodyParser from "@lib/SanityPageBuilder/lib/BodyParser";
import fetchStaticPaths from "@lib/SanityPageBuilder/lib/fetchStaticPath/fetchStaticPath";
import fetchStaticProps from "@lib/SanityPageBuilder/lib/fetchStaticProps/fetchStaticProps";
import { sanityClient as client } from "@lib/SanityService/sanity.server";

import type { GetStaticPaths, GetStaticProps } from "next";
import appConfig from "../app.config.json";
const locales = appConfig.locales;

export type PageResult = layoutQueryResult & appQueryResult & { content?: any };

const Page = () => {
  const { data } = useAppContext();
  // useAnimation([
  //   {
  //     selector: "section p,h1,h2,h3,h4",
  //     initialStyle: {
  //       opacity: 0,
  //       transform: "translate3d(0,200px,0)",
  //       transition: "all 0.5s",
  //     },
  //     hideStyle: { opacity: 0, transform: "translate3d(0,200px,0)" },
  //     showStyle: { opacity: 100, transform: "translate3d(0,0,0)" },
  //   },
  // ]);
  useParallax();

  return (
    <BodyParser
      components={{
        hero: {
          component: HeroBlock,
        },
        section: {
          component: SectionBlock,
        },
        listing: {
          component: ListingBlock,
        },
      }}
      content={data?.content || []}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return await fetchStaticPaths({
    client,
    doc: "page",
    locales,
  });
};

export const getStaticProps: GetStaticProps = async (props) => {
  const { params, preview, locale } = props;
  return await fetchStaticProps<PageResult>({
    locale,
    revalidate: true,
    params,
    client,
    previewQuery: `content[]{${heroBlockQuery(locale)},${sectionBlockQuery(
      locale
    )}, ${listingBlockQuery(locale)}}`,
    query: `content[]{${heroBlockQuery(locale)},${sectionBlockQuery(
      locale
    )},${listingBlockQuery(locale)}},  ${layoutQuery(locale)}, ${appQuery(
      locale
    )}`,
    locales,
    preview,
  });
};

export default Page;
