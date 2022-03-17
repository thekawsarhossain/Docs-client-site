/* eslint-disable @next/next/no-img-element */
import { Container } from '@mui/material'
import Navbar from '../../Shared/Navbar/Navbar'

const HeadSection = () => {
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
        <Container>
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
                          <div>
                            <div className="text-center font-bold text-white dark:text-white">
                              <h1 className="font-serif text-4xl">
                                Hello! here is Docy
                              </h1>
                              <p className="pt-2 font-mono">
                                Shear your blog or documentation with{' '}
                                <span className="font-black">Docy</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default HeadSection
