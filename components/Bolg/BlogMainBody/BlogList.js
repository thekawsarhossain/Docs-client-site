/* eslint-disable @next/next/no-img-element */
import { Avatar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TO_BLOG } from '../../../Redux/Slices/blogSlice'

const BlogList = () => {
  // react redux hook here
  const dispatch = useDispatch()

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.blogs?.blogs[1])

  return (
    <div className="grid grid-cols-12 gap-6">
      {blogs?.map((blog) => (
        <div
          key={blog?._id}
          className="col-span-12 text-white drop-shadow-[0_35px_35px_rgba(25,35,43,1)] "
        >
          <div className="rounded-lg " style={{ backgroundColor: '#2c303a' }}>
            <button onClick={() => dispatch(ADD_TO_BLOG(blog))}>
              <Link
                onClick={() => dispatch(ADD_TO_BLOG(blog))}
                href={`/blog/${blog?._id}`}
              >
                <a>
                  <img
                    className="rounded-t-lg"
                    src={blog?.image}
                    alt="blogImage"
                  />
                </a>
              </Link>
            </button>
            <div className="p-3">
              <h3 className="">
                <button onClick={() => dispatch(ADD_TO_BLOG(blog))}>
                  <Link href={`/blog/${blog?._id}`}>
                    <a className="font-semibold">
                      How Can My Business Win Awards?
                    </a>
                  </Link>
                </button>
              </h3>
              <p className="py-3">
                Qui ex graviterque si et velit quamquam erudit. Amet quamquam eu
                consequat. Quo cupidatat volupta, appellat anim ab litteris
                domestic…
              </p>
            </div>
            <hr className="text-white" />
            <div className="flex justify-between p-3">
              <div className="flex">
                <div className="self-center">
                  {' '}
                  <a href="https://wordpress-288344-1596643.cloudwaysapps.com/author/egemenerd/">
                    <div className="scisco-verified">
                      <Avatar
                        alt="Remy Sharp"
                        src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-single/about_img.jpg"
                        sx={{ width: 40, height: 40 }}
                      />
                    </div>
                  </a>
                </div>
                <div className="self-center pl-2">
                  <p>
                    <small className="text-sm">John Doe</small>
                  </p>
                  <p>
                    <small className="text-sm">March 12, 2019</small>
                  </p>
                </div>
              </div>
              <div className="float-right self-center">
                <ForumOutlinedIcon sx={{ width: 18, height: 18 }} /> 3
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogList
