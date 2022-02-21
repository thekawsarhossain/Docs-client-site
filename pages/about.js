import Head from 'next/head'
import React from 'react'
import About from '../components/AboutPage/About'

const about = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <About />
    </div>
  )
}

export default about
