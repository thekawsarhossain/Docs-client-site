import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'
import HeroSection from '../HeroSection/HeroSection'
import VideoList from '../VideoList/VideoList'

const HomePage = () => {
  return (
      <div>
        <Navbar />
        <HeroSection />
        <Testimonial />
        <VideoList />
        <CommunitiesCard />
        <Testimonial />
        <Questions />
      </div>
  )
}

export default HomePage