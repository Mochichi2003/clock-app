import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Main, NextScript, Html } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head />

        <body>
          <ColorModeScript initialColorMode="dark" />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
