import type { NextPage } from "next";
import Head from "next/head";
import EventCard from "../components/EventCard";
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
        <section className="container mx-auto h-screen flex flex-col py-4 px-2 items-center">
          <EventCard
            date="22-11-2020"
            title="16 Hours SDP on ReactJS and NodeJS"
            speaker={"Mr. Ahfaz Rahman"}
            desc="16 Hrs SDP on React and Node JS was organised by the department. Mr. Ahafaz Rahaman from TCS Nagpur was the resource person"
            attendees={90}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
