import React from 'react';
import type { AppProps } from 'next/app';
import '/src/styles/index.scss';
// import { Raleway } from 'next/font/google';
import Head from 'next/head';
import Layout from '../layout/layout';

// export const ralewayFont = Raleway({
//   weight: ['400', '600', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap',
// })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`PlumPix.io`}</title>
      </Head>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  )
}
