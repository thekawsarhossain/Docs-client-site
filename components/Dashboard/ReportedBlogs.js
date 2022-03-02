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

const ReportedBlogs = () => {
  const [showMoreBlogs, setShowMoreBlogs] = React.useState(false)
  const [blogsData, setBlogsData] = React.useState([])
  React.useEffect(() => {
    if (showMoreBlogs) {
      setBlogsData(reportedBlogs.slice(6, 1000))
    } else {
      setBlogsData()
    }
  }, [showMoreBlogs])

  return (
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
  )
}

export default ReportedBlogs
