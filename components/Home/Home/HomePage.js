
import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../Navbar/Navbar'
import Questions from '../Questions/Questions'


const HomePage = () => {
  return (
    <>
    <div>
      <Navbar></Navbar>
      <h1>HomePage</h1>

      <Testimonial/>
      <Questions />
    </div>
    </>
  );

}

export default HomePage
