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

  const videos = blogs?.filter((td) => td?.video !== '').slice(2, 5)
  console.log(videos)

  //here default video
  const [videoList, setVideoList] = useState(
    'https://res.cloudinary.com/dvszolotz/video/upload/v1647261249/%E0%A6%9A%E0%A7%80%E0%A6%A8%E0%A7%87_%E0%A6%86%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A6%93_%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A1_%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE_%E0%A6%B8%E0%A6%82%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%AE%E0%A6%A3_%E0%A7%A7_%E0%A6%95%E0%A7%8B%E0%A6%9F%E0%A6%BF_%E0%A7%AD%E0%A7%A6_%E0%A6%B2%E0%A6%BE%E0%A6%96_%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%81%E0%A6%B7_%E0%A6%98%E0%A6%B0%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF_-_China_Lockdown_fdlq15.mp4'
  )
  //  setVideoList(videos[0]?.video)

  const handleVideo = (e) => {
    setVideoList(e)
  }

  return (
    <div className="video-List ">
      <Container sx={{ py: 15 }}>
        <div className=" grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <video src={videoList} controls></video>
          </div>

          <div className="col-span-12 text-Docy-Dark dark:text-white md:col-span-5">
            <h2 className=" -mt-2 pb-2 font-medium ">Docky Video List</h2>
            <ul className="bg-slate-100   dark:bg-gray-900">
              {videos?.map((video) => (
                <>
                  <button
                    key={video?._id}
                    onClick={() => handleVideo(video?.video)}
                  >
                    <>
                      <li className="  mb-3 flex gap-4 p-4">
                        <div>
                          <video
                            className="h-full w-24 rounded"
                            src={video?.video}
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className=" pb-2  text-black dark:text-gray-300">
                            {video?.title?.split(' ').slice(0, 6).join(' ')}...
                          </h5>
                          <div className=" flex justify-between  text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <PersonIcon className=" text-sm" />
                              {video?.blogger?.displayName?.split(' ')[0]}
                            </div>
                            <div className="items flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              {video?.uploadDate}
                            </div>
                          </div>
                        </div>
                      </li>
                    </>
                  </button>
                </>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default VideoList
