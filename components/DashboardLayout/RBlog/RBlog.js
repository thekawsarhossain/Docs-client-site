import { useSelector } from 'react-redux'

const RBlog = () => {
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  //  console.log(blogs);
  const reportedBlog = blogs?.filter((td) => td?.reports !== blogs?.reports)
  //  console.log(reportedBlog)
  return (
    <div className="col-span-12 mx-2  mt-5 md:col-span-6">
      <div>
        <div className="block items-center divide-gray-100 sm:flex md:divide-x"></div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <table className="min-w-full table-fixed divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium uppercase text-gray-500"
                      >
                        Blog Title
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium uppercase text-gray-500"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium uppercase text-gray-500"
                      >
                        Total Report
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium uppercase text-gray-500"
                      >
                        Reason
                      </th>
                      <th scope="col" className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {reportedBlog?.map((blog) => (
                      <tr key={blog?._id} className="hover:bg-gray-100">
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500">
                          <h4 className="  font-semibold text-gray-900">
                            {blog?.title?.slice(0, 40)} ....
                          </h4>
                        </td>
                        <td className="whitespace-nowrap p-4 text-base font-medium text-gray-900">
                          {blog?.category}
                        </td>
                        <td className="whitespace-nowrap p-4 text-base font-medium text-gray-900">
                          {blog?.reports?.length}
                        </td>
                        <td className="whitespace-nowrap p-4 text-base font-medium text-gray-900">
                          {blog?.reports[0]?.reportReason}
                        </td>
                        <td className="space-x-2 whitespace-nowrap p-4">
                          <button
                            type="button"
                            data-modal-toggle="delete-product-modal"
                            className="inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                          >
                            <svg
                              className="mr-2 h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Delete item
                          </button>
                        </td>
                      </tr>
                    ))}
                    {/* {{ end -}} */}
                    {/* {{< /products.inline >}}                        */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RBlog
