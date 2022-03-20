import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
// import { Card, CardHeader, Select } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import RUser from '../../components/DashboardLayout/RUser/RUser'
import RBlog from '../../components/DashboardLayout/RBlog/RBlog'
import Review from '../../components/DashboardLayout/Review/Review'
import { useDispatch, useSelector } from 'react-redux'
import Charts from '../../components/Chart/Chart'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import BookIcon from '@mui/icons-material/Book'
import QuizIcon from '@mui/icons-material/Quiz'
import GroupIcon from '@mui/icons-material/Group'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from 'recharts'
import { fetchUsers } from '../../Redux/Slices/userSlice'
// import Review from '../../components/DashboardLayout/Review/Review'

export default function Index() {
  // here get all information
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  const questions = useSelector(
    (state) => state?.reducers?.questions?.questions
  )

  const videos = blogs?.filter((td) => td?.video !== '')

  // react redux hook here
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data here
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const users = useSelector((state) => state?.reducers?.user?.users)
  console.log(users)

  // here users information
  const [manageUsers, setManageUsers] = useState([])
  useEffect(() => {
    fetch(`https://polar-hamlet-38117.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setManageUsers(data))
  }, [])
  const Data = [
    {
      State: '',
      Number: 0,
    },
    {
      State: 'Users',
      Number: users?.length,
    },
    {
      State: 'Videos',
      Number: videos?.length,
    },
    {
      State: 'Blogs',
      Number: blogs?.length,
    },
    {
      State: 'Questions',
      Number: questions?.length,
    },
    {
      State: '',
      Number: 0,
    },
  ]
  return (
    <DashboardLayout>
      <div>
        <div className="bg-slate-200 p-4 dark:bg-Docy-DarkGray">
          <div className="grid grid-cols-1 gap-8 p-4  lg:grid-cols-2 xl:grid-cols-4">
            {/* <!-- Users card --> */}
            <div className=" flex h-28 items-center justify-between rounded-md bg-white p-4 dark:bg-darkBlue ">
              <div>
                <h6 className="dark:text-primary-light mb-2 text-xs font-medium uppercase leading-none tracking-wider text-gray-500 dark:text-white">
                  Users
                </h6>
                <span className="rounded-md bg-green-100 px-2 py-px text-xl  font-semibold  text-green-500">
                  {users?.length}
                </span>
              </div>
              <div>
                <span>
                  <GroupIcon sx={{ color: '#D1D5DB', fontSize: '45px' }} />
                </span>
              </div>
            </div>

            {/* <!-- blogs card --> */}
            <div className=" flex h-28 items-center justify-between rounded-md bg-white  p-4 dark:bg-darkBlue">
              <div>
                <h6 className="dark:text-primary-light mb-2 text-xs font-medium uppercase leading-none tracking-wider text-gray-500 dark:text-white">
                  Blogs
                </h6>
                <span className="rounded-md bg-green-100 px-2 py-px text-xl  font-semibold  text-green-500">
                  {blogs?.length}
                </span>
              </div>
              <div>
                <span>
                  <BookIcon sx={{ color: '#D1D5DB', fontSize: '45px' }} />
                </span>
              </div>
            </div>

            {/* <!-- video card --> */}
            <div className="flex h-28 items-center justify-between rounded-md bg-white p-4  dark:bg-darkBlue">
              <div>
                <h6 className="dark:text-primary-light mb-2 text-xs font-medium uppercase leading-none tracking-wider text-gray-500 dark:text-white">
                  Total upload Videos
                </h6>
                <span className="rounded-md bg-green-100 px-2 py-px text-xl  font-semibold  text-green-500">
                  {videos?.length}
                </span>
              </div>
              <div>
                <span>
                  <VideoLibraryIcon
                    sx={{ color: '#D1D5DB', fontSize: '45px' }}
                  />
                </span>
              </div>
            </div>

            {/* <!-- QU card --> */}
            <div className="flex h-28 items-center justify-between rounded-md bg-white p-4 dark:bg-darkBlue">
              <div>
                <h6 className="dark:text-primary-light mb-2 text-xs font-medium uppercase leading-none tracking-wider text-gray-500 dark:text-white">
                  questions ?
                </h6>
                <span className="rounded-md bg-green-100 px-2 py-px text-xl  font-semibold  text-green-500">
                  {questions?.length}
                </span>
              </div>
              <div>
                <span>
                  <QuizIcon sx={{ color: '#D1D5DB', fontSize: '45px' }} />
                </span>
              </div>
            </div>
          </div>

          <div className="">
            {/* <RBlog /> */}
            {/* <RUser /> */}
            {/* <Review /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 bg-slate-200 dark:bg-Docy-DarkGray">
          <ResponsiveContainer width="100%" height="100%" aspect={3}>
            <AreaChart
              // width={500}
              // height={800}
              data={Data}
              margin={{
                top: 5,
                right: 30,
                // left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="State" interval={'preserveStartEnd'} />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Area
                type="monotone"
                dataKey="Number"
                stroke="#00f7ff"
                activeDot={{ r: 8 }}
                fill="#5cffe7"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  )
}
