/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import DateRangeIcon from '@mui/icons-material/DateRange'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const VideoList = () => {
  // react redux hook here
  const dispatch = useDispatch()

  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router?.query?.id

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)

  // getting the match blog with id
  const blog = useSelector((state) => state?.reducers?.blogs?.blog)

  // calling specfic blog depend on id here using redux
  // useEffect(() => {
  //   if (blog === null || '') {
  //     fetch(`http://localhost:5000/blog/${id}`)
  //       .then((res) => res.json())
  //       .then((result) => console.log(result))
  //   }
  // }, [blog, id])

  //blogs with video
  // const videos = blogs?.filter((td) => td?.video !== '').slice(2, 5)
  const videos = blogs?.filter((td) => td?.video !== '')
  const video = blogs?.find((td) => td?.video !== '')
  console.log(video?.video)

  const allVideos = videos?.slice(2, 5)

  //here default video
  const [videoList, setVideoList] = useState(video?.video)
  console.log(videoList)
  // if (allVideos[0]) {
  //   setVideoList(allVideos[0]?.video)
  //   console.log(allVideos)
  // }
  //  setVideoList(videos[0]?.video)

  const handleVideo = (e) => {
    setVideoList(e)
  }

  return (
    <div className="bg-slate-100  dark:bg-Docy-DarkGray">
      <Container sx={{ py: 15 }}>
        <div className=" grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            {!videoList && video && setVideoList(video?.video)}
            {videoList && <video src={videoList} controls></video>}
          </div>

          <div className="col-span-12 text-Docy-Dark dark:text-white md:col-span-5">
            <h2 className=" -mt-2 pb-2 font-medium ">Docky Video List</h2>
            <ul
              style={{ height: '330px' }}
              className="overflow-y-auto bg-slate-300  dark:bg-gray-900"
            >
              {videos?.map((video) => (
                <div
                  key={video?._id}
                  className="m-2 rounded bg-slate-100 dark:bg-Docy-Dark"
                >
                  {/* <button
                    className="m-0 h-full p-0"
                  
                  > */}
                  <div
                    onClick={() => handleVideo(video?.video)}
                    className="flex rounded bg-slate-100 dark:bg-Docy-Dark"
                  >
                    <img
                      className="h-28 w-28 rounded object-cover"
                      src={video?.image}
                      alt=""
                    />
                    <button className="w-full">
                      <div className="px-2 text-left ">
                        <p className="cursor-pointer font-medium hover:underline">
                          {/* {otherPost?.title} */}
                          {video?.title?.length > 40
                            ? video?.title?.slice(0, 40) + '...'
                            : video?.title}
                        </p>
                        <div className=" flex justify-between  text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <PersonIcon className=" text-sm" />
                            {video?.blogger?.displayName?.split(' ')[0]}
                          </div>
                          <div className="items flex gap-1">
                            <DateRangeIcon className="text-sm" />
                            {video?.uploadDate}
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  {/* </button> */}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default VideoList
