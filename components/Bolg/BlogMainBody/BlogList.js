/* eslint-disable @next/next/no-img-element */
import { Avatar, Box, Container } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import { ADD_TO_BLOG, fetchBlogs } from '../../../Redux/Slices/blogSlice'
import { useDispatch } from 'react-redux'

const BlogList = (props) => {
  // react redux hook here
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data here
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        {props.dataSearch?.map((blog) => (
          <div
            key={blog?._id}
            className="col-span-12 font-serif text-Docy-Dark dark:text-white dark:shadow-lg lg:col-span-6"
          >
            <Link href={`/blog/${blog?._id}`}>
              <a>
                <button
                  className="w-full text-left"
                  onClick={() => dispatch(ADD_TO_BLOG(blog))}
                >
                  <div className="min-h-full rounded-lg bg-slate-100 dark:bg-Docy-Dark">
                    <img
                      className="h-96 w-full rounded-t-lg object-cover"
                      src={blog?.image}
                      alt="blogImage"
                    />
                    <div
                      style={{ minHeight: '135px' }}
                      className="px-4 pt-4 pb-8"
                    >
                      <h3 className="text-xl text-Docy-Dark dark:text-slate-100">
                        {/* {blog?.title} */}
                        {blog?.title.length > 70
                          ? blog?.title.slice(0, 70) + '...'
                          : blog?.title}
                      </h3>
                    </div>
                    <div>
                      <hr className="text-white" />
                      <div className="flex justify-between p-4">
                        <div className="flex">
                          <div className="self-center">
                            <div className="scisco-verified">
                              <Avatar
                                alt="Bloggers image"
                                src={blog?.blogger?.image}
                                sx={{ width: 40, height: 40 }}
                              />
                            </div>
                          </div>
                          <div className="self-center pl-2">
                            <p>
                              <small className="text-sm text-Docy-Dark dark:text-white">
                                {blog?.blogger?.displayName}
                              </small>
                            </p>
                            <p>
                              <small className="font-sans text-sm text-Docy-Dark dark:text-white">
                                {blog?.uploadDate} - {blog?.uploadTime}
                              </small>
                            </p>
                          </div>
                        </div>
                        <div className="float-right self-center text-Docy-Dark dark:text-white">
                          <ForumOutlinedIcon sx={{ width: 18, height: 18 }} />
                          {/* {blog?.comment?.length} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList
