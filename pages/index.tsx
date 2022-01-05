import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>YCCE ACM Student Chapter</title>
        <meta name="description" content="ACM Student Chapter Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-3xl">ACM Student Chapter - YCCE</div>
      </main>
    </div>
  );
};

export default Home;
