import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
// import { Card, CardHeader, Select } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import RUser from '../../components/DashboardLayout/RUser/RUser'
import RBlog from '../../components/DashboardLayout/RBlog/RBlog'
import Review from '../../components/DashboardLayout/Review/Review'
import { useSelector } from 'react-redux'
import Charts from '../../components/Chart/Chart'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BookIcon from '@mui/icons-material/Book';
import QuizIcon from '@mui/icons-material/Quiz';
import GroupIcon from '@mui/icons-material/Group';
// import Review from '../../components/DashboardLayout/Review/Review'

export default function Index() {
  React.useEffect(() => {
    const data = {
      labels: ['Mobile', 'Windows', 'Mac'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [200, 150, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    }
    const config = {
      type: 'pie',
      data: data,
    }
    // var ctx = document.getElementById('PieChart').getContext('2d')
    // window.myLine = new Chart(ctx, config)
  }, [])

  const canvasEl = useRef(null)

  const colors = {
    purple: {
      default: 'rgba(149, 76, 233, 1)',
      half: 'rgba(149, 76, 233, 0.5)',
      quarter: 'rgba(149, 76, 233, 0.25)',
      zero: 'rgba(149, 76, 233, 0)',
    },
    indigo: {
      default: 'rgba(80, 102, 120, 1)',
      quarter: 'rgba(80, 102, 120, 0.25)',
    },
  }

  useEffect(() => {
    // const ctx = canvasEl.current.getContext('2d')
    const ctx = document.getElementById('myChart').getContext('2d')

    const gradient = ctx.createLinearGradient(0, 16, 0, 600)
    gradient.addColorStop(0, colors.purple.half)
    gradient.addColorStop(0.65, colors.purple.quarter)
    gradient.addColorStop(1, colors.purple.zero)

    const weight = [75.0, 65.2, 70.1, 88.4, 90.9, 70.2, 79.8, 88.6, 60.6, 75.2]

    const labels = [
      'Week 1',
      'Week 2',
      'Week 3',
      'Week 4',
      'Week 5',
      'Week 6',
      'Week 7',
      'Week 8',
      'Week 9',
      'Week 10',
    ]
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: 'My First Dataset',
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
      ],
    }
    const config = {
      type: 'line',
      data: data,
    }
    const myLineChart = new Chart(ctx, config)

    return function cleanup() {
      myLineChart.destroy()
    }
  })
  // here get all information
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  const questions = useSelector((state) => state?.reducers?.questions?.questions)


  const videos = blogs?.filter((td) => td?.video !== '')


  // here users information
  const [manageUsers, setManageUsers] = useState([])
  useEffect(() => {
    fetch(`https://polar-hamlet-38117.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setManageUsers(data))
  },[])
  return (
    <DashboardLayout>
      <div className="bg-slate-200 dark:bg-Docy-DarkGray p-10">
        <div className="grid grid-cols-1 gap-8 p-4  lg:grid-cols-2 xl:grid-cols-4">
        

          {/* <!-- Users card --> */}
          <div className=" flex h-28 items-center justify-between rounded-md bg-white dark:bg-darkBlue p-4 ">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500 dark:text-white mb-2">
                Users
              </h6>
              <span className="text-xl font-semibold rounded-md bg-green-100 px-2  py-px  text-green-500">
               {manageUsers.length}
              </span>
            
            </div>
            <div>
              <span>
                <GroupIcon sx={{color:"#D1D5DB",fontSize:"45px"}}/>
              </span>
            </div>
          </div>

          {/* <!-- blogs card --> */}
          <div className=" flex h-28 items-center justify-between rounded-md bg-white  dark:bg-darkBlue p-4">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500 dark:text-white mb-2">
                Blogs
              </h6>
              <span className="text-xl font-semibold rounded-md bg-green-100 px-2  py-px  text-green-500">{blogs?.length}</span>
            </div>
            <div>
              <span>
               <BookIcon sx={{color:"#D1D5DB",fontSize:"45px"}} />
              </span>
            </div>
          </div>

            {/* <!-- video card --> */}
          <div className="dark:bg-darkBlue flex h-28 items-center justify-between rounded-md bg-white  p-4">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider dark:text-white text-gray-500 mb-2">
              Total upload  Videos
              </h6>
              <span className="text-xl font-semibold rounded-md bg-green-100 px-2  py-px  text-green-500">{videos?.length}</span>
             
            </div>
            <div>
              <span>
                <VideoLibraryIcon sx={{color:"#D1D5DB",fontSize:"45px"}}/>
              </span>
            </div>
          </div>

          {/* <!-- QU card --> */}
          <div className="dark:bg-darkBlue flex h-28 items-center justify-between rounded-md bg-white p-4">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500 dark:text-white mb-2">
              questions ?
              </h6>
              <span className="text-xl font-semibold rounded-md bg-green-100 px-2  py-px  text-green-500">{questions?.length}</span>
             
            </div>
            <div>
              <span>
                <QuizIcon sx={{color:"#D1D5DB",fontSize:"45px"}}/>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <div className="h-full w-full">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-gray-50 shadow-lg dark:bg-darkBlue">
                <div className="mb-0 rounded-t bg-transparent px-4 py-3">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-1 flex-grow">
                      <h6 className="dark:text-white text-black mb-1 text-xs font-semibold uppercase">
                        Overview
                      </h6>
                      <h2 className="text-xl font-semibold dark:text-white text-black">
                        Sales value
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex-auto p-4">
                  <div className="relative h-96 ">
               
                    <canvas id="myChart" ref={canvasEl} height="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-span-4">
            <div className="relative mb-6 flex h-full w-full min-w-0 flex-col break-words rounded bg-gray-50 dark:bg-darkBlue  shadow-lg">
              <canvas id="PieChart"></canvas>
              <div></div>
            </div>
          </div>
        </div>


        <div className="">
          <RBlog />
          {/* <RUser /> */}
          {/* <Review /> */}
        </div>
      </div>
    </DashboardLayout>
  )
}
