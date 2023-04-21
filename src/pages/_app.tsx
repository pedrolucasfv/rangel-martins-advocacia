import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rangel & Martins Advocacia</title>
        <meta name="theme-color" content="#191919" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <link rel="shortcut icon" href="/img/main-logo.png" />
        <meta
          name="description"
          content="Escritório de advocacia Rangel & Martins."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
