/* eslint-disable @next/next/no-img-element */
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'

const manageBlogs = () => {
  return (
    <DashboardLayout>
      <div className="h-full bg-slate-100">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <div className="flex  items-center justify-center">
              <div className=" rounded-lg border border-gray-100 bg-white hover:shadow-lg dark:bg-Docy-Dark">
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

                <p className="px-10 pt-3 pb-2 font-bold text-black dark:text-slate-50">
                  Angry Pitbull Club
                </p>

                <p className="px-10 text-sm font-semibold text-gray-500 dark:text-Docy-White">
                  by
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    OfficialAPC
                  </a>
                </p>

                <p className="mb-5 px-10 py-2 text-gray-500 dark:text-slate-100">
                  A collection of 10,000 Angry Pitbulls. Angry Pitbull Club is a
                  collection of 10,000 unique, digital Pitbull NFT collectibles
                  that represent community...
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
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
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default manageBlogs
