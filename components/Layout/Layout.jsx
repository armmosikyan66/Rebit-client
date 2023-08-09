'use client'

import { useRouter } from 'next/router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({ fromHome, children }) {

  let router;

  if (!fromHome) {
    router = useRouter();
  }

  // console.log('router', router, fromHome);
  // console.log('Layout');

  return (
    <>
        <Header route={router?.route} />
          {children}
        <Footer />
    </>
  )
}
