import type { NextPage } from 'next'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Characteristics from "../components/Characteristics";
import Head from 'next/head';
import Script from 'next/script';

const Home: NextPage = () => {
  return (

    <>
      <Head>
        <title>Panuozzo</title>
        <meta name="description" content="Pizza napolitana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
      <Characteristics />
      <Script src="./assets/vendor/preline/dist/preline.js" />
      </main>
      <Footer />
    </>
  )
}

export default Home
