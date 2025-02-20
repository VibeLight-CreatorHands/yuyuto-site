// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
   <>
   <Head>
    <title>Elium.com</title>
    <meta name="description" content="Elium's official site" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <Component {...pageProps} />
   </>
 )
}

export default MyApp;
