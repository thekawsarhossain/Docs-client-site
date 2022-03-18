/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import Sidebar from '../../Dashboard/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { fetchEmails, ADD_TO_EMAIL } from '../../../Redux/Slices/emailSlice'

const Email = () => {
  // redux hook
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEmails())
  }, [dispatch])
  // here get all emails
  const emails = useSelector((state) => state?.reducers?.emails?.emails)

  return (
    <div>
      <div className="flex w-full  bg-gray-200 dark:bg-Docy-AlmostBlack">
        <div className="m-5 min-h-screen w-full  bg-white p-5 transition-all dark:bg-Docy-AlmostBlack">
          {emails?.map((email) => (
            <button
              className="my-2  w-full  rounded bg-gray-100 p-2 shadow hover:shadow-xl dark:bg-Docy-Dark dark:text-white"
              onClick={() => dispatch(ADD_TO_EMAIL(email))}
              key={email?._id}
            >
              <Link href={`/email/${email?._id}`}>
                <a className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 px-3 text-left md:col-span-3 ">
                    <p>
                      {email?.firstName} {email?.lastName}
                    </p>
                  </div>
                  <div className="col-span-12 px-3 text-left md:col-span-4 ">
                    <p>{email?.subject}</p>
                  </div>
                  <div className="col-span-12 px-3 text-left md:col-span-4 ">
                    <p>{email?.message.slice(0, 50)}...</p>
                  </div>

                  <div className="col-span-12 flex justify-end px-3  md:col-span-1 ">
                    <p>{email?.sentTime}</p>
                  </div>
                </a>
              </Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Email
