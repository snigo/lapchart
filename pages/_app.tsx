import Head from 'next/head';

import '../styles/main.scss';

const Lapchart = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Lapchart" />
      <meta name="apple-mobile-web-app-title" content="Lapchart" />
      <meta name="theme-color" content="#fee903" />
      <meta name="msapplication-navbutton-color" content="#143b63" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/images/stopwatch-icon.svg" />
      <link rel="alternate icon" href="/images/stopwatch-icon-32.png" />
      <link rel="icon" sizes="128x128" href="/images/stopwatch-icon-128.png" />
      <link rel="apple-touch-icon" sizes="128x128" href="/images/stopwatch-icon-128.png" />
      <link rel="icon" sizes="192x192" href="/images/stopwatch-icon-192.png" />
      <link rel="apple-touch-icon" sizes="192x192" href="/images/stopwatch-icon-192.png" />
      <link rel="icon" sizes="256x256" href="/images/stopwatch-icon-256.png" />
      <link rel="apple-touch-icon" sizes="256x256" href="/images/stopwatch-icon-256.png" />
      <link rel="icon" sizes="384x384" href="/images/stopwatch-icon-384.png" />
      <link rel="apple-touch-icon" sizes="384x384" href="/images/stopwatch-icon-384.png" />
      <link rel="icon" sizes="512x512" href="/images/stopwatch-icon-512.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/images/stopwatch-icon-512.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default Lapchart;
