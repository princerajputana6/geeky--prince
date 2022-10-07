import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="Nm_mqvng6Nnb3igGO8s_xcvF7LLom65HEyUbVQzrdd8"
          />
          <meta
            name="description"
            content="Geeky Prince Pvt Ltd. is a software developmentand business building platform where you can get your customized solutions for your business."
          />
          <meta
            property="og:title"
            content="Home - A Website building platform"
          />
          <meta
            property="og:description"
            content="The sotry behind Geeky Prince is who want to make everything deployed on web."
          />
          <meta property="og:url" content="https://geekyprince.com" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
