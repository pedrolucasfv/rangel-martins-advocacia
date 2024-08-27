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
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P4GVDG6R');`
        }} />
        {/* End Google Tag Manager */}
      </Head>
      <NextNProgress
        color="#eab308"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-P4GVDG6R"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </>
  );
}
