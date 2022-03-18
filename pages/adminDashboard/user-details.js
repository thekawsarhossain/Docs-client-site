import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
import UserBanner from '../../components/DashboardLayout/UserDetails/UserBanner'
import UserDetails from '../../components/DashboardLayout/UserDetails/UserDetails'

const userDetails = () => {
  return (
    <DashboardLayout>
      <UserBanner />
      <UserDetails />
    </DashboardLayout>
  )
}

export default userDetails
