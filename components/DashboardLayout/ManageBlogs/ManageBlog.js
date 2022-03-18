/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';

const ManageBlog = () => {
  // const blogs = useSelector((state) => state?.reducers?.blogs?.blogs);
  const [blogs, setBlogs] = useState([])
  // here users
  useEffect(() => {

    fetch(`https://polar-hamlet-38117.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
  })
  // here blogs delete
  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure , you want to delete ?');
    if(proceed){
      const url =`https://polar-hamlet-38117.herokuapp.com/blog/${id}`
      fetch(url,{
          method: 'DELETE'
  
      })
          .then(res => res.json())
          .then(data =>{
              if(data){
               alert('Deleted successfully')
               const remaining = blogs.filter(order => order._id !== id)
               setBlogs(remaining)
              }
          })
  }
    
  }

  return (
    <div className="h-full bg-slate-100">
    <div className="grid grid-cols-12 gap-6">
      {blogs?.map((blog) => (
        <div key={blogs?._id} className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="flex items-center justify-center ">
            <div className=" rounded border border-gray-100 bg-white hover:shadow-lg dark:bg-Docy-Dark">
              <div className="h-80 ">
                <img
                  src={blog?.image}
                  className=" h-full w-96  rounded-t object-cover shadow-lg"
                  alt=""
                />
              </div>

              <div className="ml-10 flex">
                {blog?.blogger?.image ? (
                  <img
                    src={blog?.blogger?.image}
                    className="z-50 -mt-6 h-14 w-14 rounded-full border-4 border-white shadow-lg"
                    alt=""
                  />
                ) : (
                  <img
                    className="z-50 -mt-6 h-14 w-14 rounded-full border-4 border-white shadow-lg"
                    src="https://i.ibb.co/DMYmT3x/Generic-Profile.jpg"
                    alt=""
                  />
                )}
              </div>
               <div className="p-6  h-60">
               <h3 className=" overflow-hidden  text-black dark:text-slate-50">
                {blog?.title?.split(' ')?.slice(0, 8)?.join(' ')}
              </h3>

              <p className=" text-sm font-semibold text-gray-500 pt-2 dark:text-Docy-White">
                written by { '   '}
                <a className="text-blue-500 hover:text-blue-700">
                  {blog?.blogger?.displayName}
                </a>
              </p>
               <button onClick={()=>handleDelete(blog?._id)} className='text-red-500  py-2 px-4'><DeleteIcon/></button>
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ManageBlog;