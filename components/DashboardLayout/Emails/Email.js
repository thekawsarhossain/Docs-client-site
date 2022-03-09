/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import Sidebar from '../../Dashboard/Sidebar'
import Link from 'next/link'

const Email = () => {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    fetch('https://polar-hamlet-38117.herokuapp.com/emails')
      .then((res) => res.json())
      .then((data) => setEmails(data))
  }, [])
  return (
    <div>
      <div className="flex w-full bg-gray-200">
        <Sidebar />
        <div className="m-5 min-h-screen w-full bg-white p-5 transition-all">
      
       {
           emails.map(email => (
           <Link key={email?._id} href={`/email/${email?._id}`}>
             <a>
             <div  className="grid grid-cols-12 gap-4 bg-gray-100 my-2 shadow hover:shadow-xl p-2">
              <div  className="col-span-12 md:col-span-3 ">
                <p>{email?.firstName} { email?.lastName}</p>
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
           ))
       }
         
          </div>
      </div>
    </div>
  )
}

export default Email
