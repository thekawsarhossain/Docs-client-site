import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DetailsHeroSection from '../../components/BlogDetails/DetailsHeroSection/DetailsHeroSection'
import MainDetails from '../../components/BlogDetails/MainDetails/MainDetails'
import Footer from '../../components/Shared/Footer/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_COMMENT } from '../../Redux/Slices/blogSlice'

const Id = () => {
  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router.query.id

  // react redux hook here
  const dispatch = useDispatch()

  // getting the match blog with id
  const blog = useSelector((state) => state?.reducers?.blogs?.blog)

  return (
    <div>
      <div className="font-serif">
        <DetailsHeroSection blog={blog} />
        <MainDetails blog={blog} />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Id
