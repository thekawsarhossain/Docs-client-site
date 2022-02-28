import React from 'react'
import DashHome from '../../components/Dashboard/DashHome'
import Sidebar from '../../components/Dashboard/Sidebar'

const dashboard = () => {
  return (
    <div>
      <div className="flex w-full items-stretch bg-gray-200">
        <Sidebar />
        <div className="manageCourses__items section-padding page-content__body m-5 min-h-screen w-full bg-white p-5 transition-all">
          <DashHome />
        </div>
      </div>
    </div>
  )
}

export default dashboard
