import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'

const authCheck = (WrappedComponent) => {
  const PrivateRoute = () => {
    const router = useRouter()
    // user info
    const user = useSelector((state) => state?.reducers?.user?.currentUser)

    useEffect(() => {
      if (!user?.email) {
        router.replace('/login')
      }
    }, [router, user?.email])

    if (user?.email) {
      return <WrappedComponent />
    }

    return <Loading />
  }
  return PrivateRoute
}

export default authCheck
