import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";
import Cookie from "@lib/Cookie/Cookie";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";
import Seo from "@lib/SeoService/Seo";
import { PageResult } from "./[[...slug]]";
import { PageProps } from "@lib/SanityPageBuilder/types";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";
import { AppContextProvider } from "@components/AppContext";
// import { AnalyticsContextProvider } from "@lib/Analytics/AnalyticsContext";
// @ts-ignore

import AppConfig from "app.config.json";
import PageTransition from "@lib/PageTransition/PageTransition";

interface AppPropsWithStaticProps {
  pageProps: PageProps<PageResult>;
  Component: NextComponentType<NextPageContext, any, PageProps<PageResult>>;
}

function App({ Component, pageProps: _pageProps }: AppPropsWithStaticProps) {
  const { data: _data, query, preview } = _pageProps;

  const { data, error, loading } = usePreviewSubscription<PageResult | null>(
    query,
    {
      initialData: _data,
      enabled: preview,
    }
  );

  const aData = { ..._data, ...data };
  const pageProps = { ..._pageProps, data: aData } as PageProps<PageResult>;

  return (
    <>
      {/*     
 <AnalyticsContextProvider id="G-YVH817HM4Z"> */}
      <AppContextProvider data={pageProps.data} hostName={AppConfig.hostname}>
        <Layout>
          <Component {...pageProps} key={pageProps?.data?._id} />
        </Layout>

        <PreviewIndicator show={!!preview} />
        {/* <Cookie /> */}
        <Seo />
      </AppContextProvider>

      {/* </AnalyticsContextProvider> */}
    </>
  );
}

export default App;
