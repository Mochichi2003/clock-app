import React, { ReactNode, SVGProps } from "react";
// import Link from "next/link";
import Head from "next/head";

type Props = {
  children: ReactNode;
  title?: string;
};
// 太陽のほう
export function IcRoundWbSunny(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      focusable="false"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
// 月の方
export function SiGlyphMoonStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      focusable="false"
      width="0.95em"
      height="1em"
      viewBox="0 0 16 17"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M10.705 13.274A6.888 6.888 0 0 1 6.334 1.065C2.748 1.892.072 5.099.072 8.936a8.084 8.084 0 0 0 8.084 8.085c3.838 0 7.043-2.676 7.871-6.263a6.868 6.868 0 0 1-5.322 2.516z"></path>
        <path d="M12.719 1.021l1.025 2.203l2.293.352l-1.658 1.715l.391 2.42l-2.051-1.143l-2.051 1.143l.391-2.42l-1.661-1.715l2.294-.352l1.027-2.203z"></path>
      </g>
    </svg>
  );
}

class DarkLightSwicher extends React.Component {
  render() {
    return (
      <a
        className="bg-gray-900 dark:bg-white ring-inset group p-2 m-2 outline-none  rounded-md cursor-pointer focus:ring-yellow-400 focus:ring-4 focus:ring-opacity-50  "
        onClick={function () {
          // alert("click");
          if (document.querySelector("html").classList.contains("dark")) {
            document.querySelector("html").classList.remove("dark");
          } else {
            document.querySelector("html").classList.add("dark");
          }
        }}
      >
        {/* 太陽のほう */}
        <IcRoundWbSunny className="fill-current text-white dark:text-black" />
      </a>
    );
  }
}

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title || "タイトル"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="fixed  z-30 w-full flex flex-row-reverse">
      <DarkLightSwicher />
    </header>
    {children}
    <footer>
      {/* <hr /> */}
      {/* <span>I&apos;m here to stay (Footer)</span> */}
    </footer>
  </div>
);

export default Layout;
