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
import VideoCallIcon from '@mui/icons-material/VideoCall'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'

const InfoInput = (props) => {
  const Input = styled('input')({
    display: 'none',
  })

  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
    props.category(event.target.value)
    console.log(event.target.value)
  }

  const [imageLoading, setImageLoading] = useState(false)
  const [videoLoading, setVideoLoading] = useState(false)
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [blogData, setBlogData] = useState({})

  const title = (e) => {
    props.blogTitle(e.target.value)
  }

  const dragOver = (e) => {
    e.preventDefault()
  }

  const dragEnter = (e) => {
    e.preventDefault()
  }

  const dragLeave = (e) => {
    e.preventDefault()
  }

  const imageFileDrop = async (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    console.log(files)

    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setImageLoading(true)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dvszolotz/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()

    const field = 'thumbnail'
    const value = file.secure_url
    const newBlogData = { ...blogData }
    newBlogData[field] = value
    setBlogData(newBlogData)

    setImage(file.secure_url)
    // setImage(files[0])
    props.imgLink(file.secure_url)
    setImageLoading(false)
  }
  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setImageLoading(true)
    console.log(e.target.files)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dvszolotz/image/upload',
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
    // setImage(files[0])
    props.imgLink(file.secure_url)
    setImageLoading(false)
  }
  const videoFileDrop = async (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    console.log(files)

    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setVideoLoading(true)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dvszolotz/video/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()

    setVideo(file.secure_url)
    props.videoLink(file.secure_url)
    console.log(video)
    setVideoLoading(false)
  }
  const uploadVideo = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setVideoLoading(true)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dvszolotz/video/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()

    setVideo(file.secure_url)
    props.videoLink(file.secure_url)
    console.log(video)
    setVideoLoading(false)
  }

  return (
    <div>
      <Container>
        <div className="py-10">
          <div className="grid grid-cols-12 gap-6 pb-6">
            {/* Blog Title Input  */}
            <div className="col-span-12 md:col-span-6">
              <div>
                <input
                  required
                  placeholder="Please enter your blog title"
                  className="h-14  w-full rounded-md border-2 p-3 text-lg dark:border-0"
                  type="text"
                  onBlur={title}
                />
                <FormHelperText sx={{ color: 'red' }}>Required*</FormHelperText>
              </div>
            </div>
            {/* Category Selection Handling  */}
            <div className="col-span-12 md:col-span-6">
              <select
                value={age}
                onChange={handleChange}
                className=" h-14 w-full cursor-pointer rounded-lg border-2 p-3 text-lg dark:border-0"
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
              <FormHelperText sx={{ color: 'red' }}>Required*</FormHelperText>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* Video Upload Handling  */}
            <div className="col-span-12 md:col-span-6">
              <div className="rounded-lg border-2 border-dotted border-gray-400 p-3 text-center">
                <label>
                  <div
                    // className="mt-12 text-center"
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={videoFileDrop}
                  >
                    <div className="">
                      {videoLoading && (
                        <div>
                          <img
                            className="mx-auto animate-ping"
                            style={{ height: '70px', width: '70px' }}
                            src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                            alt=""
                          />
                          <p className="text-xl text-gray-400">Loading ...</p>
                        </div>
                      )}
                      {!videoLoading && (
                        <div className="cursor-pointer">
                          <img
                            className="mx-auto animate-pulse"
                            style={{ height: '70px', width: '70px' }}
                            src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                            alt=""
                          />
                          <p className="text-xl text-gray-400">
                            Drag & Drop your video content
                          </p>
                        </div>
                      )}
                      <p className="py-4">
                        <span className="rounded-lg bg-gray-400 px-3 py-3 font-semibold  text-Docy-Dark dark:text-white">
                          <VideoCallIcon className="animate-bounce" /> Upload
                          Video
                        </span>
                      </p>
                    </div>
                  </div>
                  <input
                    className="hidden"
                    type="file"
                    name="video"
                    placeholder="upload"
                    onChange={uploadVideo}
                  />
                </label>
              </div>
              <FormHelperText sx={{ color: 'red' }}>
                Do you want to share a video documentation?(Not required*)
              </FormHelperText>
              <div>
                <div className="pt-4">
                  <div>
                    {video && (
                      <video
                        className="mx-auto"
                        style={{ maxWidth: '100%' }}
                        src={video}
                        controls
                      ></video>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Thumbnail Upload Handling  */}
            <div className="col-span-12 md:col-span-6">
              <div className="rounded-lg border-2 border-dotted border-gray-400 p-3 text-center">
                <label>
                  <div
                    // className="mt-12 text-center"
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={imageFileDrop}
                  >
                    <div className="">
                      {imageLoading && (
                        <div>
                          <img
                            className="mx-auto animate-ping"
                            style={{ height: '70px', width: '70px' }}
                            src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                            alt=""
                          />
                          <p className="text-xl text-gray-400">Loading ...</p>
                        </div>
                      )}
                      {!imageLoading && (
                        <div className="cursor-pointer">
                          <img
                            className="mx-auto animate-pulse"
                            style={{ height: '70px', width: '70px' }}
                            src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                            alt=""
                          />
                          <p className="text-xl text-gray-400">
                            Drag & Drop your thumbnail image
                          </p>
                        </div>
                      )}
                      <p className="py-4">
                        <span className="rounded-lg bg-gray-400 px-3 py-3 font-semibold  text-Docy-Dark dark:text-white">
                          <AddAPhotoIcon className="animate-bounce" /> Upload
                          Thumbnail
                        </span>
                      </p>
                    </div>
                  </div>
                  <input
                    className="hidden"
                    type="file"
                    name="thumbnail"
                    placeholder="upload"
                    onChange={uploadImage}
                  />
                </label>
              </div>
              <FormHelperText sx={{ color: 'red' }}>Required*</FormHelperText>
              <div>
                <div className="pt-4">
                  <div>
                    {image && (
                      <img
                        className="mx-auto"
                        style={{ maxWidth: '100%' }}
                        src={image}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default InfoInput
