import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'
import OnlineDoc from '../OnlineDoc/OnlineDoc'

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Testimonial />
        <CommunitiesCard />
        <OnlineDoc/>
        <Questions />
      </div>
    </>
  )
}

export default HomePage
