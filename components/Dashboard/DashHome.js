/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FiUsers, FiMessageCircle, FiEdit } from 'react-icons/fi'
import PersonIcon from '@mui/icons-material/Person'
import DateRangeIcon from '@mui/icons-material/DateRange'
import Link from 'next/link'
import AddRounded from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'

const reportedBlogs = [
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg',
    blogName: 'Balance & Uses of Technology.',
    reporterName: 'Monirul Fahad',
    date: 'February 22, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/04/c269e2f8-68d1-3297-9039-4a3293576617-1.jpg',
    blogName: 'Environment & climate changes.',
    reporterName: 'Rashedul Islam',
    date: 'March 27, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg',
    blogName: 'Balance & Uses of Technology.',
    reporterName: 'RH Santo',
    date: 'January 04, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/04/20ed7bee-1791-37bc-a62f-3b55c1ff87e4-1.jpg',
    blogName: 'Walking through the darkness.',
    reporterName: 'Abu Bakker',
    date: 'March 15, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg',
    blogName: 'Balance & Uses of Technology',
    reporterName: 'SH Sakib',
    date: 'February 27, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-6-1.jpg',
    blogName: 'My learning process of Next.js',
    reporterName: 'Shajibul Shihab',
    date: 'June 27, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg',
    blogName: 'Balance & Uses of Technology',
    reporterName: 'SH Sakib',
    date: 'February 27, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-6-1.jpg',
    blogName: 'My learning process of Next.js',
    reporterName: 'Shajibul Shihab',
    date: 'June 27, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg',
    blogName: 'Balance & Uses of Technology',
    reporterName: 'SH Sakib',
    date: 'February 27, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg',
    blogName: 'Balance & Uses of Technology',
    reporterName: 'SH Sakib',
    date: 'February 27, 2022',
  },
  {
    img: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-6-1.jpg',
    blogName: 'My learning process of Next.js',
    reporterName: 'Shajibul Shihab',
    date: 'June 27, 2022',
  },

]
const reportedUsers = [
  {
    img: 'https://i.ibb.co/Kw7ZCg4/users.jpg',
    userName: 'Mohammod Jafor',
    email: 'jafor20@gmail.com',
    reporterName: 'Rakib Ahmed',
  },
  {
    img: 'https://i.ibb.co/pvYMW2b/avatar-6.png',
    userName: 'Alex Jorbor',
    email: 'alex22@gmail.com',
    reporterName: 'Monirul Fahad',
  },
  {
    img: 'https://i.ibb.co/z5P6r9X/user4.jpg',
    userName: 'Riman wings',
    email: 'rimanwings@gmail.com',
    reporterName: 'Alexay',
  },
  {
    img: 'https://i.ibb.co/N2DKz39/usr3.jpg',
    userName: 'Tasnuvai Hridi',
    email: 'hridi202@gmail.com',
    reporterName: 'Nazmus Sakib',
  },
  {
    img: 'https://i.ibb.co/Kw7ZCg4/users.jpg',
    userName: 'Mohammad Jaffy',
    email: 'jaffywing@gmail.com',
    reporterName: 'Shihab',
  },
  {
    img: 'https://i.ibb.co/TP8kMHR/user2.jpg',
    userName: 'Angelina jolly',
    email: 'angeljolly@gmail.com',
    reporterName: 'Alexay',
  },
  {
    img: 'https://i.ibb.co/z5P6r9X/user4.jpg',
    userName: 'Riman wings',
    email: 'rimanwings@gmail.com',
    reporterName: 'Alexay',
  },
  {
    img: 'https://i.ibb.co/N2DKz39/usr3.jpg',
    userName: 'Tasnuvai Hridi',
    email: 'hridi202@gmail.com',
    reporterName: 'Nazmus Sakib',
  },
  {
    img: 'https://i.ibb.co/Kw7ZCg4/users.jpg',
    userName: 'Mohammad Jaffy',
    email: 'jaffywing@gmail.com',
    reporterName: 'Shihab',
  },
  {
    img: 'https://i.ibb.co/z5P6r9X/user4.jpg',
    userName: 'Riman wings',
    email: 'rimanwings@gmail.com',
    reporterName: 'Alexay',
  },
  {
    img: 'https://i.ibb.co/N2DKz39/usr3.jpg',
    userName: 'Tasnuvai Hridi',
    email: 'hridi202@gmail.com',
    reporterName: 'Nazmus Sakib',
  },
]

const DashHome = () => {
  const [showMoreBlogs, setShowMoreBlogs] = React.useState(false)
  const [showMoreUsers, setShowMoreUsers] = React.useState(false)
  const [blogsData, setBlogsData] = React.useState([])
  const [usersData, setUsersData] = React.useState([])
  React.useEffect(() => {
    if (showMoreBlogs) {
      setBlogsData(reportedBlogs.slice(6, 1000))
    } else {
      setBlogsData()
    }
  }, [showMoreBlogs])

  React.useEffect(() => {
    if (showMoreUsers) {
      setUsersData(reportedUsers.slice(6, 1000))
    } else {
      setUsersData()
    }
  }, [showMoreUsers])
  return (
    <div className="py-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex items-center justify-between rounded bg-teal-700 px-8 py-4 text-white md:col-span-6 lg:col-span-4">
          <div className="flex items-center gap-4">
            <div>
              <FiEdit className="text-2xl" />
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
              <FiUsers className="text-2xl" />
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
              <FiMessageCircle className="text-2xl" />
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
          {reportedBlogs.slice(0, 6).map((blog) => (
            <div
              key={blog?.index}
              className="col-span-12 flex items-center justify-between rounded bg-nevyblue  p-4 text-white md:col-span-6 xl:col-span-4"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="h-24 w-24 rounded"
                    src={blog?.img}
                    alt="blog thumbnail"
                  />
                </div>
                <div>
                  <Link href="#">
                    <a>
                      <h4 className="pb-2 font-medium text-white hover:text-gray-400">
                        {blog?.blogName}
                      </h4>
                    </a>
                  </Link>
                  <div className="mb-2 flex items-center  gap-2 text-sm text-white">
                    <PersonIcon className=" text-sm" />
                    Reported by
                    <span className="font-semibold text-gray-400">
                      {blog?.reporterName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2  text-sm text-white ">
                    <DateRangeIcon className="text-sm" />
                    {blog?.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-4 flex justify-center text-center">
          <button
            className="flex items-center rounded-md p-1 font-bold text-blue-800 duration-300"
            onClick={() => setShowMoreBlogs(!showMoreBlogs)}
          >
            More Reported Blogs
            {showMoreBlogs ? <RemoveRoundedIcon /> : <AddRounded />}
          </button>
        </div>
        <div className="mt-5 grid grid-cols-12 gap-4">
          {blogsData?.map((blog) => (
            <div
              key={blog?.index}
              className="col-span-12 flex items-center justify-between rounded bg-nevyblue  p-4 text-white md:col-span-6 xl:col-span-4"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="h-24 w-24 rounded"
                    src={blog?.img}
                    alt="blog thumbnail"
                  />
                </div>
                <div>
                  <Link href="#">
                    <a>
                      <h4 className="pb-2 font-medium text-white hover:text-gray-400">
                        {blog?.blogName}
                      </h4>
                    </a>
                  </Link>
                  <div className="mb-2 flex items-center  gap-2 text-sm text-white">
                    <PersonIcon className=" text-sm" />
                    Reported by
                    <span className="font-semibold text-gray-400">
                      {blog?.reporterName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2  text-sm text-white ">
                    <DateRangeIcon className="text-sm" />
                    {blog?.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <p className=" font-bold">Reported Users</p>
        <div className="mt-5 grid grid-cols-12 gap-4">
          {reportedUsers.slice(0, 6).map((user) => (
            <div
              key={user.index}
              style={{ backgroundColor: '#ba895d' }}
              className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="h-24 w-24 rounded-full bg-white object-cover p-2"
                    src={user?.img}
                    alt="blog thumbnail"
                  />
                </div>
                <div>
                  <Link href="#">
                    <a>
                      <h4 className=" font-medium text-white hover:text-gray-700">
                        {user?.userName}
                      </h4>
                    </a>
                  </Link>
                  <p>{user?.email}</p>
                  <h5 className="pt-2">
                    Reported By
                    <span className="font-semibold text-gray-700">
                      {user?.reporterName}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-4 flex justify-center text-center">
          <button
            className="flex items-center rounded-md p-1 font-bold text-blue-800 duration-300"
            onClick={() => setShowMoreUsers(!showMoreUsers)}
          >
            More Reported Users
            {showMoreUsers ? <RemoveRoundedIcon /> : <AddRounded />}
          </button>
        </div>
        <div className="mt-5 grid grid-cols-12 gap-4">
          {usersData?.map((user) => (
            <div
              key={user.index}
              style={{ backgroundColor: '#ba895d' }}
              className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="h-24 w-24 rounded-full bg-white object-cover p-2"
                    src={user?.img}
                    alt="blog thumbnail"
                  />
                </div>
                <div>
                  <Link href="#">
                    <a>
                      <h4 className=" font-medium text-white hover:text-gray-700">
                        {user?.userName}
                      </h4>
                    </a>
                  </Link>
                  <p>{user?.email}</p>
                  <h5 className="pt-2">
                    Reported By
                    <span className="font-semibold text-gray-700">
                      {user?.reporterName}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashHome
