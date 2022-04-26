import { sanityClient as client } from "@lib/SanityService/sanity.server";
import heroBlockQuery from "@components/Blocks/HeroBlock/HeroBlockQuery";
import listingBlockQuery from "@components/Blocks/ListingBlock/listingBlockQuery";
import sectionBlockQuery from "@components/Blocks/SectionBlock/SectionBlockQuery";
import layoutQuery from "@components/Layout/LayoutQuery";
import Typo from "@components/Typography/Typography";
import fetchStaticProps from "@lib/SanityPageBuilder/lib/fetchStaticProps/fetchStaticProps";
import * as React from "react";
import { PageResult } from "./[[...slug]]";
import appConfig from "../app.config.json";
import Image from "next/image";
const locales = appConfig.locales;

interface IStypeProps {}

const Page404: React.FunctionComponent<IStypeProps> = (props) => {
  return (
    <div className="relative h-screen flex w-full justify-center items-center ">
      <div className=" w-full  max-w-lg  ">
        <Image
          src="/images/404_Page.png"
          width={600}
          height={600}
          alt={"man on blackboard with 404 written on"}
          layout="responsive"
        />
      </div>
    </div>
  );
};
//@ts-ignore
export const getStaticProps = async (props) => {
  const { preview, locale } = props;
  return await fetchStaticProps<PageResult>({
    locale,
    params: {},
    client,
    query: `${layoutQuery(locale)}`,
    locales,
    preview,
  });
};

export default Page404;
