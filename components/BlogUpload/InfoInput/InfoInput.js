/* eslint-disable @next/next/no-img-element */
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

const InfoInput = (props) => {
  const Input = styled('input')({
    display: 'none',
  })

  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
    switch (event.target.value) {
      case 1:
        props.category('Creative')
        break
      case 2:
        props.category('Inspiration')
        break
      case 3:
        props.category('Lifestyle')
        break
      case 4:
        props.category('News')
        break
      case 5:
        props.category('Photography')
        break
      case 6:
        props.category('Skill')
        break
      case 7:
        props.category('Tourist Tours')
        break
      case 8:
        props.category('Inspire')
        break
    }
  }

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [blogData, setBlogData] = useState({})

  const title = (e) => {
    props.blogTitle(e.target.value)
  }
  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setLoading(true)
    console.log(e.target.name)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dkbgqzl1e/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()
    // console.log(file.public_id);
    const field = e.target.name
    const value = file.secure_url
    const newBlogData = { ...blogData }
    newBlogData[field] = value
    setBlogData(newBlogData)
    console.log(blogData)

    console.log('something')
    setImage(file.secure_url)
    props.imgLink(file.secure_url)
    setLoading(false)
  }
  const uploadVideo = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setLoading(true)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dkbgqzl1e/video/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()
    // console.log(file.public_id);

    props.imgLink(file.secure_url)
    setVideo(file.secure_url)
    props.videoLink(file.secure_url)
    console.log(video)
    setLoading(false)
  }

  return (
    <div>
      <Container>
        <div className="py-10">
          {/* Blog Title Input  */}
          <div>
            <h2 className="mb-2 pb-1 text-2xl text-Docy-Dark dark:text-white">
              Please enter a suitable title for your blog or documentation.
            </h2>
            <div>
              <input
                required
                placeholder="Please enter your blog title"
                className="mb-5 w-full rounded-md border-2 p-3 text-lg dark:border-0"
                type="text"
                onBlur={title}
              />
            </div>
          </div>
          {/* Video Upload Handling  */}
          <div>
            <h2 className="mb-3 pb-3 text-2xl text-Docy-Dark dark:text-white">
              Do you want to shear a video blog or documentation?
            </h2>
            <div>
              <label className="rounded-lg bg-gray-400 px-3 py-3 font-semibold  text-Docy-Dark dark:text-white">
                <input
                  className="hidden"
                  type="file"
                  name="video"
                  placeholder="upload"
                  onChange={uploadVideo}
                />
                Upload Video
              </label>
            </div>
            <div>
              <div className="pt-4">
                {loading && <h3>Loading ...</h3>}
                <div>
                  {video && (
                    <video
                      className="mx-auto"
                      style={{ maxWidth: '760px' }}
                      src={video}
                      controls
                    ></video>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Thumbnail Upload Handling  */}
          <div>
            <h2 className="mb-3 pt-8 pb-3 text-2xl text-Docy-Dark dark:text-white">
              🌝 Please set a thumbnail for your blog or documentation.
            </h2>
            <div>
              <label className="rounded-lg bg-gray-400 px-3 py-3 font-semibold text-Docy-Dark dark:text-white">
                <input
                  className="hidden"
                  type="file"
                  name="thumbnail"
                  placeholder="upload"
                  onChange={uploadImage}
                />
                Upload Thumbnail
              </label>
            </div>
            <div>
              <div className="pt-4">
                {loading && <h3>Loading ...</h3>}
                <div>
                  {image && (
                    <img
                      className="mx-auto"
                      style={{ maxWidth: '760px' }}
                      src={image}
                      controls
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Category Selection Handling  */}
          <div>
            <h2 className="mb-3 pt-8 text-2xl text-Docy-Dark dark:text-white">
              🌝 Please select a category of your blog or documentation.
            </h2>
            <FormControl
              variant="filled"
              sx={{
                m: 1,
                minWidth: 300,
                backgroundColor: 'white',
                borderRadius: 2,
              }}
            >
              <InputLabel
                id="demo-simple-select-filled-label"
                sx={{ color: 'black' }}
              >
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
                sx={{ borderColor: 'white' }}
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value={1}>Creative</MenuItem>
                <MenuItem value={2}>Inspiration</MenuItem>
                <MenuItem value={3}>Lifestyle</MenuItem>
                <MenuItem value={4}>News</MenuItem>
                <MenuItem value={5}>Photography</MenuItem>
                <MenuItem value={6}>Skill</MenuItem>
                <MenuItem value={7}>Tourist Tours</MenuItem>
                <MenuItem value={8}>Inspire</MenuItem>
              </Select>
              <FormHelperText sx={{ color: 'red' }}>Required*</FormHelperText>
            </FormControl>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default InfoInput
