import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Blogger from '../../../components/Blogger/Blogger'
import UserBanner from '../../../components/DashboardLayout/UserDetails/UserBanner'
import UserDetails from '../../../components/DashboardLayout/UserDetails/UserDetails'

const Id = () => {
  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router.query.id

  // getting blogger info here
  const blogger = useSelector((state) => state?.reducers?.blogs?.bloggerDetails)

  return (
    <div>
      <Blogger></Blogger>
      {/* <UserBanner></UserBanner> */}
      {/* <UserDetails></UserDetails> */}
    </div>
  )
}

export default Id
