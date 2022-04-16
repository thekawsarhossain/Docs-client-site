/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import Sidebar from '../../Dashboard/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { fetchEmails, ADD_TO_EMAIL } from '../../../Redux/Slices/emailSlice'
import DeleteIcon from '@mui/icons-material/Delete'

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
      <div className="flex w-full ">
        <div className=" w-full bg-slate-200 p-5 transition-all dark:bg-Docy-AlmostBlack">
          <div className="my-2  hidden w-full rounded bg-slate-500 p-2 text-white shadow hover:shadow-xl dark:bg-slate-800 lg:block">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-11">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 px-3 text-left lg:col-span-3 ">
                    <p>Name</p>
                  </div>
                  <div className="col-span-12 px-3 text-left lg:col-span-4 ">
                    <p>Subject</p>
                  </div>
                  <div className="col-span-12 px-3 text-left lg:col-span-4 ">
                    <p>Body</p>
                  </div>

                  <div className="col-span-12 flex justify-start px-3  lg:col-span-1 ">
                    <p>Time</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 flex justify-end px-3  lg:col-span-1 ">
                <p>Action</p>
              </div>
            </div>
          </div>
          {emails?.map((email) => (
            <div
              className="my-2  w-full rounded bg-white p-2 shadow hover:shadow-xl dark:bg-darkBlue dark:text-white"
              key={email?._id}
            >
              <button
                className="w-full"
                onClick={() => dispatch(ADD_TO_EMAIL(email))}
              >
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 lg:col-span-11">
                    <Link href={`/email/${email?._id}`}>
                      <a className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex px-3 text-left lg:col-span-3">
                          <p className="block pr-1 font-semibold lg:hidden">
                            Name:{' '}
                          </p>
                          <p>
                            {' '}
                            {email?.firstName} {email?.lastName}
                          </p>
                        </div>
                        <div className="col-span-12 flex px-3 text-left lg:col-span-4">
                          <p className="block pr-1 font-semibold lg:hidden">
                            Subject:{' '}
                          </p>
                          <p></p>
                          <p>
                            {/* {email?.subject} */}
                            {email?.subject?.length > 50
                              ? email?.subject?.slice(0, 50) + '...'
                              : email?.subject}
                          </p>
                        </div>
                        <div className="col-span-12 flex px-3 text-left lg:col-span-4">
                          <p className="block pr-1 font-semibold lg:hidden">
                            Body:{' '}
                          </p>
                          <p>{email?.message.slice(0, 50)}...</p>
                        </div>

                        <div className="col-span-12 flex px-3 lg:col-span-1  lg:justify-center ">
                          <p className="block pr-1 font-semibold lg:hidden">
                            Time:{' '}
                          </p>
                          <p>{email?.sentTime}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-span-12 flex justify-end px-3  lg:col-span-1 ">
                    <DeleteIcon />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Email
