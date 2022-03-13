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
  const videos = blogs.filter((td) => td?.video !== '').slice(0, 4)

  //tabs
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className="video-List">
      <Container>
        <div className="videoList-container grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-7">
            <video
              src="https://res.cloudinary.com/dvszolotz/video/upload/v1646571212/1.1_Priori_Analysis_and_Posteriori_Testing_ypilzh.mp4"
              controls
            ></video>
             {/* <div
                  className={
                    toggleState === 1 ? 'content  active-content' : 'content'
                  }
                >
                  <video
              src="https://res.cloudinary.com/dvszolotz/video/upload/v1646571212/1.1_Priori_Analysis_and_Posteriori_Testing_ypilzh.mp4"
              controls
            ></video>
                </div> */}
             {/* <div
                  className={
                    toggleState === 2 ? 'content  active-content' : 'content'
                  }
                >
                  <>videos 2</>
                </div> */}
          </div>
          <div className="col-span-12 text-Docy-Dark dark:text-white md:col-span-5">
            <h2 className="pb-7 font-bold">Docky Video List</h2>
            <ul className="">
              {videos.map((video) => (
                <a key={video._id} href="#">
                  <li className=" bg-gray-900 p-4 mb-3 flex gap-3">
                    <div>
                      <img
                        className="h-full w-14 rounded"
                        src={video.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="pb-2 text-gray-300">
                        {video.title.split(' ').slice(0, 5).join(' ')}...
                      </h5>
                      <div className="flex gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <PersonIcon className=" text-sm" />
                          {video.blogger.displayName.split(' ')[0]}
                        </div>
                        <div className="flex items gap-2">
                          <DateRangeIcon className="text-sm" />
                          {video.uploadDate}
                        </div>
                      </div>
                    </div>
                  </li>
                </a>
              ))}

           {/* <button
                className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'  }
                onClick={() => toggleTab(1)} >
                <span className="float-left pl-3">License</span>
                <span className="float-right pr-3">{'>'}</span>
          </button> */}
          


            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default VideoList
