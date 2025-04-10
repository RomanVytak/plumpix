import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '/src/styles/index.scss';
import Head from 'next/head';
import Layout from '../layout/layout';
import { Favicons } from '../components/favicons/favicons';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <Favicons />
      </Head>
      <DefaultSeo
        title='PlumPix - Custom Software Product Development Company'
        description='From Concept and Engineering to Launch and Support'
      />
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  )
}
