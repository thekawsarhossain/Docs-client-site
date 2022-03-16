import Head from 'next/head'
import React from 'react'
import AboutContent from '../components/AboutPage/AboutContent'
import TeamContent from '../components/AboutPage/TeamContent'
import TeamMembers from '../components/AboutPage/TeamMembers'
import Footer from '../components/Shared/Footer/Footer'
import Navbar from '../components/Shared/Navbar/Navbar'

const about = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar />
      <AboutContent />
      <TeamContent />
      <TeamMembers />
      <Footer />
    </div>
  )
}

export default about
