import Head from "next/head";
import Header from "@containers/Header";
import Main from "@containers/Main";
import Footer from "@containers/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>andreb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Main />
        <Footer />
      </main>
    </div>
  );
}
