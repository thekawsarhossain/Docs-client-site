import Head from 'next/head'

import Contact from "../components/Home/Contact/Contact";
import Navbar from '../components/Shared/Navbar/Navbar'
const contact = () => {
  return (
    <div>
     <Head>
        <title>
          Contact
        </title>
      </Head>
      <Navbar/>
      <Contact/>
    </div>
  );
}

export default contact;