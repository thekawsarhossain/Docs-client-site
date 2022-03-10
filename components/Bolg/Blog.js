import Footer from '../Shared/Footer/Footer'
import BlogHeroSection from './BlogHeroSection/BlogHeroSection'
import BlogMainBody from './BlogMainBody/BlogMainBody'
import authCheck from '../../HOC/withAuthCheck'

const Blog = () => {
  return (
    <div>
      <BlogHeroSection></BlogHeroSection>
      <BlogMainBody></BlogMainBody>
      <Footer></Footer>
    </div>
  )
}

export default authCheck(Blog)
