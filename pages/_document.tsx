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
