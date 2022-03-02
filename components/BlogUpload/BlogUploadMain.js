import { useState } from 'react'
import Footer from '../Shared/Footer/Footer'
import HeadSection from './HeaderSection/HeadSection'
import dynamic from 'next/dynamic'
import InfoInput from './InfoInput/InfoInput'
import Tags from './Tags/Tags'
import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
const TextEditor = dynamic(() => import('./TextEditor/TextEditor.js'), {
  ssr: false,
})

const BlogUploadMain = () => {

  // user data
  const user = useSelector((state) => state?.reducers?.user?.currentUser)
  console.log(user)

  // user info from data base
  const userInfoFromDB = useSelector(
    (state) => state?.reducers?.user?.userInfoFromDB
  )
  console.log(userInfoFromDB)


  const [data, setData] = useState('')
  const [imageLink, setImageLink] = useState('')
  const [video, setVideo] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [documentation, setDocumentation] = useState('')
  const [tags, setTags] = useState([])
  const [title, setTitle] = useState('')

  let time = new Date()
  const date = new Date().toLocaleDateString()
  const currentTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  const blogTitle = (e) => {
    setTitle(e)
  }
  const imgLink = (e) => {
    setImageLink(e)
  }
  const videoLink = (e) => {
    setVideo(e)
  }
  const category = (e) => {
    setCategoryName(e)
  }
  const blogData = (e) => {
    setDocumentation(e)
  }
  const allTags = (e) => {
    setTags(e)
    console.log(...e)
    console.log(tags)
  }
  const handleUpload = () => {
    if (!title || !imageLink || !categoryName || !documentation || !tags) {
      alert(
        'Title, Thumbnail image, Category selection, Documentation or description writing, Tags giving are required. If any of those missing you can not submit you blog or documentation. Please enter the date if anyone is missing. Thank you.'
      )
      return
    }
    const uploadData = {
      title: title,
      image: imageLink,
      video: video,
      category: categoryName,
      documentation: documentation,
      tags: tags,
      uploadTime: currentTime,
      comment: [],
    }
    fetch('https://enigmatic-atoll-27842.herokuapp.com/blogs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert('Your blog have been submitted.')
        }
      })
  }
  return (
    <div>
      <HeadSection></HeadSection>
      <InfoInput
        blogTitle={blogTitle}
        imgLink={imgLink}
        videoLink={videoLink}
        category={category}
      ></InfoInput>
      <TextEditor blogData={blogData}></TextEditor>
      <Tags allTags={allTags}></Tags>
      <Container>
        <button
          onClick={() => handleUpload()}
          className="mb-6 rounded-lg bg-indigo-500 py-2 px-4 text-lg font-semibold text-white"
        >
          Submit
        </button>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default BlogUploadMain
