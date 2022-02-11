import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'
import VideoList from '../VideoList/VideoList'
import OnlineDoc from '../OnlineDoc/OnlineDoc'
import Footer from '../../Shared/Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CommunitiesCard />
      <OnlineDoc />
      <VideoList />
      <Questions />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default HomePage
