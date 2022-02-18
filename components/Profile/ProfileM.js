import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'
import ProfileBanner from './Profilebanner/ProfileBanner'
import ProfileBody from './ProfileBody/ProfileBody'
import ProfileSubbanner from './ProfileSubBanner/ProfileSubbanner'

const ProfileM = () => {
  return (
    <div>
      <script
        src="https://kit.fontawesome.com/66b88de5ab.js"
        crossorigin="anonymous"
      ></script>
      <Navbar />
      <ProfileBanner />
      <ProfileSubbanner />
      <ProfileBody />
      <Footer />
    </div>
  )
}

export default ProfileM
