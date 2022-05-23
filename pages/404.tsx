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
    <div className=" py-12 md:py-28 w-full justify-center items-center ">
      <div className=" w-full grid grid-cols-2  max-w-xl px-5   mx-auto gap-8">
        <svg
          viewBox="0 0 118 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M81.8565 30.3799C74.3995 30.3799 68.3555 36.4249 68.3555 43.8809C68.3555 51.3369 74.3995 57.3819 81.8565 57.3819C89.3135 57.3819 95.3575 51.3369 95.3575 43.8809C95.3575 36.4249 89.3125 30.3799 81.8565 30.3799ZM81.8565 48.3809C79.3715 48.3809 77.3565 46.3659 77.3565 43.8809C77.3565 41.3959 79.3715 39.3809 81.8565 39.3809C84.3415 39.3809 86.3565 41.3959 86.3565 43.8809C86.3565 46.3659 84.3415 48.3809 81.8565 48.3809Z"
            fill="#CA497C"
          />
          <path
            d="M38.8451 54.96L45.2091 48.596L40.6131 44L45.2091 39.404L38.8451 33.04L34.2491 37.636L29.6531 33.04L23.2891 39.404L27.8851 44L23.2891 48.596L29.6531 54.96L34.2491 50.364L38.8451 54.96Z"
            fill="#CA497C"
          />
          <path
            d="M117.25 58.5C117.25 26.243 91.007 0 58.75 0C26.493 0 0.25 26.243 0.25 58.5C0.25 90.757 26.462 116.967 58.692 116.999L33.176 134.009V145.091L54.141 130.892L58.749 127.69L63.36 130.892L84.325 145.091V134.009L58.81 116.999C91.04 116.967 117.251 90.738 117.251 58.501L117.25 58.5ZM58.75 108C31.456 108 9.25 85.794 9.25 58.5C9.25 31.206 31.456 9 58.75 9C86.044 9 108.25 31.206 108.25 58.5C108.25 85.794 86.044 108 58.75 108Z"
            fill="#CA497C"
          />
          <path
            d="M65.2714 72H34.3574V81H56.2284V82.981C56.2284 90.473 62.3014 96.546 69.7934 96.546C77.2854 96.546 83.3584 90.473 83.3584 82.981V72H65.2724H65.2714ZM74.3144 82.981C74.3144 85.478 72.2904 87.503 69.7934 87.503C67.2964 87.503 65.2724 85.479 65.2724 82.981V81H74.3154V82.981H74.3144Z"
            fill="#CA497C"
          />
        </svg>

        <div className="flex justify-center items-center text-primary text-5xl-mobile md:text-5xl font-bold">
          OOPS!
        </div>
        <div className=" col-span-full ">
          <b>404 - PAGE NOT FOUND</b>

          <p> The requested page could not be found.</p>
        </div>

        {/* <Image
          src="/images/404_Page.png"
          width={600}
          height={600}
          alt={"man on blackboard with 404 written on"}
          layout="responsive"
        /> */}
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
