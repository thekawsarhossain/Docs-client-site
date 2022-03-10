/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    <div className="mt-5 h-full">
      <div className="grid grid-cols-12 gap-6">
        {/* {dataSearch.map((blog) => ()} */}
        {dataSearch?.map((blog) => (
          <div key={blog._id} className="col-span-3">
            <div className="flex  items-center justify-center">
              <div className=" rounded border border-gray-100 bg-white hover:shadow-lg dark:bg-gray-900">
                <img src={blog?.image} className="w-full rounded-t" alt="" />

                <div className="ml-10 flex">
                  <img
                    src={blog?.blogger?.image}
                    className="-mt-6 h-16 w-16 rounded-full border-4 border-white shadow-lg"
                    alt=""
                  />
                </div>

                <p className="px-10 pt-3 pb-2 font-bold text-black dark:text-slate-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  expedita quis ipsa esse, necessitatibus ut voluptate, nihil
                  deserunt harum dignissimos sapiente voluptatem praesentium
                  saepe tenetur quia, commodi fuga quos reiciendis! Enim labore
                  corporis non quos quibusdam minus ut, consequatur quo!
                </p>

                <p className="px-10 text-sm font-semibold text-gray-500 dark:text-Docy-White">
                  by
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    OfficialAPC
                  </a>
                </p>

                <p className="mb-5 px-10 py-2 text-gray-500 dark:text-slate-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  explicabo necessitatibus accusantium libero, similique itaque
                  atque repellendus neque sed eaque.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageBlogs
