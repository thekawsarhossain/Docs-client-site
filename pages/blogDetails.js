import { useEffect, useState } from 'react'
import DetailsHeroSection from '../components/BlogDetails/DetailsHeroSection/DetailsHeroSection'
import MainDetails from '../components/BlogDetails/MainDetails/MainDetails'
import Footer from '../components/Shared/Footer/Footer'

const BlogDetails = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/blogs/62184d476c6148a82ed0c4cc')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch()
  }, [])
  return (
    <div>
      <div className="font-serif">
        <DetailsHeroSection></DetailsHeroSection>
        <MainDetails data={data}></MainDetails>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogDetails
