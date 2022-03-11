/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'

const ManageBlogs = () => {
  const dispatch = useDispatch()

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  const [filter, setFilter] = useState('')
  const searchText = (event) => {
    setFilter(event.target.value)
  }
  let dataSearch = blogs?.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        ?.toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  dataSearch?.reverse()
  return (
    <DashboardLayout>
      <div className="h-full bg-slate-100">
        <div className="grid grid-cols-12 gap-6">
          {dataSearch.map((blog) => (
            <div
              key={blog._id}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="flex  items-center justify-center">
                <div className="w-full rounded-lg border border-gray-100 bg-white hover:shadow-lg dark:bg-Docy-Dark">
                  <img
                    className="h-80 w-full rounded rounded-t-lg object-cover"
                    src={blog.image}
                    // className="w-full"
                    alt=""
                  />

                  <div className="ml-4 flex">
                    <img
                      src={blog.blogger.image}
                      className="-mt-10 h-20 w-20 rounded-full border-4 border-white shadow-lg"
                      alt=""
                    />
                  </div>

                  <p className="px-4 pt-3 pb-2 font-bold text-black dark:text-slate-50">
                    {blog.blogger.displayName}
                  </p>

                  <p className="px-4 text-sm font-semibold text-gray-500 dark:text-Docy-White">
                    Category: {blog.category}
                  </p>

                  <p className="mb-5 h-20 px-4 py-2 text-gray-500 dark:text-slate-100">
                    {blog.title}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-span-4">
            <div className="flex  items-center justify-center">
              <div className=" rounded-lg border border-gray-100 bg-white hover:shadow-lg">
                <img
                  src="https://picsum.photos/500/300"
                  className="w-full rounded-t-lg"
                  alt=""
                />

                <div className="ml-10 flex">
                  <img
                    src="https://picsum.photos/50/50"
                    className="-mt-6 rounded-full border-4 border-white shadow-lg"
                    alt=""
                  />
                </div>

                <p className="px-10 pt-3 pb-2 font-bold">Angry Pitbull Club</p>

                <p className="px-10 text-sm font-semibold text-gray-500">
                  by
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    OfficialAPC
                  </a>
                </p>

                <p className="mb-5 px-10 py-2 text-gray-500">
                  A collection of 10,000 Angry Pitbulls. Angry Pitbull Club is a
                  collection of 10,000 unique, digital Pitbull NFT collectibles
                  that represent community...
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ManageBlogs
