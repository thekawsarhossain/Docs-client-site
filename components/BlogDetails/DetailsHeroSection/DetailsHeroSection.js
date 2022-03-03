import { Avatar, Container } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from '../../Shared/Navbar/Navbar'

const DetailsHeroSection = () => {
  const blog = useSelector((state) => state?.reducers?.blogs?.blog)

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ backgroundColor: '#223044', minHeight: '310px' }}>
        <Container>
          <div
            style={{ minHeight: '300px' }}
            className="flex w-full pt-12 text-white"
          >
            <div className="self-center">
              <h1 className="font-serif text-4xl">{blog?.title}</h1>
              <p className="pt-2 font-mono">Category: {blog?.category}</p>
              <div className="mt-3 flex">
                <Avatar alt="Blogger's photo" src={blog?.blogger?.image} />
                <p className="self-center pl-2 font-sans">
                  {' '}
                  {blog?.blogger?.displayName} | {blog?.uploadTime} -{' '}
                  {blog?.uploadDate}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default DetailsHeroSection
