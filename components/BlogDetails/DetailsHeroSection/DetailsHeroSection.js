import { Avatar, Container } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from '../../Shared/Navbar/Navbar'

const DetailsHeroSection = () => {
  const blog = useSelector((state) => state?.reducers?.blogs?.blog)

  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          background: 'linearGradient( 60deg , #10b3d6 0%, #1d2746 100%)',
          padding: '60px 0 0px',
          position: 'relative',
        }}
        className="breadcrumb_area overflow-hidden"
      >
        <div
          className="custom_container container"
          style={{
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <form action="#" className="">
            <div className="relative flex justify-center">
              <div className=" py-8 px-2">
                <div>
                  <div className="md:flex">
                    <div className=" py-3">
                      <div className="relative flex">
                        <Container>
                          <div className="font-bold text-white dark:text-white">
                            <h1 className="pt-12 font-serif text-4xl">
                              {blog?.title}
                            </h1>
                            <p className="pt-2 font-mono">
                              Category: {blog?.category}
                            </p>
                            <div className="mt-3 flex pb-8">
                              <Avatar
                                alt="Remy Sharp"
                                src={blog?.blogger?.image}
                              />
                              <p className="self-center pl-2">
                                {' '}
                                {blog?.blogger?.displayName} |{' '}
                                {blog?.uploadDate} | {blog?.uploadTime}
                              </p>
                            </div>
                          </div>
                        </Container>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DetailsHeroSection
