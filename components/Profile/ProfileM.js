import { useSelector } from 'react-redux'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'
import ProfileBanner from './Profilebanner/ProfileBanner'
import ProfileBody from './ProfileBody/ProfileBody'
import ProfileSubbanner from './ProfileSubBanner/ProfileSubbanner'

const ProfileM = () => {
  // user info from data base
  const userInfoFromDB = useSelector(
    (state) => state?.reducers?.user?.userInfoFromDB
  )
  return (
    <div>
      <Navbar />
      <ProfileBanner userInfoFromDB={userInfoFromDB} />
      <ProfileSubbanner />
      <ProfileBody userInfoFromDB={userInfoFromDB} />
      <Footer />
    </div>
  )
}

export default ProfileM
