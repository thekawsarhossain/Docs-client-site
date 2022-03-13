import { Container, FormHelperText } from '@mui/material'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import AQTags from '../AQTags/AQTags'
import BackupIcon from '@mui/icons-material/Backup'
import { useSelector } from 'react-redux'
const AQTextEditor = dynamic(() => import('../AQTextEditor/AQTextEditor'), {
  ssr: false,
})

const AQBody = () => {
  //   const Input = styled('input')({
  //     display: 'none',
  //   })

  // user info from data base
  const userInfoFromDB = useSelector(
    (state) => state?.reducers?.user?.userInfoFromDB
  )

  let time = new Date()
  const date = new Date().toLocaleDateString()
  const currentTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  const [age, setAge] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [documentation, setDocumentation] = useState('')
  const [tags, setTags] = useState([])
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setCategoryName(event.target.value)
    //   props.category(event.target.value)
    console.log(event.target.value)
  }
  //   const [blogData, setBlogData] = useState({})

  const questionTitle = (e) => {
    setTitle(e)
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
    if (!title || !categoryName || !documentation || !tags) {
      alert(
        'Title, Category selection, Documentation , Tags giving are required. If any of those missing you can not submit you blog or documentation. Please enter the data if anyone is missing. Thank you.'
      )
      return
    }
    const uploadData = {
      title: title,
      category: categoryName,
      documentation: documentation,
      tags: tags,
      uploadTime: currentTime,
      uploadDate: date,
      blogger: userInfoFromDB,
      answers: [],
    }
    fetch('http://localhost:5000/blogs', {
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
          router.replace('/blogs')
        }
      })
  }
  return (
    <div>
      <Container>
        <div className="my-6 rounded-md bg-Docy-PaleGrey p-6 dark:bg-Docy-DarkGray">
          {/* Title and category section start */}
          <div>
            <div className="grid grid-cols-12 gap-6 pb-6">
              {/* Blog Title Input  */}
              <div className="col-span-12 md:col-span-6">
                <div>
                  <FormHelperText sx={{ color: 'gray' }}>Title</FormHelperText>
                  <input
                    required
                    placeholder="Please enter your blog title"
                    className="h-14 w-full rounded-md border-2 bg-slate-200 p-3 text-lg text-black dark:border-0"
                    type="text"
                    onBlur={questionTitle}
                  />
                </div>
              </div>
              {/* Category Selection Handling  */}
              <div className="col-span-12 md:col-span-6">
                <FormHelperText sx={{ color: 'gray' }}>Category</FormHelperText>
                <select
                  value={age}
                  onChange={handleChange}
                  className=" h-14 w-full cursor-pointer rounded-lg border-2 bg-slate-200 p-3 text-lg text-black dark:border-0"
                >
                  <option className="hidden">Select Category</option>
                  <option>Creative</option>
                  <option>Inspiration</option>
                  <option>Lifestyle</option>
                  <option>News</option>
                  <option>Photography</option>
                  <option>Skill</option>
                  <option>Tourist Tours</option>
                  <option>Inspire</option>
                  <option>Education</option>
                </select>
              </div>
            </div>
          </div>
          {/* Title and category section end */}
          {/* Text editor and tags section start */}
          <div>
            <div className="grid grid-cols-12 gap-4 pb-6">
              {/* TextEditor */}
              <div className="col-span-12 lg:col-span-8">
                <div>
                  <div>
                    <AQTextEditor blogData={blogData}></AQTextEditor>
                  </div>
                </div>
              </div>
              {/* Tags Selection Handling  */}
              <div className="col-span-12 lg:col-span-4">
                <AQTags allTags={allTags}></AQTags>
              </div>
            </div>
          </div>
          {/* Text editor and tags section end */}
          <div className="">
            <button
              onClick={() => handleUpload()}
              className="rounded-lg bg-indigo-500 py-2 px-4 text-lg font-semibold text-white"
            >
              <BackupIcon className="animate-bounce" /> Submit
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AQBody
