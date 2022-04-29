import Document, { Head, Html, Main, NextScript } from "next/document";

const isDevelopment = process.env.NODE_ENV === "development";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <link
            rel="preload"
            href="/fonts/HamburgSans-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/HamburgSans-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
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
