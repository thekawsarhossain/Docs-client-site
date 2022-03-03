import { useRouter } from 'next/router'
import DetailsHeroSection from '../../components/BlogDetails/DetailsHeroSection/DetailsHeroSection'
import MainDetails from '../../components/BlogDetails/MainDetails/MainDetails'
import Footer from '../../components/Shared/Footer/Footer'

const Id = () => {
  return (
    <div>
      <div className="font-serif">
        <DetailsHeroSection />
        <MainDetails />
      </div>
      <Footer />
    </div>
  )
}

export default Id
