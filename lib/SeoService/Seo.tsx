import React from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useAppContext } from "@components/AppContext";

const metaImageParams = "?w=1200&h=630&bg=fff&fit=fillmax";
const titlePrefix = "PERSPEKTIV REGION | ";

type SeoProps = {
  hostName?: string;
};

const Seo: React.FC<SeoProps> = (props) => {
  const { pathname, defaultLocale, asPath, locale } = useRouter();
  const { data, hostName } = useAppContext();
  const seo = data?.seo;
  const preparedLocale = defaultLocale === locale ? "" : "/" + locale;
  const canonicalRoute = `${preparedLocale}${asPath === "/" ? "" : asPath}`;

  if (!seo) return null;
  const { metaTitle, metaDesc, shareDesc, shareGraphic } = seo;

  const canUrl = `${hostName}${canonicalRoute}`;
  const is404 = pathname === "/404";
  const title = is404 ? titlePrefix + "404" : titlePrefix + metaTitle;

  return (
    <NextSeo
      // nofollow={true}
      // noindex={true}
      title={title}
      description={metaDesc}
      canonical={canUrl}
      twitter={{
        cardType: "summary",
      }}
      openGraph={{
        url: canUrl,
        title: title,
        description: shareDesc,
        type: "page",
        images: [
          {
            url: shareGraphic + metaImageParams || "",
            width: 1200,
            height: 630,
          },
        ],
        site_name: "Perspektiv Region",
      }}
    />
  );
};
export default Seo;
