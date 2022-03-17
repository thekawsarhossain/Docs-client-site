import { useDispatch, useSelector } from 'react-redux'
import ProfileEdit from '../components/Profile/ProfileBody/ProfileEdit'
import ProfileBanner from '../components/Profile/Profilebanner/ProfileBanner'
import Navbar from '../components/Shared/Navbar/Navbar'
import { Container } from '@mui/material'
import Footer from '../components/Shared/Footer/Footer'
import { fetchUserData } from '../Redux/Slices/userSlice'
import { useEffect } from 'react'

const GiveInfo = () => {
  const userInfo = useSelector((state) => state?.reducers?.user?.currentUser)

  // react redux hook here
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data here
  useEffect(() => {
    dispatch(fetchUserData(userInfo?.email))
  }, [dispatch, userInfo])

  const userInfoFromDB = useSelector(
    (state) => state?.reducers?.user?.userInfoFromDB
  )
  return (
    <div>
      <Navbar></Navbar>
      <ProfileBanner userInfoFromDB={userInfoFromDB}></ProfileBanner>
      <Container>
        <div className="my-5 rounded bg-slate-100 px-4 py-4 text-center text-Docy-Dark dark:bg-Docy-DarkM dark:text-white">
          <h4 className="text-3xl font-bold">
            Make Your Profile Look Batter by Filling the Form
          </h4>
        </div>
        <ProfileEdit userInfoFromDB={userInfoFromDB}></ProfileEdit>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default GiveInfo
