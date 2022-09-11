import "../styles/globals.scss";
import "normalize.css/normalize.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frontend Mentor Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
