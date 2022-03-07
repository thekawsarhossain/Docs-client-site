/* eslint-disable @next/next/no-img-element */
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TO_BLOG } from '../../../Redux/Slices/blogSlice'
import { useState } from 'react'
import { Avatar, Container } from '@mui/material'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import Link from 'next/link'
import SvgButton from '../../Shared/SvgButton/SvgButton'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import BackupIcon from '@mui/icons-material/Backup'

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
  dataSearch?.sort(
    (firstItem, secondItem) =>
      firstItem?.comment?.length - secondItem?.comment?.length
  )
  dataSearch?.reverse()
  const trendingBlogs = dataSearch?.slice(0, 6)
  return (
    <div className="my-16 py-16">
      <Container>
        <div className="flex justify-between pb-24 text-center">
          <h2 className="title">Trending Blogs</h2>
          <Link href="/blogUpload">
            <a>
              <button className="bg-indigo-700 px-10 py-4 text-white">
                {' '}
                Upload blog now <BackupIcon className="animate-bounce" />
              </button>
            </a>
          </Link>{' '}
        </div>
        <div className="grid grid-cols-12 gap-8">
          {trendingBlogs?.map((blog) => (
            <button
              key={blog?._id}
              className="col-span-12 min-h-full w-full rounded text-left font-serif  text-white shadow dark:text-Docy-Dark sm:col-span-6 md:col-span-4"
              onClick={() => dispatch(ADD_TO_BLOG(blog))}
            >
              <Link href={`/blog/${blog?._id}`}>
                <a>
                  <div className="min-h-full rounded-lg bg-slate-100 dark:bg-Docy-Dark">
                    <img
                      className="h-96 w-full rounded object-cover"
                      src={blog?.image}
                      alt="blogImage"
                    />
                    <div
                      style={{ minHeight: '135px' }}
                      className="px-4 pt-4 pb-8"
                    >
                      <h3 className="text-xl text-Docy-Dark dark:text-slate-100">
                        {/* {blog?.title} */}
                        {blog?.title.length > 30
                          ? blog?.title.split(' ').slice(0, 10).join(' ') +
                            '...'
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
                          {blog?.comment.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </button>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/blogs">
            <a>
              <SvgButton sx={{ textAlign: 'center', color: '#6ab3fb' }}>
                {' '}
                See All <KeyboardDoubleArrowRightIcon />
              </SvgButton>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default HomeBlogList
