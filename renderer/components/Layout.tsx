import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title || "タイトル"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="fixed bg-red-400 w-full flex flex-row-reverse">
      <button>ボタン</button>
    </header>
    {children}
    <footer>
      {/* <hr /> */}
      {/* <span>I&apos;m here to stay (Footer)</span> */}
    </footer>
  </div>
);

export default Layout;
