import Link from "next/link";
import Layout from "../components/Layout";
import Time from "../components/time";
const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1 className="font-sans text-5xl font-bold m-auto">Hello Next.js 👋</h1>
      <Time />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
