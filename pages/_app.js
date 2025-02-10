// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
   <>
   <Head>
    <title>YuyutoSite</title>
    <meta name="description" content="My Next.js application" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <Component {...pageProps} />
   </>
 )
}

export default MyApp;
