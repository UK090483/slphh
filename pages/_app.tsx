import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";
import Seo from "@lib/SeoService/Seo";
import { PageResult } from "./[[...slug]]";
import { PageProps } from "@lib/SanityPageBuilder/types";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";
import { AppContextProvider } from "@components/AppContext";
import AppConfig from "app.config.json";
import { LazyMotion, domAnimation, AnimatePresence, m } from "framer-motion";
import Script from "next/script";

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
    duration: 0.7,
  },
};

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
      <Script
        async
        defer
        data-website-id="0c4b96a7-a904-4c2e-8f63-3c74f508be46"
        src="https://umami-neon-pi.vercel.app/umami.js"
        strategy="afterInteractive"
      ></Script>
      {/* <Script
        id="usercentrics-cmp"
        src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
        data-version="preview"
        data-settings-id="KVgeJnah"
        async
        defer
        strategy="afterInteractive"
      ></Script> */}
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <AppContextProvider
            data={pageProps.data}
            hostName={AppConfig.hostname}
          >
            <Layout>
              <m.div
                key={pageProps?.data?._id}
                className="page-wrap  overflow-hidden "
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animation.variants}
                transition={animation.transition}
              >
                <Component {...pageProps} key={pageProps?.data?._id} />
              </m.div>
            </Layout>

            <PreviewIndicator show={!!preview} />
            {/* <Cookie /> */}
            <Seo />
          </AppContextProvider>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default App;
