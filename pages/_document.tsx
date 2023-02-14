/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from "next/document";

const isDevelopment = process.env.NODE_ENV === "development";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="MYojza2y3frmhPSSTJ4oNnrp-ipGqoJ3VvuPtdT1sMM"
          />

          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="//app.usercentrics.eu" />
          <link rel="preconnect" href="//api.usercentrics.eu" />
          <link rel="preconnect" href="//privacy-proxy.usercentrics.eu" />

          <link
            rel="preload"
            href="//app.usercentrics.eu/browser-ui/latest/loader.js"
            as="script"
          />
          <link
            rel="preload"
            href="//privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"
            as="script"
          />

          <meta name="theme-color" content="#003063"></meta>

          <script
            id="usercentrics-cmp"
            data-settings-id="KVgeJnah"
            src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
            async
          ></script>
          <script
            type="application/javascript"
            src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"
          ></script>
        </Head>

        <body
          className={`text-black break-words  ${
            isDevelopment ? "debug-screens" : ""
          } `}
        >
          <Main />
          <div id="app-portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
