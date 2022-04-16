import Footer from '../Shared/Footer/Footer'
import AQBanner from './AQBanner/AQBanner'
import AQBody from './AQBody/AQBody'
import { useRouter } from 'next/router'
import authCheck from '../../HOC/withAuthCheck'

const AQMain = () => {
  // router nextjs hook for routing
  const router = useRouter()
  const handleUpload = (e) => {
    fetch('https://polar-hamlet-38117.herokuapp.com/questions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert('Your question have been submitted.')
          router.replace('/ask')
        }
      })
  }
  return (
    <div>
      <AQBanner></AQBanner>
      <AQBody handleUpload={handleUpload}></AQBody>
      <Footer></Footer>
    </div>
  )
}

export default authCheck(AQMain)
