import React from 'react'
import DashHome from '../../components/Dashboard/DashHome'
import Sidebar from '../../components/Dashboard/Sidebar'
import adminCheck from '../../HOC/withAdminCheck'

const dashboard = () => {
  return (
    <div>
      <div className="flex w-full bg-gray-200  dark:bg-gray-900 dark:text-white">
        <Sidebar />
        <div className="m-5 min-h-screen w-full bg-white p-5 transition-all dark:bg-gray-900 dark:text-white">
          <DashHome />
        </div>
      </div>
    </div>
  )
}

export default adminCheck(dashboard)
