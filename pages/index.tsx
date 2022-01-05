import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="text-gray-600 body-font">
      <Head>
        <title>YCCE ACM Student Chapter</title>
        <meta name="description" content="ACM Student Chapter Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className="text-3xl">ACM Student Chapter - YCCE</div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
