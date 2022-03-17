import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
import RUser from '../../components/DashboardLayout/RUser/RUser'
import RBlog from '../../components/DashboardLayout/RBlog/RBlog'
import Review from '../../components/DashboardLayout/Review/Review'
import { useSelector } from 'react-redux'
import Charts from './Chart/Chart'
import PieCharts from './Chart/PieCharts'

export default function Index() {
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  const userInfoFromDB = useSelector(
    (state) => state?.reducers?.user?.userInfoFromDB
  )
  console.log(userInfoFromDB)
  return (
    <DashboardLayout>
      <div className="bg-slate-200 p-10 dark:bg-Docy-AlmostBlack">
        <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
          {/* <!-- Value card --> */}
          <div className="dark:bg-darker dar:text-white flex h-28 items-center justify-between rounded-md bg-white p-4 text-black dark:bg-Docy-Dark dark:text-white">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500">
                Value
              </h6>
              <span className="text-xl font-semibold">$30,000</span>
              <span className="ml-2 inline-block rounded-md bg-green-100 px-2 py-px text-xs text-green-500">
                +4.4%
              </span>
            </div>
            <div>
              <span>
                <svg
                  className="dark:text-primary-dark h-12 w-12 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* <!-- Users card --> */}
          <div className="dark:bg-darker flex h-28 items-center justify-between rounded-md bg-white p-4 text-black dark:bg-Docy-Dark dark:text-white">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500">
                Users
              </h6>
              <span className="text-xl font-semibold">
                {userInfoFromDB.length}
              </span>
              <span className="ml-2 inline-block rounded-md bg-green-100 px-2 py-px text-xs text-green-500">
                +2.6%
              </span>
            </div>
            <div>
              <span>
                <svg
                  className="dark:text-primary-dark h-12 w-12 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* <!-- Orders card --> */}
          <div className="dark:bg-darker flex h-28 items-center justify-between rounded-md bg-white p-4 text-black dark:bg-Docy-Dark dark:text-white">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500">
                Blogs
              </h6>
              <span className="text-xl font-semibold">{blogs.length}</span>
              <span className="ml-2 inline-block rounded-md bg-green-100 px-2 py-px text-xs text-green-500">
                +3.1%
              </span>
            </div>
            <div>
              <span>
                <svg
                  className="dark:text-primary-dark h-12 w-12 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* <!-- Tickets card --> */}
          <div className="dark:bg-darker flex h-28 items-center justify-between rounded-md bg-white p-4 text-black dark:bg-Docy-Dark dark:text-white">
            <div>
              <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500">
                Tickets
              </h6>
              <span className="text-xl font-semibold">20,516</span>
              <span className="ml-2 inline-block rounded-md bg-green-100 px-2 py-px text-xs text-green-500">
                +3.1%
              </span>
            </div>
            <div>
              <span>
                <svg
                  className="dark:text-primary-dark h-12 w-12 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="relative col-span-12">
            <div className="">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-gray-50 shadow-lg dark:bg-Docy-Dark">
                <div className="mb-0 rounded-t bg-transparent px-4 py-3">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-1 flex-grow">
                      <h6 className="text-blueGray-100 mb-1 text-xs font-semibold uppercase dark:text-white">
                        Overview
                      </h6>
                      <h2 className="text-xl font-semibold text-white">
                        Sales value
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex-auto p-4">
                  <div className="relative h-96 ">
                    <Charts />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-8">
            <RBlog />
          </div>
          <div className=" col-span-12 sm:col-span-4">
            <div className="relative mb-6 flex h-full w-full min-w-0 flex-col break-words rounded bg-gray-50 shadow-lg dark:bg-Docy-Dark">
              <PieCharts />
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-5">
          <RUser />
          <Review />
        </div>
      </div>
    </DashboardLayout>
  )
}
