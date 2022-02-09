import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'
import HeroSection from '../HeroSection/HeroSection'

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <CommunitiesCard />
        <Testimonial />
        <Questions />
      </div>
    </>
  )
}

export default HomePage
