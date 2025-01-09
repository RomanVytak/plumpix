import React from 'react';
import type { AppProps } from 'next/app';
import '/src/styles/index.scss';
import Head from 'next/head';
import Layout from '../layout/layout';
import { Favicons } from '../components/favicons/favicons';
import { DefaultSeo } from 'next-seo';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title='PlumPix - Custom Software Product Development Company'
        description='From Design and Engineering to Launch and Lupport'
      />
      <Head>
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
