import React from 'react';
import type { AppProps } from 'next/app';
import '/src/styles/index.scss';
import Head from 'next/head';
import Layout from '../layout/layout';
import { Favicons } from '../components/favicons/favicons';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`PlumPix.io`}</title>
        <Favicons />
      </Head>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  )
}
