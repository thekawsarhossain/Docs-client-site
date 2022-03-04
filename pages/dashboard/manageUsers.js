import React from 'react'
import ManageUsers from '../../components/Dashboard/ManageUsers'
import Sidebar from '../../components/Dashboard/Sidebar'

const manageUsers = () => {
  return (
    <div>
      <div className="flex w-full  bg-gray-200 dark:bg-gray-900 dark:text-white">
        <Sidebar />
        <div className="m-5 min-h-screen w-full bg-slate-100 dark:bg-gray-800 p-5 transition-all">
          <ManageUsers />
        </div>
      </div>
    </div>
  )
}

export default manageUsers
