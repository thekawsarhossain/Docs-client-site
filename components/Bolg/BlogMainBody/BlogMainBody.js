import { Box, Container } from '@mui/material'
import BlogList from './BlogList'
import SideBar from './SideBar'
import SearchIcon from '@mui/icons-material/Search'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TO_BLOG } from '../../../Redux/Slices/blogSlice'
import { useState } from 'react'

const BlogMainBody = () => {
  // react redux hook here
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
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  dataSearch.reverse()
  return (
    <div>
      <div style={{ backgroundColor: '#21242c' }}>
        {/* Sub-banner section  */}
        <div>
          <Box sx={{ background: '#1F3341' }}>
            <Container sx={{ color: 'white', py: 1 }}>
              <div className="flex flex-col justify-between sm:flex-row ">
                {/* Page title  */}
                <div className="hidden items-center	text-sm	sm:flex">
                  <>
                    <Link href="/">
                      <a className="text-gray-400">Home</a>
                    </Link>
                    <ArrowForwardIosRoundedIcon sx={{ fontSize: '15px' }} />
                  </>
                  <>Blogs</>
                </div>
                {/* Search bar  */}
                <div className="">
                  <p className="flex justify-center ">
                    <input
                      style={{ minHeight: '30px' }}
                      placeholder="Search"
                      className="rounded-l-lg py-1 px-2 text-black"
                      type="text"
                      onChange={searchText.bind(this)}
                    />
                    <button className="self-center rounded-r-lg bg-slate-400 px-3 py-1">
                      <SearchIcon />
                    </button>
                  </p>
                </div>
              </div>
            </Container>
          </Box>
        </div>
        <Container>
          <div className="grid grid-cols-12 gap-6 py-8">
            <div className="col-span-12 md:col-span-8 xl:col-span-9">
              <BlogList dataSearch={dataSearch}></BlogList>
            </div>
            <div className="col-span-12 text-white md:col-span-4 xl:col-span-3">
              <SideBar></SideBar>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default BlogMainBody
