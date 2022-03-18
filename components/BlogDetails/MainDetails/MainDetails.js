/* eslint-disable @next/next/no-img-element */
import { Avatar, Box, Container, Fade, Modal } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import CheckIcon from '@mui/icons-material/Check'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import {
  ADD_COMMENT,
  ADD_TO_BLOG,
  ADD_TO_BLOGGER_DETAILS,
  fetchBlog,
} from '../../../Redux/Slices/blogSlice'
import { useEffect, useState } from 'react'
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
import Backdrop from '@mui/material/Backdrop'
import Paper from '@mui/material/Paper'
import REPORT_REASON from '../../../messages/ReportReason'

// modal style here
const modalStyle = {
  color: '#000',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
}
// modal content paper style here
const paperStyle = {
  margin: '10px 0',
  padding: '10px',
  fontWeight: 'bold',
}

const reportBlogReason = REPORT_REASON

const MainDetails = () => {
  // react redux hook here
  const dispatch = useDispatch()

  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router?.query?.id

  // modal state here
  const [open, setOpen] = useState(false)

  useEffect(() => {
    dispatch(fetchBlog(id))
  }, [dispatch, id])

  // getting user info from db here
  const userInfoFromDB = useSelector(
    (state) => state?.reducers?.user?.userInfoFromDB
  )

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)

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
      fetch(`https://polar-hamlet-38117.herokuapp.com/blog/${blog?._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((result) => {})
        .catch((e) => alert('Something went wrong !'))
      dispatch(ADD_COMMENT(payload))
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
      fetch(`https://polar-hamlet-38117.herokuapp.com/user`, {
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
            alert('there is an problem we found, try again !')
          }
        })
        .catch((e) => alert('Some thing went wrong !'))
      dispatch(fetchUserData(user?.email))
    } else {
      alert('For folllow you need to login !')
    }
  }
  // report reason state here
  const [reportReason, setReportReason] = useState('')
  console.log(reportReason)
  // report blog handler here
  const handleReport = () => {
    if (user?.email) {
      if (!reportReason) {
        alert('You have to select a reason for reporting !')
      } else {
        const payload = {
          reportReason,
          reportedBy: userInfoFromDB,
        }
        fetch(
          `https://polar-hamlet-38117.herokuapp.com/blog/${blog?._id}/reportBlog`,
          {
            // mode: 'no-cors',
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(payload),
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result?.acknowledged) {
              // dispatch(fetchBlog(id))
              alert('reported successfully')
            }
          })
          .catch((e) => console.log(e.message))
          .finally(setOpen(false))
      }
    } else {
      alert('You have to login first for report !')
    }
  }

  // finding the matched email
  const [isMatched, setIsMatched] = useState()
  useEffect(() => {
    // finding the blogger id and the user following list if they match then we will disabled the following btn
    const match = userInfoFromDB?.following?.find((followerInfo) => {
      return blog?.blogger?.email === followerInfo?.email
    })
    setIsMatched(match)
  }, [blog?.blogger?.email, userInfoFromDB?.following])

  //
  const [isMatchedReport, setIsMatchedReport] = useState()
  useEffect(() => {
    dispatch(fetchBlog(id))
    // finding the reported user and the match blog
    const match = blog?.reports?.find((report) => {
      return user?.email === report?.reportedBy?.email
    })
    setIsMatchedReport(match)
  }, [blog?.reports, user?.email, dispatch, id])

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
              {blog?.blogger?.email === user?.email ? (
                <span className="btn rounded-sm border p-2 px-6 font-medium">
                  Reported by {blog?.reports?.length} user
                </span>
              ) : isMatchedReport ? (
                <button
                  style={{
                    border: '1px solid',
                    padding: '8px',
                  }}
                  className="btn hover:text- rounded-md border-8 border-sky-500 p-2 text-gray-500 dark:hover:text-gray-200"
                >
                  <FlagIcon /> Reported
                </button>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  style={{
                    border: '1px solid',
                    padding: '8px',
                  }}
                  className="btn hover:text- rounded-md border-8 border-sky-500 p-2 text-gray-500 dark:hover:text-gray-200"
                  disabled={isMatchedReport ? true : false}
                >
                  <FlagIcon />{' '}
                  {isMatchedReport ? 'Reported' : 'Report this blog'}
                </button>
              )}
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
                  className="mx-auto border border-white object-cover p-1"
                  src={blog?.blogger?.image}
                  alt="blogger-image"
                />
              </div>

              <button
                className="w-full"
                onClick={() => dispatch(ADD_TO_BLOGGER_DETAILS(blog?.blogger))}
              >
                <Link href={`/blog/blogger/${blog?.blogger?._id}`}>
                  <a>
                    <h1 className="w-full py-2 text-center font-sans text-4xl font-bold hover:underline">
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

              <div className="flex justify-center">
                {/* following btn here  */}
                {isMatched ? (
                  <button className="my-3 cursor-not-allowed rounded-md bg-indigo-700 py-3 px-4 font-bold text-white hover:bg-indigo-600">
                    Following
                  </button>
                ) : user?.email !== blog?.blogger?.email ? (
                  <button
                    onClick={() => handleFollow(blog.blogger)}
                    className="my-3 rounded-md bg-indigo-700 py-3 px-4 font-bold text-white hover:bg-indigo-600"
                  >
                    Follow
                  </button>
                ) : (
                  ''
                )}
              </div>
            </div>
            {/* Other posts  */}
            <div className=" recent-blog mt-10 mb-10 rounded bg-slate-100 p-4 text-center dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">Other Posts</h4>
              <hr />
              {otherPosts?.map((otherPost) => (
                <div key={otherPost?._id} className="recent-blog mt-6">
                  <div className=" flex">
                    <img
                      className="h-32 w-32 rounded object-cover"
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

        {/* modal content start here  */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={modalStyle}>
              <h3 className="w-full">Why do you want to report this blog ? </h3>

              {Object.keys(reportBlogReason).map((key) => (
                <button
                  className="my-2 w-full bg-gray-50 p-2 text-left font-semibold"
                  onClick={(e) => setReportReason(e.target.value)}
                  key={key}
                  value={key}
                >
                  {key === reportReason && (
                    <span className="pr-2 text-green-600">
                      {' '}
                      <CheckIcon />{' '}
                    </span>
                  )}
                  {reportBlogReason[key]}
                </button>
              ))}
            </Box>
          </Fade>
        </Modal>
        {/* modal content end here  */}
      </Container>
    </div>
  )
}

export default MainDetails
