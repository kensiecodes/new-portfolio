import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kensie Jack | Software Engineer | Portfolio </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
