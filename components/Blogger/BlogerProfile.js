/* eslint-disable jsx-a11y/alt-text */

import { Avatar, Container, Grid } from '@mui/material'
import Footer from '../Shared/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { fetchBlogs } from '../../Redux/Slices/blogSlice'
import { useEffect, useState } from 'react'

/* eslint-disable @next/next/no-img-element */
const BlogerProfile = (props) => {
  // DISPATCH REDUX HOOK HERE
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  const [filter, setFilter] = useState('')
  const searchText = (event) => {
    setFilter(event.target.value)
  }
  const otherPosts = blogs?.filter(
    (td) => td?.blogger?._id === props?.blogger?._id
  )
  let dataSearch = otherPosts?.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  dataSearch?.reverse()
  return (
    <div>
      <Container>
        <div className="bg-gray-100 dark:bg-Docy-DarkGray">
          <div className="my-5 p-5">
            <div className="grid grid-cols-12 gap-4">
              {/* <!-- Left Side --> */}
              <div className="col-span-12 w-full lg:col-span-4">
                {/* <!-- Profile Card --> */}
                <div className="border-t-4 border-green-400 bg-white p-3 dark:bg-Docy-Dark">
                  <div
                    style={{ maxWidth: '250px', maxHeight: '250px' }}
                    className="image mx-auto overflow-hidden rounded-lg border-2"
                  >
                    <img
                      className="w-full"
                      src={props?.blogger?.image}
                      alt=""
                    />
                  </div>
                  <h1 className="my-1 text-center text-2xl font-bold leading-8 text-gray-900 dark:text-slate-50">
                    {props?.blogger?.displayName}
                  </h1>
                  <h3 className=" text-semibold text-center text-gray-600 dark:text-slate-300">
                    {props?.blogger?.profession}
                  </h3>
                  <p className="pt-2 text-sm leading-6 text-gray-500 hover:text-gray-600">
                    {props?.blogger?.biography}
                  </p>
                  <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm dark:bg-Docy-DarkGray dark:text-slate-300">
                    {/* <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        <span className="rounded bg-green-500 py-1 px-2 text-sm text-white ">
                          Active
                        </span>
                      </span>
                    </li> */}
                    <li className="flex items-center py-3">
                      <span>Member since</span>
                      <span className="ml-auto">Nov 07, 2016</span>
                    </li>
                  </ul>
                </div>
                {/* <!-- End of profile card --> */}
                {/* <!-- Friends card --> */}
                <div className="mt-4 bg-white p-3 hover:shadow dark:bg-Docy-Dark">
                  <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-gray-900">
                    <span className="text-green-500">
                      <svg
                        className="h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span className="text-black dark:text-white">
                      Followers
                    </span>
                  </div>
                  <div className="">
                    {!props?.blogger?.followers[0] && (
                      <h3 className="my-3 text-center">
                        Not followed by anyone!
                      </h3>
                    )}
                    {props?.blogger?.followers.map((follower) => (
                      <div key={follower.id} className="my-2 flex ">
                        <img
                          className="h-16 w-16 rounded-full"
                          src={follower.image}
                          alt=""
                        />
                        <p className="w-full self-center pl-2 ">
                          {follower.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <!-- End of friends card --> */}
                {/* <!-- following card --> */}
                <div className="mt-4 bg-white p-3 hover:shadow dark:bg-Docy-Dark">
                  <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-gray-900">
                    <span className="text-green-500">
                      <svg
                        className="h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span className="text-black dark:text-white">
                      Following
                    </span>
                  </div>
                  <div className="">
                    {!props?.blogger?.following[0] && (
                      <h3 className="my-3 text-center">
                        Not following anyone!
                      </h3>
                    )}
                    {props?.blogger?.following.map((follower) => (
                      <div key={follower.id} className="my-2 flex ">
                        <img
                          className="h-16 w-16 rounded-full"
                          src={follower.image}
                          alt=""
                        />
                        <p className="w-full self-center pl-2 ">
                          {follower.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <!-- End of following card --> */}
              </div>
              {/* <!-- Right Side --> */}
              <div className="col-span-12 mb-6 w-full lg:col-span-8">
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <div className="rounded-sm bg-white p-3 shadow-sm dark:bg-Docy-Dark">
                  <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900 dark:text-white">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className=" tracking-wide">About</span>
                  </div>
                  <div className="text-gray-700 dark:text-slate-300">
                    <div className="grid text-base md:grid-cols-2">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 py-2 font-semibold">
                          Gender
                        </div>
                        <div className="col-span-8 break-words py-2 dark:text-slate-400">
                          {props?.blogger?.gender}
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 py-2 font-semibold">
                          Address
                        </div>
                        <div className="col-span-8 break-words py-2 dark:text-slate-400">
                          {props?.blogger?.address}
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 py-2 font-semibold">
                          Website
                        </div>
                        <div className="col-span-8 break-words py-2 dark:text-slate-400">
                          {props?.blogger?.website}
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 py-2 font-semibold">
                          Email
                        </div>
                        <div className="col-span-8 break-words py-2 dark:text-slate-400">
                          {props?.blogger?.email}
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 py-2 font-semibold">
                          Birth Date
                        </div>
                        <div className="col-span-8 break-words py-2 dark:text-slate-400">
                          {props?.blogger?.birthDate}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button className="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-Docy-DarkM dark:text-blue-300 dark:hover:bg-Docy-DarkGray">
                    Show Full Information
                  </button> */}
                </div>
                {/* <!-- End of about section --> */}

                <div className="my-4">
                  <h3 className="my-4 pt-5">Blogs</h3>
                  {dataSearch?.map((blog) => (
                    <Grid
                      key={blog?._id}
                      className="mb-8"
                      container
                      spacing={{ xs: 2, md: 2 }}
                      columns={{ xs: 4, sm: 12, md: 12 }}
                    >
                      <Grid item xs={12} sm={4} md={4}>
                        <img
                          src={blog?.image}
                          className="-mb-4 h-80 w-full object-cover md:h-64 md:rounded"
                          alt=""
                        />
                      </Grid>
                      <Grid item xs={12} sm={8} md={8}>
                        <div className=" min-h-72 bg-white p-3 px-6 py-5  shadow-sm  dark:bg-Docy-Dark md:h-64 md:rounded">
                          <div className="flex justify-between">
                            <span className="text-red-400">
                              {blog?.category}
                            </span>
                          </div>
                          <Link
                            onClick={() => dispatch(ADD_TO_BLOG(blog))}
                            href={`/blog/${blog?._id}`}
                          >
                            <a>
                              <h3 className="cursor-pointer pt-4 pb-10 font-bold hover:underline ">
                                {blog.title}
                              </h3>
                            </a>
                          </Link>
                          <div className="items-center  justify-between md:flex">
                            <div className="mb-4 flex items-center">
                              <Avatar
                                alt="Bloggers image"
                                src={blog?.blogger?.image}
                                sx={{ width: 40, height: 40, mr: 2 }}
                              />
                              <p>
                                {' '}
                                {blog?.blogger?.displayName} <br />
                                <small className="hidden md:flex">
                                  {' '}
                                  {blog?.uploadDate} - {blog?.uploadTime}
                                </small>
                              </p>
                            </div>
                            <div>
                              <p>
                                {' '}
                                <ForumOutlinedIcon
                                  sx={{ width: 18, height: 18 }}
                                />{' '}
                                {blog?.comment?.length}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </div>

                {/* <!-- Blogs --> */}

                {/* <!-- End of profile tab --> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default BlogerProfile
