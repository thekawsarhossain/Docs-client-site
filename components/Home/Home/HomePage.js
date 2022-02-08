import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../Navbar/Navbar'
import Questions from '../Questions/Questions'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <CommunitiesCard />
        {/* <Testimonial />
        <Questions /> */}
      </div>
    </>
  )
}

export default HomePage
