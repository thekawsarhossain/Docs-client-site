/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { BiHome, BiImageAdd, BiLogOutCircle } from 'react-icons/bi'
import { BsFillInboxesFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiViewList } from 'react-icons/hi'
import { Navigation } from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

const Sidebar = () => {
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <>
      <React.Fragment>
        <div
          onClick={() => setIsSidebarOpen(false)}
          className={`fixed inset-0 z-20 block bg-black opacity-50 transition-opacity lg:hidden ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
        />
        <div className="absolute inline-block">
          <button
            className="btn-menu mt-6 ml-6 lg:hidden lg:h-0 lg:w-0"
            onClick={() => setIsSidebarOpen(true)}
            type="button"
          >
            <GiHamburgerMenu name="burger" className="h-8 w-8" />
          </button>
        </div>

        <div
          className={`fixed inset-y-0 left-0 z-30 w-80 translate-x-0 transform overflow-y-auto border-r-2 bg-white transition duration-300 ease-out lg:static lg:inset-0 lg:translate-x-0 ${
            isSidebarOpen
              ? 'translate-x-0 ease-out'
              : '-translate-x-full ease-in'
          }`}
        >
          <div className="flex items-center justify-center px-3 py-6 text-center">
            <Link href="/">
              <a>
                <h2 className="font-bold">Docy</h2>
              </a>
            </Link>
          </div>
          <div className="text-center mb-4">
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/CtZhP4P/admin-logo.jpg"
                className="h-20 w-20 mb-3 rounded-full bg-gray-400 p-2"
                alt="Admin logo"
              />
            </div>
            <h3 className="text-lg font-bold">Admin</h3>
            <p>admin@gmail.com</p>
          </div>
          <Navigation
            activeItemId={router.pathname}
            onSelect={({ itemId }) => {
              router.push({ pathname: itemId })
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                elemBefore: () => <BsFillInboxesFill />,
              },
              {
                title: 'Manage Users',
                itemId: '/dashboard/manageUsers',
                elemBefore: () => <HiViewList />,
              },
              {
                title: 'Manage Blogs',
                itemId: '/dashboard/manageBlogs',
                elemBefore: () => <FaEdit />,
              },
              {
                title: 'Add new admin',
                itemId: '/dashboard/addAdmin',
                elemBefore: () => <BiImageAdd />,
              },
            ]}
          />

          <div className="logout__wrapper mt-20 justify-center border-t-2 pt-20">
            <Link href="/">
              <button className="mx-auto mb-4 flex rounded bg-blue-500 px-8 py-2 text-white hover:bg-gray-700">
                <BiHome
                  className="mr-2 h-5 w-5 text-white"
                  aria-hidden="true"
                />
                Home
              </button>
            </Link>

            <button className="mx-auto flex rounded bg-red-700 px-8 py-2 text-white hover:bg-gray-700">
              <BiLogOutCircle
                className="mr-2 h-5 w-5  text-white "
                aria-hidden="true"
              />
              Log out
            </button>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}

export default Sidebar
