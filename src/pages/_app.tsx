import React from 'react';
import type { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import '@/styles/common.scss';
import { Raleway } from 'next/font/google';
import Head from 'next/head';

export const ralewayFont = Raleway({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`PlumPix.io`}</title>
      </Head>

      <main>
        <Component {...pageProps} />

        <style jsx global>{
          `
          :root {
            --plump: #4D62C2;
            --white: #fff;
            --black: #000;
            --gray: #F7F7F7;

            --radiusS: 25px;
            --radiusL: 42px;

            --transition: 0.2s ease;
          }
          body {
            font-family: ${ralewayFont.style.fontFamily};
          }
        `
        }</style>

      </main>
    </>
  )
}
