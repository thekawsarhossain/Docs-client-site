/* eslint-disable @next/next/no-img-element */
import SmsIcon from '@mui/icons-material/Sms'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SearchIcon from '@mui/icons-material/Search'
import { DELETE_BLOG, fetchBlogs } from '../../../Redux/Slices/blogSlice'
import { useDispatch } from 'react-redux'
import { Avatar, Grid } from '@mui/material'
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import { useEffect } from 'react'

const ProfileBlogs = (props) => {
  // DISPATCH REDUX HOOK HERE
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  const handleBlogDelete = async (id) => {
    console.log(id)
    const procced = window.confirm('Are you sure you want DELETE ?')

    if (procced) {
      try {
        const response = await fetch(
          `https://polar-hamlet-38117.herokuapp.com/blog/${id}`,
          {
            method: 'DELETE',
            header: { 'content-type': 'application/json' },
          }
        )
        const result = await response.json()
        if (result?.acknowledged) {
          dispatch(DELETE_BLOG(id))
        } else {
          alert('there is an error we found !')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }

  return (
    <div className=" my-5">
      <div>
        {/* <div className="mb-8">
          <p className="flex justify-center ">
            <input
              style={{ minHeight: '30px' }}
              placeholder="Search"
              className="rounded-l-lg border py-1 px-2 text-2xl dark:text-white"
              type="text"
              onChange={props.searchText.bind(this)}
            />
            <button className="self-center rounded-r-lg bg-slate-400 px-3 py-2">
              <SearchIcon />
            </button>
          </p>
        </div> */}
        <form
          style={{
            boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
          }}
          role="search"
          method="get"
          id="scisco-user-search-form"
          className="relative mb-10 mt-5 rounded-md border-0 p-6 dark:bg-Docy-DarkM"
        >
          <div
            style={{ marginRight: '-10px', marginLeft: '-10px' }}
            className="form-row grid grid-cols-12"
          >
            <div className="col-span-12">
              <div
                style={{
                  boxShadow: '0 3px 2px rgb(233 236 239 / 5%)',
                  borderRadius: '0.25rem',
                  transition: 'all .15s ease-in-out',
                  position: 'relative',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'stretch',
                  width: '100%',
                }}
                className="input-group"
              >
                <input
                  onChange={props.searchText.bind(this)}
                  type="text"
                  className="form-control"
                  minLength="3"
                  placeholder="Search by name..."
                  name="qa_user"
                  style={{
                    display: ' block',
                    width: '100%',
                    height: 'calc(1.5em + 1.25rem + 2px)',
                    padding: '0.625rem 0.85rem',
                    fontSize: '.9rem',
                    fontWeight: '400',
                    lineHeight: '1.5',
                    color: '#525f7f',
                    backgroundColor: '#fff',
                    backgroundClip: ' padding-box',
                    border: ' 1px solid rgba(0,0,0,0.1)',
                    borderRadius: '0.25rem',
                    boxShadow: '0 3px 2px rgb(233 236 239 / 5%)',
                    transition: 'all .2s ease-in-out',
                  }}
                />
                <div
                  style={{ marginleft: '-1px' }}
                  className="input-group-append"
                >
                  <button
                    style={{
                      borderTopLeftRadius: '0',
                      borderBottomLeftRadius: '0',
                      position: 'relative',
                      zIndex: '2',
                      transform: 'none !important',
                    }}
                    type="submit"
                    className="btn btn-info"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* Blogs list  */}
        {/* here start show blog section */}

        {props.dataSearch?.map((blog) => (
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
              <div className=" min-h-72 bg-slate-100  px-6  py-5 hover:shadow dark:bg-Docy-DarkM md:h-64 md:rounded">
                <div className="flex justify-between">
                  <span className="text-red-400">{blog?.category}</span>
                  <button
                    onClick={() => handleBlogDelete(blog?._id)}
                    className=""
                  >
                    <DeleteForeverIcon
                      sx={{ fontSize: '35px' }}
                      className="hover:animate-bounce"
                    />{' '}
                  </button>
                </div>
                <Link
                  onClick={() => dispatch(ADD_TO_BLOG(blog))}
                  href={`/blog/${blog?._id}`}
                >
                  <a>
                    <h3 className="cursor-pointer pt-4 pb-10 font-bold hover:underline ">
                      {blog.title}
                    </h3>
                  </a>
                </Link>
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
                      <ForumOutlinedIcon sx={{ width: 18, height: 18 }} />{' '}
                      {blog?.comment?.length}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  )
}

export default ProfileBlogs
