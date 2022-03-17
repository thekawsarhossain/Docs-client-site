import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="mt-5 flex justify-center gap-2 p-2">
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <a
              onClick={() => paginate(number)}
              href="#"
              className="hover:bg-primary-600 bg-primary-500 flex h-10 w-10 items-center justify-center rounded-full border active:bg-violet-700 border-theme font-bold text-gray-900 dark:border-gray-500 dark:text-white"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
