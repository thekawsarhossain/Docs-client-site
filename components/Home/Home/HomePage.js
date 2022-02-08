import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Testimonial />
        <Questions />
      </div>
    </>
  )
}

export default HomePage
