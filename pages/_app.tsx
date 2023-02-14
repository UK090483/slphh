import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import Seo from "@lib/SeoService/Seo";
import { PageResult } from "./[[...slug]]";
import { PageProps } from "@lib/SanityPageBuilder/types";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";
import { AppContextProvider } from "@components/AppContext";
import AppConfig from "app.config.json";
import { useEffect } from "react";
// import { LazyMotion, domAnimation, AnimatePresence, m } from "framer-motion";
import Script from "next/script";

import { init } from "@socialgouv/matomo-next";

interface AppPropsWithStaticProps {
  pageProps: PageProps<PageResult>;
  Component: NextComponentType<NextPageContext, any, PageProps<PageResult>>;
}

const animation = {
  name: "Fade Back",
  variants: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
  transition: {
    // duration: 0.7,
    duration: 3,
  },
};

function App({ Component, pageProps: _pageProps }: AppPropsWithStaticProps) {
  const { data: _data, query, preview } = _pageProps;

  useEffect(() => {
    init({ url: "//matomo.startupcity.hamburg", siteId: "9" });
  }, []);

  const { data } = usePreviewSubscription<PageResult | null>(query, {
    initialData: _data,
    enabled: preview,
  });

  const aData = { ..._data, ...data };
  const pageProps = { ..._pageProps, data: aData } as PageProps<PageResult>;

  return (
    <>
      <AppContextProvider data={pageProps.data} hostName={AppConfig.hostname}>
        <Layout>
          <Component {...pageProps} key={pageProps?.data?._id} />
        </Layout>

        <PreviewIndicator show={!!preview} />

        <Seo />
      </AppContextProvider>
    </>
  );
}

export default App;
