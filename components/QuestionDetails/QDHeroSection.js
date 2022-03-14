import { Avatar, Container } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from '../../Shared/Navbar/Navbar'

const QDHeroSection = () => {
  const blog = useSelector((state) => state?.reducers?.blogs?.blog)

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="bg-Docy-PaleGrey dark:bg-Docy-Dark"
        style={{ minHeight: '310px' }}
      >
        <Container>
          <div
            style={{ minHeight: '300px' }}
            className="flex w-full pt-12 text-Docy-Dark dark:text-white"
          >
            <div className="self-center">
              <h1 className="pt-12 font-serif text-4xl">{blog?.title}</h1>
              <p className="pt-2 font-mono">Category: {blog?.category}</p>
              <div className="mt-3 flex">
                <Avatar alt="Remy Sharp" src={blog?.blogger?.image} />
                <p className="self-center pl-2 pb-8">
                  {' '}
                  {blog?.blogger?.displayName} | {blog?.uploadDate} |{' '}
                  {blog?.uploadTime}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default QDHeroSection
