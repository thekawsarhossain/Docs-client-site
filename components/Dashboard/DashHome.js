/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FiUsers, FiMessageCircle, FiEdit } from 'react-icons/fi'
import PersonIcon from '@mui/icons-material/Person'
import DateRangeIcon from '@mui/icons-material/DateRange'
import Link from 'next/link'

const DashHome = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex items-center justify-between rounded bg-teal-700 px-8 py-4 text-white md:col-span-6 lg:col-span-4">
          <div className="flex items-center gap-4">
            <div>
              {' '}
              <FiEdit className="text-2xl" />{' '}
            </div>
            <div>
              <h4 className="text-lg font-medium">Total Blogs</h4>
              <h5 className="text-2xl font-bold">122</h5>
            </div>
          </div>
          <div>
            <FiEdit className="text-8xl text-gray-400" />
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-between rounded bg-teal-800 px-8 py-4 text-white md:col-span-6 lg:col-span-4">
          <div className="flex items-center gap-4">
            <div>
              {' '}
              <FiUsers className="text-2xl" />{' '}
            </div>
            <div>
              <h4 className="text-lg font-medium">Total Users</h4>
              <h5 className="text-2xl font-bold">55</h5>
            </div>
          </div>
          <div>
            <FiUsers className="text-8xl text-gray-400" />
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-between rounded bg-teal-900 px-8 py-4 text-white md:col-span-6 lg:col-span-4">
          <div className="flex items-center gap-4">
            <div>
              {' '}
              <FiMessageCircle className="text-2xl" />{' '}
            </div>
            <div>
              <h4 className="text-lg font-medium">Messages</h4>
              <h5 className="text-2xl font-bold">86</h5>
            </div>
          </div>
          <div>
            <FiMessageCircle className="text-8xl text-gray-400" />
          </div>
        </div>
      </div>

      <div className="my-8">
        <p className=" font-bold">Reported Blogs</p>
        <div className="mt-5 grid grid-cols-12 gap-4">
          <div className="col-span-12 flex items-center justify-between rounded bg-nevyblue  p-4 text-white md:col-span-6 xl:col-span-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded"
                  src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className="pb-2 font-medium text-white hover:text-gray-400">
                      Balance & Uses of Technology.
                    </h4>
                  </a>
                </Link>
                <div className="mb-2 flex items-center  gap-2 text-sm text-white">
                  <PersonIcon className=" text-sm" />
                  Reported by{' '}
                  <span className="font-semibold text-gray-400">
                    Monirul Fahad
                  </span>
                </div>
                <div className="flex items-center gap-2  text-sm text-white ">
                  <DateRangeIcon className="text-sm" />
                  March 27, 2022
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex items-center justify-between rounded bg-nevyblue  p-4 text-white md:col-span-6 xl:col-span-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded"
                  src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/04/c269e2f8-68d1-3297-9039-4a3293576617-1.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className="pb-2 font-medium text-white hover:text-gray-400">
                      Environment & climate changes.
                    </h4>
                  </a>
                </Link>
                <div className="mb-2 flex items-center  gap-2 text-sm text-white">
                  <PersonIcon className=" text-sm" />
                  Reported by{' '}
                  <span className="font-semibold text-gray-400">
                    Rashedul Islam
                  </span>
                </div>
                <div className="flex items-center gap-2  text-sm text-white ">
                  <DateRangeIcon className="text-sm" />
                  March 27, 2022
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex items-center justify-between rounded bg-nevyblue  p-4 text-white md:col-span-6 xl:col-span-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded"
                  src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className="pb-2 font-medium text-white hover:text-gray-400">
                      Balance & Uses of Technology.
                    </h4>
                  </a>
                </Link>
                <div className="mb-2 flex items-center  gap-2 text-sm text-white">
                  <PersonIcon className=" text-sm" />
                  Reported by{' '}
                  <span className="font-semibold text-gray-400">RH Santo</span>
                </div>
                <div className="flex items-center gap-2  text-sm text-white ">
                  <DateRangeIcon className="text-sm" />
                  March 27, 2022
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex items-center justify-between rounded bg-nevyblue  p-4 text-white md:col-span-6 xl:col-span-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded"
                  src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/04/20ed7bee-1791-37bc-a62f-3b55c1ff87e4-1.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className="pb-2 font-medium text-white hover:text-gray-400">
                      Walking through the darkness.
                    </h4>
                  </a>
                </Link>
                <div className="mb-2 flex items-center  gap-2 text-sm text-white">
                  <PersonIcon className=" text-sm" />
                  Reported by{' '}
                  <span className="font-semibold text-gray-400">
                    Abu Bakker
                  </span>
                </div>
                <div className="flex items-center gap-2  text-sm text-white ">
                  <DateRangeIcon className="text-sm" />
                  March 27, 2022
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex items-center justify-between rounded bg-nevyblue  p-4 text-white md:col-span-6 xl:col-span-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded"
                  src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className="pb-2 font-medium text-white hover:text-gray-400">
                      Balance & Uses of Technology
                    </h4>
                  </a>
                </Link>
                <div className="mb-2 flex items-center  gap-2 text-sm text-white">
                  <PersonIcon className=" text-sm" />
                  Reported by{' '}
                  <span className="font-semibold text-gray-400">SH Sakib</span>
                </div>
                <div className="flex items-center gap-2  text-sm text-white ">
                  <DateRangeIcon className="text-sm" />
                  March 27, 2022
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex items-center justify-between rounded bg-nevyblue  p-4 text-white md:col-span-6 xl:col-span-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded"
                  src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-6-1.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className="pb-2 font-medium text-white hover:text-gray-400">
                      My learning process of Next.js
                    </h4>
                  </a>
                </Link>
                <div className="mb-2 flex items-center  gap-2 text-sm text-white">
                  <PersonIcon className=" text-sm" />
                  Reported by{' '}
                  <span className="font-semibold text-gray-400">
                    Shajibul Shihab
                  </span>
                </div>
                <div className="flex items-center gap-2  text-sm text-white ">
                  <DateRangeIcon className="text-sm" />
                  March 27, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <p className=" font-bold">Reported Users</p>
        <div className="mt-5 grid grid-cols-12 gap-4">
          <div
            style={{ backgroundColor: '#ba895d' }}
            className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded-full bg-white object-cover p-2"
                  src="https://i.ibb.co/Kw7ZCg4/users.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className=" font-medium text-white hover:text-gray-700">
                      Mohammod Jafor
                    </h4>
                  </a>
                </Link>
                <p>jafor20@gmail.com</p>
                <h5 className="pt-2">
                  Reported By{' '}
                  <span className="font-semibold text-gray-700">
                    Rakib Ahmed
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: '#ba895d' }}
            className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded-full bg-white object-cover p-2"
                  src="https://i.ibb.co/pvYMW2b/avatar-6.png"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className=" font-medium text-white hover:text-gray-700">
                     Alex Jorbor
                    </h4>
                  </a>
                </Link>
                <p>joroborore@gmail.com</p>
                <h5 className="pt-2">
                  Reported By{' '}
                  <span className="font-semibold text-gray-700">
                    Monirul Islam
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: '#ba895d' }}
            className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded-full bg-white object-cover p-2"
                  src="https://i.ibb.co/z5P6r9X/user4.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className=" font-medium text-white hover:text-gray-700">
                      Riman wings
                    </h4>
                  </a>
                </Link>
                <p>rimanwings@gmail.com</p>
                <h5 className="pt-2">
                  Reported By{' '}
                  <span className="font-semibold text-gray-700">
                    Alexay
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: '#ba895d' }}
            className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded-full bg-white object-cover p-2"
                  src="https://i.ibb.co/N2DKz39/usr3.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className=" font-medium text-white hover:text-gray-700">
                      Tasnuvai Hridi
                    </h4>
                  </a>
                </Link>
                <p>hridi2002@gmail.com</p>
                <h5 className="pt-2">
                  Reported By{' '}
                  <span className="font-semibold text-gray-700">
                    Nazmus Sakib
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: '#ba895d' }}
            className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded-full bg-white object-cover p-2"
                  src="https://i.ibb.co/Kw7ZCg4/users.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className=" font-medium text-white hover:text-gray-700">
                      Mohammod Jafor
                    </h4>
                  </a>
                </Link>
                <p>jafor20@gmail.com</p>
                <h5 className="pt-2">
                  Reported By{' '}
                  <span className="font-semibold text-gray-700">
                    Rakib Ahmed
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: '#ba895d' }}
            className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded-full bg-white object-cover p-2"
                  src="https://i.ibb.co/TP8kMHR/user2.jpg"
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className=" font-medium text-white hover:text-gray-700">
                      Angelina Jolly
                    </h4>
                  </a>
                </Link>
                <p>angeljolly@gmail.com</p>
                <h5 className="pt-2">
                  Reported By{' '}
                  <span className="font-semibold text-gray-700">
                    Rakib Ahmed
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashHome
