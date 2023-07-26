import type { ReactElement } from 'react';

import type { NextPageWithLayout } from './_app';
import RootLayout from '@/components/layouts/RootLayout';
import Head from 'next/head';

const Page: NextPageWithLayout = () => {
  return <div>
    <Head>
      <title>Home Page</title>
      <meta name='Home Page' description='this is a page built with next js'/>
    </Head>
  </div>;
};
export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

