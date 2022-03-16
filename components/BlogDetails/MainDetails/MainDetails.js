/* eslint-disable @next/next/no-img-element */
import { Avatar, Container } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import {
  ADD_COMMENT,
  ADD_TO_BLOG,
  ADD_TO_BLOGGER_DETAILS,
} from '../../../Redux/Slices/blogSlice'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchUserData } from '../../../Redux/Slices/userSlice'
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FlagIcon from '@mui/icons-material/Flag'

const MainDetails = () => {
  // react redux hook here
  const dispatch = useDispatch()

  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router?.query?.id
  console.log(id)

  // getting user info from db here
  const userInfoFromDB = useSelector(
    (state) => state?.reducers?.user?.userInfoFromDB
  )

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)

  // calling specfic blog depend on id here using redux
  useEffect(() => {
    if (blog === null) {
      fetch(`http://localhost:5000/blog/${id}`)
        .then((res) => res.json())
        .then((result) => console.log(result))
    }
  }, [blog, id])

  // getting the match blog with id
  const blog = useSelector((state) => state?.reducers?.blogs?.blog)

  // Related Posts
  const relatedPosts = blogs
    ?.filter((td) => td?.category === blog?.category && td?._id != blog?._id)
    .slice(0, 3)

  // Other Posts
  const otherPosts = blogs
    ?.filter(
      (td) => td?.blogger?._id === blog?.blogger?._id && td?._id != blog?._id
    )
    .slice(0, 3)

  // getting user info here
  const user = useSelector((state) => state?.reducers?.user?.currentUser)

  let time = new Date()
  const date = new Date().toLocaleDateString()
  const currentTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  // react hook form for comment
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm()

  const submitHandler = async (data) => {
    const randomNumber = (((1 + Math.random() + 10000000) * 0x10000) | 0)
      .toString(16)
      .substring(1)
    const payload = {
      _id: randomNumber,
      image: userInfoFromDB?.image,
      name: userInfoFromDB?.displayName,
      email: userInfoFromDB?.email,
      time: currentTime,
      date: date,
      comment: data.comment,
    }

    if (user?.email) {
      fetch(`http://localhost:5000/blog/${blog?._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result?.acknowledged) {
            dispatch(ADD_COMMENT(payload))
          }
        })
        .catch((e) => console.log(e))
      reset()
    } else {
      return alert('Go and login to comment !')
    }
  }

  // follow handler here
  const handleFollow = (blogger) => {
    const payload = {
      bloggerId: blogger?._id,
      userId: userInfoFromDB?._id,
    }
    if (userInfoFromDB) {
      fetch(`http://localhost:5000/user`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result?.acknowledged) {
            // dispatch(fetchUserData(user?.email))
            alert('started following !')
          } else {
            alert('there is an problem we found !')
          }
        })
        .catch((e) => alert(e.message))
        .finally(dispatch(fetchUserData(user?.email)))
    } else {
      alert('For folllow you need to login !')
    }
  }

  // finding the blogger id and the user following list if they match then we will disabled the following btn
  const isMatched = userInfoFromDB?.following?.find((followerInfo) => {
    return blog?.blogger?._id === followerInfo?.id
  })

  return (
    <div className="bg-slate-50 text-Docy-Dark dark:bg-Docy-AlmostBlack dark:text-white">
      <Container>
        <div className="grid grid-cols-12 gap-6 py-8">
          {/* Main blog details  */}
          <div className="col-span-12 md:col-span-12 lg:col-span-8">
            {blog?.video && <video src={blog?.video} controls></video>}
            {/* Main documentation  */}
            <div
              id="documentation"
              dangerouslySetInnerHTML={{
                __html: `${blog?.documentation}`,
              }}
            ></div>

            {/* Report Blog  */}
            <div className="flex justify-center pt-8 pb-12">
              <button
                style={{
                  border: '1px solid',
                  // borderRadius: '10%',
                  padding: '8px',
                }}
                className="btn hover:text- rounded-md border-8 border-sky-500 p-2 text-gray-500 dark:hover:text-gray-200"
              >
                <FlagIcon /> Report this blog
              </button>
            </div>

            {/* Related post  */}
            <div>
              <h1 className="pb-4 text-2xl font-bold text-Docy-Dark dark:text-white">
                Related Post
              </h1>
              <div className="grid grid-cols-12 gap-4 text-Docy-Dark dark:text-white">
                {relatedPosts?.map((post) => (
                  <div
                    key={post?._id}
                    className="col-span-12 md:col-span-6 lg:col-span-4"
                  >
                    <div>
                      <img
                        className="h-40 w-full rounded-lg object-cover"
                        src={post?.image}
                        alt="blogImage"
                      />
                    </div>
                    <div>
                      <p className="pt-3 pb-1 font-sans text-sm">
                        {post?.uploadDate} ~ {post?.uploadTime}
                      </p>
                      <Link
                        onClick={() => dispatch(ADD_TO_BLOG(blog))}
                        href={`/blog/${post?._id}`}
                      >
                        <a>
                          <h4 className="pb-2 text-xl font-semibold hover:underline">
                            {post?.title}
                          </h4>
                        </a>
                      </Link>

                      <div className="flex">
                        <div className="self-center">
                          {' '}
                          <div className="scisco-verified">
                            <Avatar
                              alt="Bloggers image"
                              src={post?.blogger?.image}
                              sx={{ width: 40, height: 40 }}
                            />
                          </div>
                        </div>
                        <div className="self-center pl-2">
                          <button
                            onClick={() =>
                              dispatch(ADD_TO_BLOGGER_DETAILS(post?.blogger))
                            }
                          >
                            <Link href={`/blog/blogger/${post?.blogger?._id}`}>
                              <a className="text-sm underline">
                                {post?.blogger?.displayName}
                              </a>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* comments section start from here   */}
            <div className="py-8 text-Docy-Dark dark:text-white">
              <h2 className="py-6 text-3xl font-bold">
                {blog?.comment?.length === 0 ? (
                  'There is no comments'
                ) : (
                  <span> Total comments - {blog?.comment?.length}</span>
                )}
              </h2>
              {blog?.comment?.map((comment) => (
                <div key={comment?._id}>
                  <div className="my-4 flex flex-col sm:flex-row">
                    <div>
                      <Avatar
                        alt="commenter image"
                        src={
                          comment?.image
                            ? comment?.image
                            : 'https://i.ibb.co/DMYmT3x/Generic-Profile.jpg'
                        }
                        sx={{ width: 56, height: 56 }}
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-2xl font-bold">{comment?.name}</h1>
                      <p className="font-sans">
                        {comment?.time} - {comment?.date}
                      </p>
                      <p className="py-4">{comment?.comment}</p>
                      {/* <div className="pb-5">
                        <ThumbDownAltIcon />
                        <ThumbUpIcon />
                        <ThumbDownAltOutlinedIcon />
                        <ThumbUpOutlinedIcon />
                      </div> */}
                      <hr />
                    </div>
                  </div>
                </div>
              ))}
              <div></div>
            </div>

            {/* submit comments  */}
            <div className="py-3">
              <div className="pb-4 text-white">
                <h2 className="text-3xl font-bold text-Docy-Dark dark:text-white">
                  Leave a Comment
                </h2>
                {/* <p>
                  Your email address will not be published. You can not change
                  your name and email*
                </p> */}
              </div>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="grid grid-cols-12 gap-4">
                  <textarea
                    rows="5"
                    className="col-span-12 w-full rounded-lg p-2"
                    placeholder="Write your comment here "
                    {...register('comment', {
                      required: {
                        value: true,
                      },
                    })}
                  />
                </div>
                <button
                  type="submit"
                  className="my-3 rounded-md bg-indigo-700 py-3 px-4 font-bold text-white hover:bg-indigo-600"
                >
                  Post Comment
                </button>
              </form>
            </div>
            {/*  comment block end here   */}
          </div>

          {/* Side bar  */}
          <div className="col-span-12 text-Docy-Dark dark:text-Docy-White md:col-span-12 lg:col-span-4">
            {/* Bloggers profile */}
            <div className="pb-3">
              <div>
                <img
                  className="h-56 w-80 border border-white object-cover p-1"
                  src={blog?.blogger?.image}
                  alt="blogger-image"
                />
              </div>

              {/* following btn here  */}
              {isMatched ? (
                <button className="my-3 w-80 cursor-not-allowed rounded-md bg-indigo-700 py-3 px-4 font-bold text-white hover:bg-indigo-600">
                  Following
                </button>
              ) : user?.email !== blog?.blogger?.email ? (
                <button
                  onClick={() => handleFollow(blog.blogger)}
                  className="my-3 w-80 rounded-md bg-indigo-700 py-3 px-4 font-bold text-white hover:bg-indigo-600"
                >
                  Follow
                </button>
              ) : (
                ''
              )}

              <button
                onClick={() => dispatch(ADD_TO_BLOGGER_DETAILS(blog?.blogger))}
              >
                <Link href={`/blog/blogger/${blog?.blogger?._id}`}>
                  <a>
                    <h1 className="py-2 font-sans text-4xl font-bold underline">
                      {blog?.blogger?.displayName}
                    </h1>
                  </a>
                </Link>
              </button>

              {/* <p>
                James Bond jolly good happy days smashing barney bonnet bits and
                bobs loo.!
              </p> */}

              <p className="text-center">{blog?.blogger?.profession}</p>
            </div>
            {/* Other posts  */}
            <div className=" recent-blog mt-10 mb-10 rounded bg-slate-100 p-4 text-center dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">Other Posts</h4>
              <hr />
              {otherPosts?.map((otherPost) => (
                <div key={otherPost?._id} className="recent-blog mt-6">
                  <div className=" flex">
                    <img
                      className="h-32 w-32 rounded "
                      src={otherPost?.image}
                      alt=""
                    />
                    <button onClick={() => dispatch(ADD_TO_BLOG(blog))}>
                      <Link
                        className="self-center"
                        href={`/blog/${otherPost?._id}`}
                      >
                        <a>
                          <div className="px-6 text-left ">
                            <p className="cursor-pointer font-medium hover:underline">
                              {/* {otherPost?.title} */}
                              {otherPost?.title?.length > 55
                                ? otherPost?.title?.slice(0, 55) + '...'
                                : otherPost?.title}
                            </p>

                            <small className="flex pt-2">
                              {otherPost?.uploadDate}
                            </small>
                          </div>
                        </a>
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Stay In Touch */}
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
            {/* Post Categories */}
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
            {/* Tag list  */}
            <div className="mb-10 rounded bg-slate-100 p-6 text-center dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">Tags</h4>
              <hr />
              <div
                style={{ minHeight: '150px', maxWidth: '500px' }}
                className="tag-container my-2 flex flex-wrap rounded-lg  py-4 "
              >
                {blog?.tags?.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="m-1 h-fit rounded-lg bg-Docy-paleGeen  p-2 text-Docy-Dark"
                    >
                      {tag}{' '}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MainDetails
