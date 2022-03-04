/* eslint-disable @next/next/no-img-element */
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TO_BLOG } from '../../../Redux/Slices/blogSlice'
import { useState } from 'react'
import { Avatar, Container } from '@mui/material'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import Link from 'next/link'
// import { ADD_TO_BLOG } from '../../../Redux/Slices/blogSlice'
// import { ADD_TO_BLOG } from '../../../Redux/Slices/blogSlice'

const HomeBlogList = () => {
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
  dataSearch?.reverse()
  return (
    <div className="py-16 my-16">
      <Container>
        <div  className="pb-24 text-center flex justify-between">
          <h2 className='border-b-2 border-indigo-600 pb-3 font-bold '> Trending Blog</h2> 
        <Link href='/blogUpload'>
          <a ><button className='bg-indigo-700 px-10 py-4 text-white'>  Upload blog now</button></a>
          </Link> </div>
        <div className="grid grid-cols-12 gap-8">
          {dataSearch?.map((blog) => (
            <button
              key={blog?._id}
              className="col-span-12 min-h-full w-full text-left font-serif  text-white shadow-lg dark:text-Docy-Dark sm:col-span-6 md:col-span-4"
              onClick={() => dispatch(ADD_TO_BLOG(blog))}
            >
              <Link href={`/blog/${blog?._id}`}>
                <a>
                  <div className="min-h-full rounded-lg bg-slate-100 dark:bg-Docy-Dark">
                    <img
                      className="h-96 w-full rounded-t-lg object-cover"
                      src={blog?.image}
                      alt="blogImage"
                    />
                    <div className="px-4 pt-4 pb-8">
                      <h3 className="text-xl text-Docy-Dark dark:text-slate-100">
                        {/* {blog?.title} */}
                        {blog?.title.length > 30
                          ? blog?.title.split(' ').slice(0, 10).join(' ')
                          : 'You need more text to add '}
                      </h3>
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
                        {blog?.comment.length}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </button>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default HomeBlogList
