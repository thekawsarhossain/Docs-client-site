import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DetailsHeroSection from '../../components/BlogDetails/DetailsHeroSection/DetailsHeroSection'
import MainDetails from '../../components/BlogDetails/MainDetails/MainDetails'
import Footer from '../../components/Shared/Footer/Footer'

const Id = () => {
  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <div className="font-serif">
        <DetailsHeroSection />
        <MainDetails />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Id
