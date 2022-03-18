import { Avatar, Container, Grid } from '@mui/material'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {
  ADD_TO_QUESTION,
  fetchQuestions,
} from '../../../Redux/Slices/questionSlice'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useEffect } from 'react'
import SvgButton from '../../Shared/SvgButton/SvgButton'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

const AskQuestion = () => {
  // DISPATCH REDUX HOOK HERE
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data
  useEffect(() => {
    dispatch(fetchQuestions())
  }, [dispatch])

  // getting all blogs from redux here
  const blogs = useSelector(
    (state) => state?.reducers?.questions?.questions
  ).slice(0, 3)
  //   blogs.reverse().slice(0, 6)
  console.log(blogs)
  return (
    <div>
      <Container>
        <div className="pt-16 pb-20">
          <div className="flex flex-col justify-center md:flex-row md:justify-between">
            <h1
              style={{
                lineHeight: '66px',
              }}
              className="mb-4 text-center text-4xl font-bold text-Docy-Dark dark:text-white"
            >
              Questions
            </h1>
            <div className="mb-4 self-center">
              <Link href="/askQuestion">
                <a>
                  <span className="text-1xl rounded-lg bg-orange-500 px-3 py-3  font-semibold text-Docy-Dark dark:text-white">
                    Ask Question{' '}
                    <span className="">
                      <HelpOutlineIcon className="animate-pulse" />
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-12 gap-5">
            {' '}
            {blogs?.map((blog) => (
              <div key={blog._id} className="col-span-12">
                <button
                  className="w-full text-left"
                  onClick={() => dispatch(ADD_TO_QUESTION(blog))}
                >
                  <Link href={`/question/${blog?._id}`}>
                    <a>
                      <div className=" w-full rounded bg-slate-100 px-6 py-3 hover:shadow dark:bg-Docy-DarkGray md:px-8 md:py-5">
                        <p className="text-sm text-red-400">{blog.category}</p>
                        <h3 className="cursor-pointer pb-1 font-bold hover:underline ">
                          {blog.title}
                        </h3>
                        <div className="tag-container flex flex-wrap rounded-lg pb-2">
                          {blog?.tags?.map((tag, index) => {
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
                            <p>{blog?.answers?.length} answers</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/ask">
              <a>
                <SvgButton sx={{ textAlign: 'center', color: '#6ab3fb' }}>
                  {' '}
                  See All <KeyboardDoubleArrowRightIcon />
                </SvgButton>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AskQuestion
