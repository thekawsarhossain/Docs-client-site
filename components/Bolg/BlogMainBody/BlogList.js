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
            className="col-span-12 font-serif text-white drop-shadow-[0_35px_35px_rgba(25,35,43,1)]"
          >
            <button
              className="w-full text-left"
              onClick={() => dispatch(ADD_TO_BLOG(blog))}
            >
              <Link href={`/blog/${blog?._id}`}>
                <a>
                  <div
                    className="rounded-lg "
                    style={{ backgroundColor: '#2c303a' }}
                  >
                    <img
                      className="rounded-t-lg"
                      src={blog?.image}
                      alt="blogImage"
                    />
                    <div className="px-4 pt-4 pb-8">
                      <h3 className="text-4xl">{blog?.title}</h3>
                    </div>
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
                            <small className="text-sm">
                              {blog?.blogger?.displayName}
                            </small>
                          </p>
                          <p>
                            <small className="font-sans text-sm">
                              {blog?.uploadDate} - {blog?.uploadTime}
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className="float-right self-center">
                        <ForumOutlinedIcon sx={{ width: 18, height: 18 }} />{' '}
                        {blog?.comment.length}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList
