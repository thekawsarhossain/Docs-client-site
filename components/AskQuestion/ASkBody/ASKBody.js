/* eslint-disable @next/next/no-img-element */
import { Container } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'
// import Navbar from '../Shared/Navbar/Navbar'
import { Avatar, Grid } from '@mui/material'
// import BlogHeroSection from './BlogHeroSection/BlogHeroSection'
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useEffect, useState } from 'react'
// import Footer from '../Shared/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import { ADD_TO_BLOG, fetchBlogs } from '../../../Redux/Slices/blogSlice'

const ASKBody = () => {
  const [allBlogs, setAllBlogs] = useState()
  const [search, setSearch] = useState(true)
  const [category, setCategory] = useState(false)
  // DISPATCH REDUX HOOK HERE
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  // let allBlogs = blogs
  // console.log(allBlogs)

  // const categoryWise = blogs.filter(
  //   (td) => td?.blogger?._id === blog?.blogger?._id && td?._id != blog?._id
  // )

  const recentQuestion = blogs.slice(0, 3)
  const [filter, setFilter] = useState('')
  const searchText = (event) => {
    setCategory(false)
    setSearch(true)
    setFilter(event.target.value)
    console.log(event.target.value)
  }
  let dataSearch = blogs?.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        ?.toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  // setAllBlogs(dataSearch?.reverse())
  const handleChange = (event) => {
    setCategory(true)
    setSearch(false)
    const categoryWiseBlogs = blogs.filter(
      (td) => td?.category === event.target.value
    )
    setAllBlogs(categoryWiseBlogs)
    console.log(categoryWiseBlogs)
    console.log(event.target.value)
  }
  return (
    <div>
      <Container className="mt-16">
        <div className="grid grid-cols-12 gap-5">
          {/* here start show blog section */}
          <div className="col-span-12 md:col-span-8">
            {/* search bar  */}
            <div className="search-box mb-8 rounded bg-slate-100 p-6 text-center  dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">Search</h4>
              <hr />
              <input
                type="search"
                placeholder="Search..."
                name=""
                id=""
                className="mt-4 mb-6 w-full rounded-full bg-slate-200 py-2 px-4 focus:outline-none dark:text-black"
                onChange={searchText.bind(this)}
              />
            </div>
            {category && (
              <div>
                {' '}
                {allBlogs?.map((blog) => (
                  <div key={blog._id} className="mb-5 w-full">
                    <Link
                      onClick={() => dispatch(ADD_TO_BLOG(blog))}
                      href={`/blog/${blog?._id}`}
                    >
                      <a>
                        <div className=" rounded  bg-slate-100 px-6 py-3 hover:shadow dark:bg-Docy-DarkGray">
                          <p className="text-sm text-red-400">
                            {blog.category}
                          </p>
                          <h3 className="cursor-pointer pb-1 font-bold hover:underline ">
                            {blog.title}
                          </h3>
                          <div className="tag-container flex flex-wrap rounded-lg pb-2">
                            {blog?.tags.map((tag, index) => {
                              return (
                                <div
                                  key={index}
                                  className="m-1 h-fit rounded bg-Docy-paleGeen  py-1 px-2 text-xs text-Docy-Dark"
                                >
                                  {tag}{' '}
                                </div>
                              )
                            })}
                          </div>
                          <div className="items-center  justify-between md:flex">
                            <div className="mb-2 flex items-center">
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
                              <p>{blog?.comment.length} answers</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {search && (
              <div>
                {' '}
                {dataSearch?.map((blog) => (
                  <div key={blog._id} className="mb-5 w-full">
                    <Link
                      onClick={() => dispatch(ADD_TO_BLOG(blog))}
                      href={`/blog/${blog?._id}`}
                    >
                      <a>
                        <div className=" rounded  bg-slate-100 px-6 py-3 hover:shadow dark:bg-Docy-DarkGray">
                          <p className="text-sm text-red-400">
                            {blog.category}
                          </p>
                          <h3 className="cursor-pointer pb-1 font-bold hover:underline ">
                            {blog.title}
                          </h3>
                          <div className="tag-container flex flex-wrap rounded-lg pb-2">
                            {blog?.tags.map((tag, index) => {
                              return (
                                <div
                                  key={index}
                                  className="m-1 h-fit rounded bg-Docy-paleGeen  py-1 px-2 text-xs text-Docy-Dark"
                                >
                                  {tag}{' '}
                                </div>
                              )
                            })}
                          </div>
                          <div className="items-center  justify-between md:flex">
                            <div className="mb-2 flex items-center">
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
                              <p>{blog?.comment.length} answers</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/*here start sidebar */}
          <div className="col-span-12 md:col-span-4">
            {/* search bar  */}
            <div className="search-box rounded bg-slate-100 p-6 text-center dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">Find Category Wise Question</h4>
              <hr />
              <select
                // value={age}
                onChange={handleChange}
                // className=" h-14 w-full cursor-pointer rounded-lg border-2 p-3 text-lg dark:border-0"
                className="mt-4 mb-6 h-10 w-full cursor-pointer rounded-full bg-slate-200 py-2 px-4 focus:outline-none dark:text-black"
              >
                <option className="hidden">Select Category</option>
                <option>Creative</option>
                <option>Inspiration</option>
                <option>Lifestyle</option>
                <option>News</option>
                <option>Photography</option>
                <option>Skill</option>
                <option>Tourist Tours</option>
                <option>Inspire</option>
                <option>Education</option>
              </select>
            </div>
            {/* related question  */}
            <div className=" recent-blog mt-10 mb-10 rounded bg-slate-100 p-4 text-center dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">Recent Post</h4>
              <hr />
              {recentQuestion.map((question) => (
                <div key={question._id} className="recent-blog mt-6">
                  <div className=" flex ">
                    <Link href="/">
                      <a>
                        <div className="px-6 text-left ">
                          <p className="cursor-pointer font-medium hover:underline">
                            {question.title}
                          </p>

                          <small className="flex pt-2">
                            <p className="hidden md:flex">
                              {' '}
                              {question?.uploadDate} - {question?.uploadTime}
                            </p>
                          </small>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-10 rounded bg-slate-100  p-8 text-center dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">Stay In Touch</h4>
              <hr />
              <div>
                <ul className="sidebar-icon mt-4 flex justify-center text-gray-500">
                  <li>
                    <Link href="/">
                      <a>
                        <FacebookIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <TwitterIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <PinterestIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <LinkedInIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <InstagramIcon />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-10 rounded bg-slate-100 p-6 text-center dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">All Category</h4>
              <hr />
              <div className="category mt-4 grid grid-cols-3   gap-4">
                <li>Creative</li>
                <li>Inspiration</li>
                <li>Lifestyle</li>
                <li>News</li>
                <li>Photography</li>
                <li>Skill</li>
                <li>Trending</li>
                <li>Tourist</li>
                <li>Education</li>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ASKBody
