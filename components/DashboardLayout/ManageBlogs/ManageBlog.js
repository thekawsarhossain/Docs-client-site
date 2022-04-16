/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import Link from 'next/link'
import { Avatar, Container } from '@mui/material'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'

const ManageBlog = () => {
  // react redux hook here
  const dispatch = useDispatch()

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  const [filter, setFilter] = useState('')
  const searchText = (event) => {
    setFilter(event.target.value)
  }
  let dataSearch = blogs?.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  dataSearch?.sort(
    (firstItem, secondItem) =>
      firstItem?.reports?.length - secondItem?.reports?.length
  )
  dataSearch?.reverse()
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure , you want to delete ?')
    if (proceed) {
      const url = `https://polar-hamlet-38117.herokuapp.com/blog/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert('Deleted successfully')
            const remaining = blogs.filter((order) => order._id !== id)
            setBlogs(remaining)
          }
        })
    }
  }

  return (
    <div className="h-full">
      <div className="grid grid-cols-12 gap-5">
        {dataSearch?.map((blog) => (
          <div
            key={blog?._id}
            className="col-span-12 w-full rounded-xl border border-gray-100 bg-white  p-5 shadow-lg dark:border-gray-600 dark:bg-Docy-Dark md:col-span-12 lg:col-span-6 xl:col-span-4"
          >
            <div className="flex items-center">
              <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                <img
                  src={blog?.blogger?.image}
                  alt=""
                  className="h-10 w-10 object-cover"
                />
              </div>
              <div>
                <span className="block leading-3 dark:text-slate-100">
                  {blog?.blogger?.displayName}
                </span>
                <span className="text-xs text-gray-400">
                  {blog?.blogger?.profession}
                </span>
              </div>
            </div>

            <div style={{ minHeight: '100px' }}>
              <Link href={`/blog/${blog?._id}`}>
                <a>
                  <h3 className="text-lg font-semibold text-Docy-Dark hover:underline dark:text-slate-100">
                    {/* {blog?.title} */}
                    {blog?.title?.length > 70
                      ? blog?.title?.slice(0, 70) + '...'
                      : blog?.title}
                  </h3>
                </a>
              </Link>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-6 text-blue-800">
                    <ForumOutlinedIcon />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {blog?.comment?.length}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-6 text-blue-300">
                    <CalendarMonthOutlinedIcon />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {blog?.uploadDate}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-6 text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {blog?.uploadTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="font-semibold text-gray-600 dark:text-gray-300">
                {blog?.reports.length} reports
              </div>

              <button
                onClick={() => handleDelete(blog?._id)}
                className="flex items-center space-x-3 rounded-full bg-blue-800 px-4 py-3 text-white hover:bg-red-500"
              >
                <span>Remove</span>

                <div className="">
                  <DeleteIcon />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageBlog
