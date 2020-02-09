import React from 'react';
import Head from 'next/head';
import './styles.css';
import '@babel/polyfill';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vacation Rentals, Homes, Experiences & Places</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' type='image/x-icon' href='/img/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;