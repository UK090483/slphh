import Document, { Head, Html, Main, NextScript } from "next/document";

const isDevelopment = process.env.NODE_ENV === "development";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <meta name="theme-color" content="#003063"></meta>
          <meta
            name="google-site-verification"
            content="MYojza2y3frmhPSSTJ4oNnrp-ipGqoJ3VvuPtdT1sMM"
          />
          {/* <script
            async
            defer
            data-website-id="0c4b96a7-a904-4c2e-8f63-3c74f508be46"
            src="https://umami-neon-pi.vercel.app/umami.js"
          ></script> */}
          {/* <script
            id="usercentrics-cmp"
            src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
            data-version="preview"
            data-settings-id="KVgeJnah"
            async
          ></script>  */}
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
