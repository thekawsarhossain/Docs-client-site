/* eslint-disable @next/next/no-img-element */
import Navbar from '../Shared/Navbar/Navbar'
import { Avatar, Container, Grid } from '@mui/material'
import BlogHeroSection from './BlogHeroSection/BlogHeroSection'
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useEffect, useState } from 'react'
import Footer from '../Shared/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
// import {fetchBlogs } from
import Head from 'next/head'
import { ADD_TO_BLOG, fetchBlogs } from '../../Redux/Slices/blogSlice'
import Pagination from './Pagination'

const Blog = () => {
  const [search, setSearch] = useState(false)
  // DISPATCH REDUX HOOK HERE
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)

  //pagination start
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const allBlogs = [].concat(blogs).reverse()
  const recentPosts = allBlogs?.slice(0, 3)

  const currentPosts = allBlogs?.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  //pagination end
  const [filter, setFilter] = useState('')
  const searchText = (event) => {
    setSearch(true)
    setFilter(event.target.value)
    if (event.target.value === '') {
      setSearch(false)
    }
  }
  let dataSearch = blogs?.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        ?.toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  dataSearch?.reverse()
  return (
    <div>
      <Head>
        <title>Blog List</title>
      </Head>
      <Navbar />
      <BlogHeroSection />
      <Container className="mt-16">
        <div className="search-box mb-8 block rounded bg-slate-100 p-6 text-center dark:bg-Docy-DarkGray lg:hidden">
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
        <div className="grid grid-cols-12 gap-4">
          {/* here start show blog section */}
          <div className="col-span-12 lg:col-span-8">
            {search && (
              <div>
                {!dataSearch[0] && (
                  <div className="text-center">
                    <h1>Sorry Nothing Found!</h1>
                  </div>
                )}
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
                      <Link
                        onClick={() => dispatch(ADD_TO_BLOG(blog))}
                        href={`/blog/${blog?._id}`}
                      >
                        <a>
                          <div className=" min-h-72 bg-slate-100  px-6  py-5 hover:shadow dark:bg-Docy-DarkGray md:h-64 md:rounded">
                            <p className="text-red-400">{blog.category}</p>
                            <h3 className="cursor-pointer pt-4 pb-10 font-bold hover:underline ">
                              {blog.title}
                            </h3>
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
                        </a>
                      </Link>
                    </Grid>
                  </Grid>
                ))}
              </div>
            )}
            {!search && (
              <div>
                {currentPosts?.map((blog) => (
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
                      <Link
                        onClick={() => dispatch(ADD_TO_BLOG(blog))}
                        href={`/blog/${blog?._id}`}
                      >
                        <a>
                          <div className=" min-h-72 bg-slate-100  px-6  py-5 hover:shadow dark:bg-Docy-DarkGray md:h-64 md:rounded">
                            <p className="text-red-400">{blog.category}</p>
                            <h3 className="cursor-pointer pt-4 pb-10 font-bold hover:underline ">
                              {blog.title}
                            </h3>
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
                        </a>
                      </Link>
                    </Grid>
                  </Grid>
                ))}
                <div className="pb-6">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={blogs.length}
                    paginate={paginate}
                  />
                </div>
              </div>
            )}
          </div>

          {/*here start sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="search-box hidden rounded bg-slate-100 p-6 text-center dark:bg-Docy-DarkGray lg:block">
              <h4 className="mb-2 font-bold">Search</h4>
              <hr />
              <input
                type="search"
                placeholder="Search..."
                name=""
                id=""
                className="mt-4 mb-6 w-full rounded-full bg-slate-200 py-2 px-4 focus:outline-none dark:text-black"
                onChange={searchText?.bind(this)}
              />
            </div>
            <div className=" recent-blog mt-10 mb-10 rounded bg-slate-100 p-4 text-center dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">Recent Post</h4>
              <hr />
              {recentPosts?.map((recentPost) => (
                <div key={recentPost?._id} className="recent-blog mt-6">
                  <div className=" flex">
                    <img
                      className="h-32 w-32 rounded object-cover"
                      src={recentPost?.image}
                      alt=""
                    />
                    <button onClick={() => dispatch(ADD_TO_BLOG(recentPost))}>
                      <Link
                        className="self-center"
                        href={`/blog/${recentPost?._id}`}
                      >
                        <a>
                          <div className="px-6 text-left ">
                            <p className="cursor-pointer font-medium hover:underline">
                              {/* {otherPost?.title} */}
                              {recentPost?.title?.length > 55
                                ? recentPost?.title?.slice(0, 55) + '...'
                                : recentPost?.title}
                            </p>

                            <small className="flex pt-2">
                              {recentPost?.uploadDate}
                            </small>
                          </div>
                        </a>
                      </Link>
                    </button>
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
      <Footer></Footer>
    </div>
  )
}

export default Blog
