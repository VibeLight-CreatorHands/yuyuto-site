import '../styles/globals.css'; // グローバルCSSの読み込み
import Head from 'next/head'; // Headタグを使うためにインポート

// _app.js でページごとのプロパティや設定を定義
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Next.js Project</title> {/* ページのタイトル */}
        <meta name="description" content="My Next.js application" /> {/* メタデータ */}
        <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
      </Head>
      
      {/* ページコンポーネントをレンダリング */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
