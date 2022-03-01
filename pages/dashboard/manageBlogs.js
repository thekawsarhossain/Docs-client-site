import React from 'react'
import ManageBlogs from '../../components/Dashboard/ManageBlogs'
import Sidebar from '../../components/Dashboard/Sidebar'

const manageBlogs = () => {
  return (
    <div>
      <div className="flex w-full bg-gray-200">
        <Sidebar />
        <div className="m-5 min-h-screen w-full bg-white p-5 transition-all">
          <ManageBlogs />
        </div>
      </div>
    </div>
  )
}

export default manageBlogs
