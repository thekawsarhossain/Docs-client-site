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
import { fetchBlog } from '../../../Redux/Slices/blogSlice'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const VideoList = () => {
  // react redux hook here
  const dispatch = useDispatch()

  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router.query.id

  // calling specfic blog depend on id here using redux
  useEffect(() => {
    dispatch(fetchBlog(id))
  }, [dispatch, id])

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)

  // getting the match blog with id
  const blog = useSelector((state) => state?.reducers?.blogs?.blog)

  //blogs with video
const videos = blogs?.filter((td) => td?.video !== '').slice(2, 5)
console.log(videos[0]?.video);
 const [videoList,setVideoList]=useState(videos[0]?.video)
 const handleVideo=(e)=>{
  setVideoList(e)

 }

  return (
    <div className="video-List ">
      <Container sx={{py:15}}>
        <div className=" grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <video
              src={videoList}
              controls >
            </video>
          </div>

          <div className="col-span-12 text-Docy-Dark dark:text-white md:col-span-5">
      <h2 className=" font-medium -mt-2 pb-2 ">Docky Video List</h2>
            <ul className="bg-slate-100   dark:bg-gray-900">
              {videos?.map((video) => (
                <>
                <button key={video?._id} onClick={()=>handleVideo(video?.video)}>
                <>
                  <li className="  p-4 mb-3 flex gap-4">
                    <div>
                      <video
                        className="h-full w-24 rounded"
                        src={video?.video}
                        alt=""
                      />
                    </div>
                    <div >
                      <h5 className=" pb-2  text-black dark:text-gray-300">
                        {video?.title?.split(' ').slice(0, 6).join(' ')}...
                      </h5>
                      <div className=" flex justify-between  text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <PersonIcon className=" text-sm" />
                          {video?.blogger?.displayName?.split(' ')[0]}
                        </div>
                        <div className="flex items gap-2">
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
