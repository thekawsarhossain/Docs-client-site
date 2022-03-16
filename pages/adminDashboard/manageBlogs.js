/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
import { useSelector } from 'react-redux'

const ManageBlogs = () => {
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  // console.log(blogs)
  return (
    <DashboardLayout>
      <div className="h-full bg-slate-100">
        <div className="grid grid-cols-12 gap-10">
          {blogs.map((blog) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="flex items-center justify-center">
                <div className=" rounded-lg border border-gray-100 bg-white hover:shadow-lg dark:bg-Docy-Dark">
                  <div className="relative h-0 pb-2/3 sm:pt-1/3 lg:pt-2/3">
                    <img
                      src={blog?.image}
                      className="absolute inset-0 h-full w-full rounded-lg rounded-t-lg object-cover shadow-lg"
                      alt=""
                    />
                  </div>

                  <div className="ml-10 flex">
                    {blog.blogger.img ? (
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

                  <p className="text-truncate... overflow-hidden px-10 pt-3 pb-2 font-bold text-black dark:text-slate-50">
                    {blog.title.split(' ').slice(0, 5).join(' ')}
                  </p>

                  <p className="px-10 text-sm font-semibold text-gray-500 dark:text-Docy-White">
                    by
                    <a className="text-blue-500 hover:text-blue-700">
                      {blog?.blogger?.displayName}
                    </a>
                  </p>

                  <p className="mb-5 px-10 py-2 text-gray-500 dark:text-slate-100">
                    A collection of 10,000 Angry Pitbulls. Angry Pitbull Club is
                    a collection of 10,000 unique, digital Pitbull NFT
                    collectibles that represent community...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ManageBlogs
