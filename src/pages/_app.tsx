import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Layout } from '@/components';
import Loading from './loading';
import { Suspense } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </Suspense>
    </Layout>
  );
}

export default MyApp;
