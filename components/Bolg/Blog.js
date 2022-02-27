import Footer from '../Shared/Footer/Footer'
import BlogHeroSection from './BlogHeroSection/BlogHeroSection'
import BlogMainBody from './BlogMainBody/BlogMainBody'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchBlogs } from '../../Redux/Slices/blogSlice'

const Blog = () => {
  // react redux hook here
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data here
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  return (
    <div>
      <BlogHeroSection></BlogHeroSection>
      <BlogMainBody></BlogMainBody>
      <Footer></Footer>
    </div>
  )
}

export default Blog
