/* eslint-disable @next/next/no-img-element */
const UserFollowers = () => {
  return (
    <div>
      <div className="mt-8 rounded-lg bg-slate-200 p-3 hover:shadow dark:bg-Docy-Dark">
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
          <span className="text-black dark:text-white">Followers</span>
        </div>
        <div className="grid grid-cols-3">
          <div className="my-2 text-center">
            <img
              className="mx-auto h-16 w-16 rounded-full"
              src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
              alt=""
            />
            <a href="#" className="text-main-color">
              Kojstantin
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-lg bg-slate-200 p-3 hover:shadow dark:bg-Docy-Dark">
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
          <span className="text-black dark:text-white">Following</span>
        </div>
        <div className="grid grid-cols-3">
          <div className="my-2 text-center">
            <img
              className="mx-auto h-16 w-16 rounded-full"
              src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
              alt=""
            />
            <a href="#" className="text-main-color">
              Kojstantin
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserFollowers
