import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'
    import VideoList from '../VideoList/VideoList'

const HomePage = () => {
  return (
      <div>
        <Navbar />
        <Testimonial />
        <VideoList />
        <CommunitiesCard />
        <Questions />
      </div>
  )
}

export default HomePage
