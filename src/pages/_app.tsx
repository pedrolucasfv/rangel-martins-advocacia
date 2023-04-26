import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

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
          name="google-site-verification"
          content="Cx87yb4vMp9xwA1Puo2ZQQe14DbVm2jXRVSa5KeUXLA"
        />
        <meta
          name="description"
          content="Escritório de advocacia Rangel & Martins."
        />
      </Head>
      <NextNProgress
        color="#eab308"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}
