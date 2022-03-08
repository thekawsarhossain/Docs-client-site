/* eslint-disable @next/next/no-img-element */
import SmsIcon from '@mui/icons-material/Sms'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SearchIcon from '@mui/icons-material/Search'
import { DELETE_BLOG } from '../../../Redux/Slices/blogSlice'
import { useDispatch } from 'react-redux'

const ProfileBlogs = (props) => {
  // DISPATCH REDUX HOOK HERE
  const dispatch = useDispatch()

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
        <div className="mb-8">
          <p className="flex justify-center ">
            <input
              style={{ minHeight: '30px' }}
              placeholder="Search"
              className=" rounded-l-lg py-1 px-2 text-2xl dark:text-white"
              type="text"
              onChange={props.searchText.bind(this)}
            />
            <button className="self-center rounded-r-lg bg-slate-400 px-3 py-2">
              <SearchIcon />
            </button>
          </p>
        </div>
        {/* Blogs list  */}
        <div className="grid grid-cols-12 gap-4">
          {props.dataSearch?.map((blog) => (
            <div
              key={blog._id}
              className="col-span-12 rounded bg-slate-100 p-5 shadow dark:bg-Docy-DarkM lg:col-span-6"
            >
              <div className="card-masonry">
                <div className="card">
                  <img
                    className="h-96 w-full rounded-t-lg object-cover"
                    src={blog?.image}
                    alt="blogImage"
                  />
                  <div style={{ minHeight: '135px' }} className=" pt-4 pb-8">
                    <h3 className="text-xl text-Docy-Dark dark:text-slate-100">
                      {/* {blog?.title} */}
                      {blog?.title.length > 70
                        ? blog?.title.slice(0, 70) + '...'
                        : blog?.title}
                    </h3>
                    <p className="mt-2 text-gray-300">
                      {blog?.uploadDate} - {blog?.uploadTime}
                    </p>
                  </div>
                  <div
                    style={{
                      padding: '1.25rem 1.75rem',
                      borderTop: '1px solid black',
                    }}
                    className="card-footer flex flex-wrap items-center bg-slate-100 dark:bg-Docy-DarkM"
                  >
                    <div
                      style={{ wordWrap: 'break-word' }}
                      className="flex flex-col"
                    >
                      <button
                        onClick={() => handleBlogDelete(blog?._id)}
                        className="p-2"
                      >
                        <DeleteForeverIcon
                          sx={{ fontSize: '35px' }}
                          className="hover:animate-bounce"
                        />{' '}
                      </button>
                    </div>
                    <div className="ml-auto hover:animate-bounce">
                      <SmsIcon sx={{ marginRight: '10px' }} />
                      {blog?.comment?.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileBlogs
