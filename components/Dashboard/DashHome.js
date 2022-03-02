/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FiUsers, FiMessageCircle, FiEdit } from 'react-icons/fi'
import DashboardChart from './DashboardChart'
import ReportedBlogs from './ReportedBlogs'
import ReportedUsers from './ReportedUsers'

const DashHome = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex items-center justify-between rounded bg-teal-700 px-8 py-4 text-white md:col-span-6 lg:col-span-4">
          <div className="flex items-center gap-4">
            <div>
              <FiEdit className="text-2xl" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Total Blogs</h4>
              <h5 className="text-2xl font-bold">122</h5>
            </div>
          </div>
          <div>
            <FiEdit className="text-8xl text-gray-400" />
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-between rounded bg-teal-800 px-8 py-4 text-white md:col-span-6 lg:col-span-4">
          <div className="flex items-center gap-4">
            <div>
              <FiUsers className="text-2xl" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Total Users</h4>
              <h5 className="text-2xl font-bold">55</h5>
            </div>
          </div>
          <div>
            <FiUsers className="text-8xl text-gray-400" />
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-between rounded bg-teal-900 px-8 py-4 text-white md:col-span-6 lg:col-span-4">
          <div className="flex items-center gap-4">
            <div>
              <FiMessageCircle className="text-2xl" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Messages</h4>
              <h5 className="text-2xl font-bold">86</h5>
            </div>
          </div>
          <div>
            <FiMessageCircle className="text-8xl text-gray-400" />
          </div>
        </div>
      </div>
      <div style={{ height: '500px' }}>
        <DashboardChart />
      </div>
      <ReportedBlogs />
      <ReportedUsers />
    </div>
  )
}

export default DashHome
