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

  const emails = useSelector((state) => state?.reducers?.emails?.emails)

  return (
    <div>
      <div className="flex w-full bg-gray-200">
        <Sidebar />
        <div className="m-5 min-h-screen w-full bg-white p-5 transition-all">
          {emails?.map((email) => (
            <button
              onClick={() => dispatch(ADD_TO_EMAIL(email))}
              key={email?._id}
            >
              <Link href={`/email/${email?._id}`}>
                <a>
                  <div className="my-2 grid grid-cols-12 gap-4 bg-gray-100 p-2 shadow hover:shadow-xl">
                    <div className="col-span-12 md:col-span-3 ">
                      <p>
                        {email?.firstName} {email?.lastName}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-4 ">
                      <p>{email?.subject}</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 ">
                      <p>{email?.message.slice(0, 50)}</p>
                    </div>

                    <div className="col-span-12 flex justify-end md:col-span-1">
                      <p>{email?.sentTime}</p>
                    </div>
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
