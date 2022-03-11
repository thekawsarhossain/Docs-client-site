/* eslint-disable @next/next/no-img-element */
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
// import { Card, CardHeader, Select } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { create } from 'domain'
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
          <div className="col-span-12 lg:col-span-8 ">
            <div className="h-full w-full">
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
      </div>
      <div className="mt-10 grid grid-cols-12 gap-5">
        <div className="col-span-12 mt-6">
          <div className="intro-y block h-10 items-center sm:flex">
            <h2 className="mr-5 truncate text-lg font-medium">
              Weekly Top Products
            </h2>
            <div className="mt-3 flex items-center sm:ml-auto sm:mt-0">
              <button className="btn box flex items-center text-slate-600 dark:text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide mr-2 hidden h-4 w-4 sm:block"
                >
                  <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
                Export to Excel
              </button>
              <button className="btn box ml-3 flex items-center text-slate-600 dark:text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide mr-2 hidden h-4 w-4 sm:block"
                >
                  <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
                Export to PDF
              </button>
            </div>
          </div>
          <div className="intro-y mt-8 overflow-auto sm:mt-0 lg:overflow-visible">
            <table className="table-report table sm:mt-2">
              <thead>
                <tr>
                  <th className="whitespace-nowrap">IMAGES</th>

                  <th className="whitespace-nowrap">PRODUCT NAME</th>
                  <th className="whitespace-nowrap text-center">STOCK</th>
                  <th className="whitespace-nowrap text-center">STATUS</th>
                  <th className="whitespace-nowrap text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="intro-x">
                  <td className="w-40">
                    <div className="relative flex">
                      <div className="image-fit zoom-in h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="http://rubick-vue.left4code.com/assets/preview-10.eb96f2a4.jpg"
                        />
                      </div>
                      <div className="image-fit zoom-in -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="http://rubick-vue.left4code.com/assets/preview-4.b172fabc.jpg"
                        />
                      </div>
                      <div className="image-fit zoom-in -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="http://rubick-vue.left4code.com/assets/preview-5.a579d9bf.jpg"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="" className="whitespace-nowrap font-medium">
                      Apple MacBook Pro 13
                    </a>
                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                      PC &amp; Laptop
                    </div>
                  </td>
                  <td className="text-center">50</td>
                  <td className="w-40">
                    <div className="text-danger flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Inactive
                    </div>
                  </td>
                  <td className="table-report__action w-56">
                    <div className="flex items-center justify-center">
                      <a className="mr-3 flex items-center" href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center" href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="intro-x">
                  <td className="w-40">
                    <div className="flex">
                      <div className="image-fit zoom-in h-10 w-10">
                        <img
                          className="rounded-full"
                          src="https://picsum.photos/500/300"
                          alt="Rubick Tailwind HTML Admin Template"
                        />
                      </div>
                      <div className="image-fit zoom-in -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="https://picsum.photos/500/300"
                        />
                      </div>
                      <div className="image-fit zoom-in -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-10.eb96f2a4.jpg"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="" className="whitespace-nowrap font-medium">
                      Dell XPS 13
                    </a>
                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                      PC &amp; Laptop
                    </div>
                  </td>
                  <td className="text-center">114</td>
                  <td className="w-40">
                    <div className="text-danger flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Inactive
                    </div>
                  </td>
                  <td className="table-report__action w-56">
                    <div className="flex items-center justify-center">
                      <a className="mr-3 flex items-center" href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center" href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="intro-x">
                  <td className="w-40">
                    <div className="flex">
                      <div className="image-fit zoom-in h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-1.2cae9cad.jpg"
                        />
                      </div>
                      <div className="image-fit zoom-in -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-2.a983be43.jpg"
                        />
                      </div>
                      <div className="image-fit zoom-in -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-1.2cae9cad.jpg"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="" className="whitespace-nowrap font-medium">
                      Nike Air Max 270
                    </a>
                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                      Sport &amp; Outdoor
                    </div>
                  </td>
                  <td className="text-center">50</td>
                  <td className="w-40">
                    <div className="text-danger flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>{' '}
                      Inactive
                    </div>
                  </td>
                  <td className="table-report__action w-56">
                    <div className="flex items-center justify-center">
                      <a className="mr-3 flex items-center" href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>{' '}
                        Edit{' '}
                      </a>
                      <a className="text-danger flex items-center" href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="intro-x">
                  <td className="w-40">
                    <div className="flex">
                      <div className="image-fit zoom-in h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-14.d5228d4d.jpg"
                        />
                      </div>
                      <div className="image-fit zoom-in -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-1.2cae9cad.jpg"
                        />
                      </div>
                      <div className="image-fit zoom-in -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-6.e998bc28.jpg"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="" className="whitespace-nowrap font-medium">
                      Samsung Q90 QLED TV
                    </a>
                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                      Electronic
                    </div>
                  </td>
                  <td className="text-center">50</td>
                  <td className="w-40">
                    <div className="text-success flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Active
                    </div>
                  </td>
                  <td className="table-report__action w-56">
                    <div className="flex items-center justify-center">
                      <a className="mr-3 flex items-center" href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center" href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="intro-y mt-3 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
            <nav className="w-full sm:mr-auto sm:w-auto">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide h-4 w-4"
                    >
                      <polyline points="11 17 6 12 11 7"></polyline>
                      <polyline points="18 17 13 12 18 7"></polyline>
                    </svg>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide h-4 w-4"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide h-4 w-4"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide h-4 w-4"
                    >
                      <polyline points="13 17 18 12 13 7"></polyline>
                      <polyline points="6 17 11 12 6 7"></polyline>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
            <select className="form-select box mt-3 w-20 sm:mt-0">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </select>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </DashboardLayout>
  )
}
