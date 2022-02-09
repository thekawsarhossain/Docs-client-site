import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Testimonial />
        <CommunitiesCard />
        <Questions />
      </div>
    </>
  )
}

export default HomePage
