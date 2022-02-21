import Head from 'next/head'
import React from 'react'
import AboutContent from '../components/AboutPage/AboutContent';
import TeamContent from '../components/AboutPage/TeamContent';
import Footer from '../components/Shared/Footer/Footer';

const about = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <AboutContent />
      <TeamContent />
      <Footer />
    </div>
  )
}

export default about
