import React from 'react'
import ManageUsers from '../../components/Dashboard/ManageUsers'
import Sidebar from '../../components/Dashboard/Sidebar'

const manageUsers = () => {
  return (
    <div>
      <div className="flex w-full  bg-gray-200">
        <Sidebar />
        <div className="m-5 min-h-screen w-full bg-white p-5 transition-all">
          <ManageUsers />
        </div>
      </div>
    </div>
  )
}

export default manageUsers
