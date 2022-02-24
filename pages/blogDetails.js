import DetailsHeroSection from '../components/BlogDetails/DetailsHeroSection/DetailsHeroSection'
import MainDetails from '../components/BlogDetails/MainDetails/MainDetails'
import Footer from '../components/Shared/Footer/Footer'

const BlogDetails = () => {
  return (
    <div>
      <div className="font-serif">
        <DetailsHeroSection></DetailsHeroSection>
        <MainDetails></MainDetails>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogDetails
