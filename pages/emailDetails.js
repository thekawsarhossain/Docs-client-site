/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../components/Dashboard/Sidebar'
import { BsFillReplyFill } from 'react-icons/bs'

const EmailDetails = () => {
  return (
    <>
      <div className="flex w-full bg-gray-200">
        <Sidebar />
        <div className="m-5 min-h-screen w-full bg-white p-5 text-gray-900 transition-all">
          <h3 className="py-4">
            Google Analytics is updating the Firebase Integration settings in
            all GA4 Properties.
          </h3>
          <div className="mb-4 flex justify-between">
            <div>
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src="https://i.ibb.co/LQ9CSxx/user.jpg"
                    className="h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-medium">
                    Google Analytics. analytics-noreply@google.com
                  </p>
                  <p>to me</p>
                </div>
              </div>
            </div>
            <div>
              <p>Mar 8, 2022, 11:11 PM (11 hours ago)</p>
            </div>
          </div>
          <div className="flex justify-center bg-gray-200 py-8">
            <p className="w-3/5 bg-white px-8 py-4">
              Hello Google Analytics user, We are writing to let you know that
              we will be updating the Firebase Integration settings in all
              Google Analytics 4 Properties soon to give you more flexible user
              management. This change will impact the permissions granted to
              users of your property.
            </p>
          </div>
          <div className="border px-6 py-3 rounded mt-4 border-gray-300">
            <p className="flex items-center gap-2">
            <BsFillReplyFill /> Reply 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailDetails
