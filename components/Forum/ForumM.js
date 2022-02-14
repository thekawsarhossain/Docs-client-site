import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'
import FormBanner from './ForumBanner/FormBanner'
import ForumBody from './ForumBody/ForumBody'
import ForumFooterBanner from './ForumFooterBanner/ForumFooterBanner'
import ForumSubBanner from './ForumSubBanner/ForumSubBanner'

const ForumM = () => {
  return (
    <div>
      <Navbar />
      <FormBanner />
      <ForumSubBanner />
      <ForumBody />
      <ForumFooterBanner />
      <Footer />
    </div>
  )
}

export default ForumM
