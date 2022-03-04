/* eslint-disable @next/next/no-img-element */
import { Avatar, Container } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_COMMENT, fetchBlog } from '../../../Redux/Slices/blogSlice'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const MainDetails = () => {
  // react redux hook here
  const dispatch = useDispatch()

  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router.query.id

  // calling specfic blog depend on id here using redux
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
  const relatedPosts = blogs.filter(
    (td) => td?.category === blog?.category && td?._id != blog?._id
  )
  const otherPosts = blogs.filter(
    (td) => td?.blogger?._id === blog?.blogger?._id && td?._id != blog?._id
  )

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

    fetch(`https://enigmatic-atoll-27842.herokuapp.com/blog/${blog?._id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((e) => console.log(e))

    dispatch(ADD_COMMENT(payload))
    reset()
  }

  return (
    <div style={{ backgroundColor: '#21242c' }} className="text-white">
      <Container>
        <div className="grid grid-cols-12 gap-6 py-8">
          <div className="col-span-12 md:col-span-12 lg:col-span-8">
            {blog?.video && <video src={blog?.video} controls></video>}
            {/* <DemoBlog data={.data}></DemoBlog> */}

            {/* Main documentation  */}
            <div
              id="documentation"
              dangerouslySetInnerHTML={{
                __html: `${blog?.documentation}`,
              }}
            ></div>

            {/* summary  */}
            <div
              style={{ minHeight: '200px' }}
              className="my-8 flex flex-col rounded-lg bg-gray-50 p-3 md:flex-row"
            >
              <div className="p-6">
                <Avatar
                  alt="Remy Sharp"
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-single/about_img.jpg"
                  sx={{ width: 56, height: 56 }}
                />
              </div>
              <div className="self-center">
                <h1 className="pb-3 text-xl font-bold">Jason Response</h1>
                <p>
                  Loo tomfoolery jolly good bloke chancer chimney pot nice one
                  a, he nicked it mufty Oxford say wind up bits and bobs cheeky
                  bugger, amongst cack bugger Eaton William skive off.!
                </p>
              </div>
            </div>

            {/* Related post  */}
            <div>
              <h1 className="pb-4 text-2xl font-bold text-white">
                Related Post
              </h1>
              <div className="grid grid-cols-12 gap-4 text-white">
                {relatedPosts.map((post) => (
                  <div
                    key={post?._id}
                    className="col-span-12 md:col-span-6 lg:col-span-4"
                  >
                    <div>
                      <img
                        className="rounded-lg"
                        src={post?.image}
                        alt="blogImage"
                      />
                    </div>
                    <div>
                      <p className="pt-3 pb-1 font-sans text-sm">
                        {post?.uploadDate} ~ {post?.uploadTime}
                      </p>
                      <h4 className="pb-2 text-xl font-semibold">
                        {post?.title}
                      </h4>
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
                          <p>
                            <small className="text-sm">
                              {post?.blogger?.displayName}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* comments section start from here   */}
            <div className="py-8 text-white">
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
                <h2 className="text-3xl font-bold">Leave a Comment</h2>
                {/* <p>
                  Your email address will not be published. You can not change
                  your name and email*
                </p> */}
              </div>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="grid grid-cols-12 gap-4">
                  {/* <input
                    type="text"
                    className="col-span-6 rounded-lg p-2"
                    placeholder="Name"
                    {...register('email', {
                      required: {
                        value: true,
                      },
                    })}
                  />
                  <input
                    type="text"
                    className="col-span-6 rounded-lg p-2"
                    placeholder="Email"
                  /> */}
                  <textarea
                    rows="5"
                    className="col-span-12 rounded-lg p-2"
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
                  className="my-3 rounded-md bg-teal-300 py-2 px-3 font-bold text-white hover:bg-teal-400"
                >
                  Post Comment
                </button>
              </form>
            </div>
            {/*  comment block end here   */}
          </div>

          {/* Side bar  */}
          <div className="col-span-12 text-white md:col-span-12 lg:col-span-4">
            {/* Bloggers profile */}
            <div className="pb-3">
              <div>
                <img
                  className="border border-white p-1"
                  src={blog?.blogger?.image}
                  alt=""
                />
              </div>
              <h1 className="py-2 font-sans text-4xl font-bold">
                {blog?.blogger?.displayName}
              </h1>
              <p>
                James Bond jolly good happy days smashing barney bonnet bits and
                bobs loo.!
              </p>
            </div>
            {/* Other posts  */}
            <div className="py-6">
              <h1 className="py-3 text-2xl font-bold">Other Posts</h1>
              <div>
                {otherPosts.map((otherPost) => (
                  <div
                    key={otherPost._id}
                    style={{ maxWidth: '450px' }}
                    className="grid grid-cols-12 gap-2 py-3"
                  >
                    <div className="col-span-5">
                      <img
                        className="rounded-lg"
                        src={otherPost.image}
                        alt=""
                      />
                    </div>
                    <div className="col-span-7">
                      <h3 className="text-base">{otherPost.title}</h3>
                      <p className="mt-3 font-sans text-sm">
                        {otherPost.uploadDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Post Categories */}
            <div className="py-6">
              <h3 className="pb-4 text-2xl font-bold">Post Categories</h3>
              <div>
                <ul className="list-disc text-lg">
                  <li className="ml-5">Creative</li>
                  <li className="ml-5">Inspiration</li>
                  <li className="ml-5">Lifestyle</li>
                  <li className="ml-5">News</li>
                  <li className="ml-5">Photography</li>
                  <li className="ml-5">Skill</li>
                  <li className="ml-5">Tourist Tours</li>
                  <li className="ml-5">Inspire</li>
                </ul>
              </div>
            </div>
            {/* Tag list  */}
            <div className="pt-4">
              <h1 className="pb-2 text-2xl">Tags</h1>
              <div
                style={{ minHeight: '150px', maxWidth: '500px' }}
                className="tag-container my-2 flex flex-wrap rounded-lg bg-slate-600 p-4"
              >
                {blog?.tags.map((tag, index) => {
                  return (
                    <div
                      style={{ backgroundColor: 'aliceblue' }}
                      key={index}
                      className="m-1 h-fit rounded-lg p-1"
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
