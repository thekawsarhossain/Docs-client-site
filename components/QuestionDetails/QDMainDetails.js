/* eslint-disable @next/next/no-img-element */
import { Avatar, Container } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
// import {
//   ADD_COMMENT,
//   ADD_TO_BLOG,
//   ADD_TO_BLOGGER_DETAILS,
//   fetchBlog,
// } from '../../../Redux/Slices/blogSlice'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import { fetchUserData } from '../../../Redux/Slices/userSlice'
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FlagIcon from '@mui/icons-material/Flag'
import {
  ADD_ANSWER,
  fetchQuestion,
  ADD_TO_QUESTION,
  fetchQuestions,
} from '../../Redux/Slices/questionSlice'
import dynamic from 'next/dynamic'
const QDTextEditor = dynamic(() => import('./QDTextEditor'), {
  ssr: false,
})

const QDMainDetails = (props) => {
  const [documentation, setDocumentation] = useState('')

  const dispatch = useDispatch()

  // next js hooks for dynamic routuing
  // const router = useRouter()
  const id = props?.question?._id
  console.log(props?.question?._id)

  // calling specfic blog depend on id here using redux
  useEffect(() => {
    dispatch(fetchQuestion(id))
  }, [dispatch, id])

  // getting user info from db here
  const userInfoFromDB = useSelector(
    (state) => state?.reducers?.user?.userInfoFromDB
  )

  // getting all blogs from redux here
  const questions = useSelector(
    (state) => state?.reducers?.questions?.questions
  )

  // getting the match blog with id
  const question = useSelector((state) => state?.reducers?.questions?.question)
  console.log(questions)

  // Related Posts
  const relatedPosts = questions
    .filter(
      (td) => td?.category === question?.category && td?._id != question?._id
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

  const blogData = (e) => {
    setDocumentation(e)
    console.log(e)
  }

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
      answers: documentation,
    }

    if (user?.email) {
      fetch(
        `https://polar-hamlet-38117.herokuapp.com/question/${question?._id}`,
        {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          // if (result?.acknowledged) {
          // }
        })
        .catch((e) => console.log(e))
      dispatch(ADD_ANSWER(payload))
      reset()
      console.log(payload)
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
  //   const isMatched = userInfoFromDB?.following?.find((followerInfo) => {
  //     return blog?.blogger?._id === followerInfo?.id
  //   })

  return (
    <div className="bg-slate-50 text-Docy-Dark dark:bg-Docy-AlmostBlack dark:text-white">
      <Container>
        <div className="grid grid-cols-12 gap-6 py-8">
          {/* Main blog details  */}
          <div className="col-span-12 md:col-span-12 lg:col-span-8">
            {/* Main documentation  */}
            <div
              id="documentation"
              dangerouslySetInnerHTML={{
                __html: `${question?.documentation}`,
              }}
            ></div>
            {/* Blogger info  */}
            <div className="pb-5">
              <div className="flex flex-row-reverse">
                <div className="self-center pl-2">
                  <p>
                    <small className="text-sm text-Docy-Dark dark:text-white">
                      {question?.blogger?.displayName}
                    </small>
                  </p>
                  <p>
                    <small className="font-sans text-sm text-Docy-Dark dark:text-white">
                      {question?.uploadDate} - {question?.uploadTime}
                    </small>
                  </p>
                </div>
                <div className="self-center">
                  <div className="scisco-verified">
                    <Avatar
                      alt="Bloggers image"
                      src={question?.blogger?.image}
                      sx={{ width: 40, height: 40 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* answers section start from here   */}
            <div className="py-8 text-Docy-Dark dark:text-white">
              <h2 className="py-6 text-3xl font-bold">
                {question?.answers?.length === 0 ? (
                  'There is no answer'
                ) : (
                  <span>{question?.answers?.length} - answers</span>
                )}
              </h2>
              {question?.answers?.map((answer) => (
                <div key={answer?._id}>
                  <div>
                    <hr />
                    <div className="pt-4">
                      <div
                        id="documentation"
                        dangerouslySetInnerHTML={{
                          __html: `${answer?.answers}`,
                        }}
                      ></div>
                    </div>
                    <div className="pb-10 pt-1">
                      <div className="flex flex-row-reverse">
                        <div className="self-center pl-2">
                          <p>
                            <small className="text-sm text-Docy-Dark dark:text-white">
                              {answer?.name}
                            </small>
                          </p>
                          <p>
                            <small className="font-sans text-sm text-Docy-Dark dark:text-white">
                              {answer?.date} - {answer?.time}
                            </small>
                          </p>
                        </div>
                        <div className="self-center">
                          <div className="scisco-verified">
                            <Avatar
                              alt="Bloggers image"
                              src={answer?.image}
                              sx={{ width: 40, height: 40 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div></div>
            </div>

            {/* submit answers  */}
            <div className="py-3">
              <div className="pb-4 text-white">
                <h2 className="text-3xl font-bold text-Docy-Dark dark:text-white">
                  Your Answer
                </h2>
              </div>
              <form onSubmit={handleSubmit(submitHandler)}>
                <QDTextEditor blogData={blogData}></QDTextEditor>
                <button
                  type="submit"
                  className="my-3 rounded-md bg-indigo-700 py-3 px-4 font-bold text-white hover:bg-indigo-600"
                >
                  Post Your Answer
                </button>
              </form>
            </div>
            {/*  comment block end here   */}
          </div>

          {/* Side bar  */}
          <div className="col-span-12 text-Docy-Dark dark:text-Docy-White md:col-span-12 lg:col-span-4">
            {/* Related questions */}
            <div className=" recent-blog mb-10 rounded bg-slate-100 p-4 text-center dark:bg-Docy-DarkGray">
              <h4 className="mb-2 font-bold">Related Question</h4>
              <hr />
              {relatedPosts.length === 0 && (
                <p className="pt-3 font-semibold">
                  There is no related question.
                </p>
              )}
              {relatedPosts?.map((relatedPost) => (
                <div key={relatedPost._id} className="recent-blog mt-6">
                  <div className=" flex">
                    <button onClick={() => dispatch(ADD_TO_QUESTION(question))}>
                      <Link
                        className="self-center"
                        href={`/question/${relatedPost?._id}`}
                      >
                        <a>
                          <div className="px-6 text-left ">
                            <p className="cursor-pointer font-medium hover:underline">
                              {relatedPost?.title.length > 55
                                ? relatedPost?.title.slice(0, 55) + '...'
                                : relatedPost?.title}
                            </p>

                            <small className="flex pt-2">
                              {relatedPost.uploadDate}
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
                {question?.tags.map((tag, index) => {
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

export default QDMainDetails
