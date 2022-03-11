/* eslint-disable @next/next/no-img-element */
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
// import { Card, CardHeader, Select } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { create } from 'domain'
import Repoteds from '../../components/Dashboards/Repoteds'
import RBlog from '../../components/Dashboards/RBlog'
// import Link from 'next/link'

export default function Index() {
  React.useEffect(() => {
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
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
    var ctx = document.getElementById('PieChart').getContext('2d')
    window.myLine = new Chart(ctx, config)
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

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2]

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
  }, [])
  return (
    <DashboardLayout>
      <div className="bg-slate-200 p-10">
        <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
          {/* <!-- Value card --> */}
          <div className="dark:bg-darker flex h-28 items-center justify-between rounded-md bg-white p-4">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500">
                Value
              </h6>
              <span className="text-xl font-semibold">$30,000</span>
              <span className="ml-2 inline-block rounded-md bg-green-100 px-2 py-px text-xs text-green-500">
                +4.4%
              </span>
            </div>
            <div>
              <span>
                <svg
                  className="dark:text-primary-dark h-12 w-12 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* <!-- Users card --> */}
          <div className="dark:bg-darker flex h-28 items-center justify-between rounded-md bg-white p-4">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500">
                Users
              </h6>
              <span className="text-xl font-semibold">50,021</span>
              <span className="ml-2 inline-block rounded-md bg-green-100 px-2 py-px text-xs text-green-500">
                +2.6%
              </span>
            </div>
            <div>
              <span>
                <svg
                  className="dark:text-primary-dark h-12 w-12 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* <!-- Orders card --> */}
          <div className="dark:bg-darker flex h-28 items-center justify-between rounded-md bg-white p-4">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500">
                Orders
              </h6>
              <span className="text-xl font-semibold">45,021</span>
              <span className="ml-2 inline-block rounded-md bg-green-100 px-2 py-px text-xs text-green-500">
                +3.1%
              </span>
            </div>
            <div>
              <span>
                <svg
                  className="dark:text-primary-dark h-12 w-12 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* <!-- Tickets card --> */}
          <div className="dark:bg-darker flex h-28 items-center justify-between rounded-md bg-white p-4">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500">
                Tickets
              </h6>
              <span className="text-xl font-semibold">20,516</span>
              <span className="ml-2 inline-block rounded-md bg-green-100 px-2 py-px text-xs text-green-500">
                +3.1%
              </span>
            </div>
            <div>
              <span>
                <svg
                  className="dark:text-primary-dark h-12 w-12 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 h-60 lg:col-span-8">
            <div className="w-full">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-gray-50 shadow-lg">
                <div className="mb-0 rounded-t bg-transparent px-4 py-3">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-1 flex-grow">
                      <h6 className="text-blueGray-100 mb-1 text-xs font-semibold uppercase">
                        Overview
                      </h6>
                      <h2 className="text-xl font-semibold text-white">
                        Sales value
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex-auto p-4">
                  <div className="relative h-96">
                    {/* <canvas id="line-chart"></canvas> */}
                    <canvas id="myChart" ref={canvasEl} height="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="relative mb-6 flex h-full w-full min-w-0 flex-col break-words rounded bg-gray-50 shadow-lg">
              <canvas id="PieChart"></canvas>
              <div></div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-5">
          <Repoteds />
          <RBlog />
        </div>
      </div>
    </DashboardLayout>
  )
}
