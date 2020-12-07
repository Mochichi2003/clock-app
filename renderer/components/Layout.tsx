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
    <header className="fixed  z-30 w-full flex flex-row-reverse">
      <button
        className="bg-white p-10 m-2 rounded-md hover:bg-gray-300"
        onClick={function () {
          // alert("click");
          if (document.querySelector("html").classList.contains("dark")) {
            document.querySelector("html").classList.remove("dark");
          } else {
            document.querySelector("html").classList.add("dark");
          }
        }}
      >
        <svg
          enableBackground="new 0 0 45.16 45.16"
          height="45.16"
          viewBox="0 0 45.16 45.16"
          width="45.16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m22.58 11.269c-6.237 0-11.311 5.075-11.311 11.312s5.074 11.312 11.311 11.312c6.236 0 11.311-5.074 11.311-11.312s-5.075-11.312-11.311-11.312z" />
          <path d="m22.58 7.944c-1.219 0-2.207-.988-2.207-2.206v-3.531c0-1.219.988-2.207 2.207-2.207s2.207.988 2.207 2.207v3.531c0 1.218-.989 2.206-2.207 2.206z" />
          <path d="m22.58 37.215c-1.219 0-2.207.988-2.207 2.207v3.53c0 1.22.988 2.208 2.207 2.208s2.207-.988 2.207-2.208v-3.53c0-1.219-.989-2.207-2.207-2.207z" />
          <path d="m32.928 12.231c-.861-.862-.861-2.259 0-3.121l2.497-2.497c.861-.861 2.259-.861 3.121 0 .862.862.862 2.26 0 3.121l-2.497 2.497c-.861.862-2.258.862-3.121 0z" />
          <path d="m12.231 32.93c-.862-.863-2.259-.863-3.121 0l-2.497 2.496c-.861.861-.862 2.26 0 3.121s2.26.861 3.121 0l2.497-2.498c.862-.861.862-2.259 0-3.119z" />
          <path d="m37.215 22.58c0-1.219.988-2.207 2.207-2.207h3.531c1.219 0 2.207.988 2.207 2.207s-.988 2.206-2.207 2.206h-3.531c-1.219 0-2.207-.987-2.207-2.206z" />
          <path d="m7.944 22.58c0-1.219-.988-2.207-2.207-2.207h-3.53c-1.219 0-2.207.988-2.207 2.207s.988 2.206 2.207 2.206h3.531c1.218 0 2.206-.987 2.206-2.206z" />
          <path d="m32.928 32.93c.862-.861 2.26-.861 3.121 0l2.497 2.497c.862.86.862 2.259 0 3.12s-2.259.861-3.121 0l-2.497-2.497c-.862-.862-.862-2.259 0-3.12z" />
          <path d="m12.231 12.231c.862-.862.862-2.259 0-3.121l-2.497-2.496c-.862-.862-2.259-.862-3.121 0-.862.861-.862 2.259 0 3.12l2.497 2.497c.862.863 2.259.863 3.121 0z" />
        </svg>
      </button>
    </header>
    {children}
    <footer>
      {/* <hr /> */}
      {/* <span>I&apos;m here to stay (Footer)</span> */}
    </footer>
  </div>
);

export default Layout;
