import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EventCard from "../components/EventCard";
import EventSection from "../components/EventSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TeamSection from "../components/TeamSection";
// import EventsIllustration from "images/undraw_pair_programming_re_or4x.png";

const Home: NextPage = () => {
  return (
    <div className="text-gray-600 body-font scroll-smooth">
      <Head>
        <title>YCCE ACM Student Chapter</title>
        <meta name="description" content="ACM Student Chapter Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        {/* <div className="text-3xl p-4 bg-gray-200">
          ACM Student Chapter - YCCE
        </div> */}
        <section className="container mx-auto min-h-screen py-4 px-5">
          <EventSection />
          <TeamSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
