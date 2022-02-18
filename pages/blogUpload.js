import Head from 'next/head'
import HeadSection from '../components/BlogUpload/HeaderSection/HeadSection'
import InfoInput from '../components/BlogUpload/InfoInput/InfoInput'
import dynamic from 'next/dynamic'
import Tags from '../components/BlogUpload/Tags/Tags'
import { useState } from 'react'
import Footer from '../components/Shared/Footer/Footer'

const TextEditor = dynamic(
  () => import('../components/BlogUpload/TextEditor/TextEditor.js'),
  {
    ssr: false,
  }
)

const Test2 = () => {
  const [data, setData] = useState('')
  const imgLink = (e) => {
    console.log(e)
  }
  const blogData = (e) => {
    console.log(e)
  }
  const allTags = (e) => {
    console.log(e)
    setData(e)
  }
  return (
    <div style={{ backgroundColor: '#21242c' }}>
      <div>
        <HeadSection></HeadSection>
        <InfoInput imgLink={imgLink}></InfoInput>
        <TextEditor blogData={blogData}></TextEditor>
        <Tags allTags={allTags}></Tags>
        <Footer></Footer>
        {/* <div
          dangerouslySetInnerHTML={{
            __html: `${data}`,
          }}
        ></div> */}
      </div>
    </div>
  )
}

export default Test2
