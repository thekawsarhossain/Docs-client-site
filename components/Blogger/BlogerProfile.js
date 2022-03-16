/* eslint-disable jsx-a11y/alt-text */

import { Container } from '@mui/material'
import Footer from '../Shared/Footer/Footer'

/* eslint-disable @next/next/no-img-element */
const BlogerProfile = () => {
  return (
    <div>
      <Container>
        <div className="bg-gray-100 dark:bg-Docy-DarkGray">
          <div className="container mx-auto my-5 p-5">
            <div className="no-wrap md:-mx-2 md:flex">
              {/* <!-- Left Side --> */}
              <div className="w-full md:mx-2 md:w-3/12">
                {/* <!-- Profile Card --> */}
                <div className="border-t-4 border-green-400 bg-white p-3 dark:bg-Docy-Dark">
                  <div className="image overflow-hidden">
                    <img
                      className="mx-auto h-auto w-full"
                      src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      alt=""
                    />
                  </div>
                  <h1 className="my-1 text-xl font-bold leading-8 text-gray-900 dark:text-slate-50">
                    Jane Doe
                  </h1>
                  <h3 className="font-lg text-semibold leading-6 text-gray-600 dark:text-slate-300">
                    Owner at Her Company Inc.
                  </h3>
                  <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eligendi dolorum sequi illum qui unde
                    aspernatur non deserunt
                  </p>
                  <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm dark:bg-Docy-DarkGray dark:text-slate-300">
                    {/* <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        <span className="rounded bg-green-500 py-1 px-2 text-sm text-white ">
                          Active
                        </span>
                      </span>
                    </li> */}
                    <li className="flex items-center py-3">
                      <span>Member since</span>
                      <span className="ml-auto">Nov 07, 2016</span>
                    </li>
                  </ul>
                </div>
                {/* <!-- End of profile card --> */}
                <div className="my-4"></div>
                {/* <!-- Friends card --> */}
                <div className="bg-white p-3 hover:shadow dark:bg-Docy-Dark">
                  <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-gray-900">
                    <span className="text-green-500">
                      <svg
                        className="h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span className="text-black dark:text-white">
                      Similar Profiles
                    </span>
                  </div>
                  <div className="grid grid-cols-3 ">
                    <div className="my-2 text-center">
                      <img
                        className="mx-auto h-16 w-16 rounded-full"
                        src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                        alt=""
                      />
                      <a
                        href="#"
                        className="text-main-color text-black dark:text-white"
                      >
                        Kojstantin
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End of friends card --> */}
              </div>
              {/* <!-- Right Side --> */}
              <div className="mt-10 mb-6 h-64 w-full sm:mt-0 md:w-9/12">
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <div className="rounded-sm bg-white p-3 shadow-sm dark:bg-Docy-Dark">
                  <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900 dark:text-white">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className=" tracking-wide">About</span>
                  </div>
                  <div className="text-gray-700 dark:text-slate-300">
                    <div className="grid text-base md:grid-cols-2">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <div className="px-4 py-2 dark:text-slate-400">
                          Female
                        </div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Current Address
                        </div>
                        <div className="px-4 py-2 dark:text-slate-400">
                          Beech Creek, PA, Pennsylvania
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">WEBSITE</div>
                        <div className="px-4 py-2 dark:text-slate-400">
                          www.abc.com
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email.</div>
                        <div className="px-4 py-2">
                          <a
                            className="text-blue-800 dark:text-blue-300"
                            href="mailto:jane@example.com"
                          >
                            jane@example.com
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2 dark:text-slate-400">
                          Feb 06, 1998
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button className="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-Docy-DarkM dark:text-blue-300 dark:hover:bg-Docy-DarkGray">
                    Show Full Information
                  </button> */}
                </div>
                {/* <!-- End of about section --> */}

                <div className="my-4"></div>

                {/* <!-- Blogs --> */}

                {/* <!-- End of profile tab --> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default BlogerProfile
