import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'
import HeroSection from '../HeroSection/HeroSection'
import VideoList from '../VideoList/VideoList'
import Footer from '../../Shared/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VideoList />
      <CommunitiesCard />
      <Testimonial />
      {/* <Questions /> */}
      <Footer />
    </div>
  )
}

export default HomePage
