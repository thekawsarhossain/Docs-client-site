import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'
import VideoList from '../VideoList/VideoList'
import OnlineDoc from '../OnlineDoc/OnlineDoc'


const HomePage = () => {
  return (
      <div>
        <Navbar />
        <CommunitiesCard />
        <OnlineDoc/>
        <VideoList />
        <Questions />
        <Testimonial />
      </div>

  )
}

export default HomePage
