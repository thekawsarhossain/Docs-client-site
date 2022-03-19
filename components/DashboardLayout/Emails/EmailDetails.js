/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux'
import { BsFillReplyFill } from 'react-icons/bs'
import Sidebar from '../../Dashboard/Sidebar'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import DashboardLayout from '../DashboardLayout'

const EmailDetails = () => {
  // getting data from redux
  const email = useSelector((state) => state?.reducers?.emails?.email)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'programing_folks',
        'template_m98rgvv',
        form.current,
        'whXNKK0oiX4VNNk-i'
      )
      .then(
        (result) => {
          console.log(result.text)
          window.alert('Your reply has been sent.')
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
     <DashboardLayout>
     <div className="flex w-full ">
        
        <div className="m-5 min-h-screen w-full shadow-lg   bg-white dark:bg-darkBlue p-5 text-gray-900 dark:text-white transition-all">
          
          <div className="mb-4 flex justify-between">
            <div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-medium">
                    Sender:{' '}
                    <span className="font-bold">
                      {' '}
                      {email?.firstName} {email?.lastName}
                    </span>
                  </p>
                  <p>
                    {' '}
                    Email: <span className="font-bold"> {email?.email}</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">{email?.sentTime}</p>
              <p className="font-bold">{email?.sentDate}</p>
            </div>
          </div>
          <div className="flex justify-center   bg-gray-200 dark:bg-gray-700 py-8">
            <div className=" w-3/5 ">
              <p className=" mb-3 rounded bg-white dark:bg-slate-600 px-8 py-4">
                <span className="font-bold">Subject:</span> {email?.subject}
              </p>
              <p className="   rounded bg-white dark:bg-slate-600 px-8 py-4">
                <span className="font-bold">Message:</span> {email?.message}
              </p>
            </div>
          </div>
          <form className="mt-5 mx-auto " ref={form} onSubmit={sendEmail}>
            <h3>
              Give a Reply to{' '}
              <span className="font-bold">
                {' '}
                {email?.firstName} {email?.lastName}
              </span>{' '}
            </h3>
            <input
              className="hidden"
              type="text"
              name="name"
              placeholder="your name"
              defaultValue={email.firstName}
            />
            <input
              className="hidden"
              type="text"
              name="email"
              placeholder="your email"
              defaultValue={email.email}
            />
            <textarea
              rows="5"
              cols="5"
              type="text"
              placeholder="Type your reply message here"
              name="message"
              className="mt-4 w-2/4 bg-slate-100 dark:bg-slate-700  rounded border border-gray-300 px-6 py-3"
            ></textarea>

            <button
              type="submit"
              className="mt-4 flex items-center gap-2 rounded dark:text-white text-gray-900  bg-slate-300 dark:bg-slate-600 px-6 py-3 hover:bg-slate-400"
            >
              <BsFillReplyFill /> Reply
            </button>
          </form>
        </div>
      </div>
     </DashboardLayout>
    </>
  )
}

export default EmailDetails
