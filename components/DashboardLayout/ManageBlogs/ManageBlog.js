/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux'
const ManageBlog = () => {
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  return (
    <div className="h-full bg-slate-100">
      <div className="grid grid-cols-12 gap-6">
        {blogs?.map((blog) => (
          <div
            key={blogs?._id}
            className="col-span-12 md:col-span-6 lg:col-span-3"
          >
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
                <div className="h-40 p-6">
                  <h3 className=" overflow-hidden  text-black dark:text-slate-50">
                    {blog?.title?.split(' ')?.slice(0, 8)?.join(' ')}
                  </h3>

                  <p className=" pt-2 text-sm font-semibold text-gray-500 dark:text-Docy-White">
                    written by {'   '}
                    <a className="text-blue-500 hover:text-blue-700">
                      {blog?.blogger?.displayName}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageBlog
