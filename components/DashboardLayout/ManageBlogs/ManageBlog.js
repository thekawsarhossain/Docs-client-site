/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import Link from 'next/link'
import { Avatar, Container } from '@mui/material'

const ManageBlog = () => {
  // const blogs = useSelector((state) => state?.reducers?.blogs?.blogs);
  const [blogs, setBlogs] = useState([])
  // here users
  useEffect(() => {
    fetch(`https://polar-hamlet-38117.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
  }, [])
  // here blogs delete
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure , you want to delete ?')
    if (proceed) {
      const url = `https://polar-hamlet-38117.herokuapp.com/blog/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert('Deleted successfully')
            const remaining = blogs.filter((order) => order._id !== id)
            setBlogs(remaining)
          }
        })
    }
  }

  return (
    <div className="h-full">
      <div className="grid grid-cols-12 gap-5">
        {blogs?.map((blog) => (
          <div
            key={blog?._id}
            className="col-span-12 min-h-full w-full rounded text-left font-serif  text-white shadow dark:text-Docy-Dark md:col-span-6 lg:col-span-4 xl:col-span-3"
            // onClick={() => dispatch(ADD_TO_BLOG(blog))}
          >
            <div className="min-h-full rounded-lg bg-slate-100 dark:bg-Docy-Dark">
              <img
                className="h-96 w-full rounded object-cover"
                src={blog?.image}
                alt="blogImage"
              />
              <div style={{ minHeight: '135px' }} className="px-4 pt-4 pb-8">
                <button
                  onClick={() => handleDelete(blog?._id)}
                  className="absolute -mt-16 py-2 text-red-500"
                >
                  <DeleteIcon />
                </button>
                <Link href={`/blog/${blog?._id}`}>
                  <a>
                    <h3 className="text-xl text-Docy-Dark hover:underline dark:text-slate-100">
                      {/* {blog?.title} */}
                      {blog?.title?.length > 70
                        ? blog?.title?.slice(0, 70) + '...'
                        : blog?.title}
                    </h3>
                  </a>
                </Link>
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
                    {blog?.comment?.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
          // <div key={blogs?._id} className="col-span-12 md:col-span-6 lg:col-span-3">
          //   <div className="flex items-center justify-center ">
          //     <div className=" rounded border border-gray-100 bg-white hover:shadow-lg dark:bg-Docy-Dark">
          //       <div className="h-80 ">
          //         <img
          //           src={blog?.image}
          //           className=" h-full w-96  rounded-t object-cover shadow-lg"
          //           alt=""
          //         />
          //       </div>

          //       <div className="ml-10 flex">
          //         {blog?.blogger?.image ? (
          //           <img
          //             src={blog?.blogger?.image}
          //             className="z-50 -mt-6 h-14 w-14 rounded-full border-4 border-white shadow-lg"
          //             alt=""
          //           />
          //         ) : (
          //           <img
          //             className="z-50 -mt-6 h-14 w-14 rounded-full border-4 border-white shadow-lg"
          //             src="https://i.ibb.co/DMYmT3x/Generic-Profile.jpg"
          //             alt=""
          //           />
          //         )}
          //       </div>
          //        <div className="p-6  h-60">
          //        <h3 className=" overflow-hidden  text-black dark:text-slate-50">
          //         {blog?.title?.split(' ')?.slice(0, 8)?.join(' ')}
          //       </h3>

          //       <p className=" text-sm font-semibold text-gray-500 pt-2 dark:text-Docy-White">
          //         written by { '   '}
          //         <a className="text-blue-500 hover:text-blue-700">
          //           {blog?.blogger?.displayName}
          //         </a>
          //       </p>
          //       {/* here  delete  */}
          //        <button onClick={()=>handleDelete(blog?._id)} className='text-red-500  py-2 px-4'><DeleteIcon/></button>
          //        </div>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  )
}

export default ManageBlog
