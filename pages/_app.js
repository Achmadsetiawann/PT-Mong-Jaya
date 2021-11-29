import React from 'react';

import '../styles/global.scss'

import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}


export default MyApp
