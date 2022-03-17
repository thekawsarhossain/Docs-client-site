/* eslint-disable @next/next/no-img-element */
import { Container } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
// import Image from 'next/image'

const ProfileBanner = (props) => {
  return (
    <div>
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
            }}
          >
            <form action="#" className="">
              <div className="">
                <div className="py-8">
                  <div>
                    <div className="">
                      <div className=" py-3">
                        <div className="">
                          <div>
                            <div className="flex flex-col text-white dark:text-white sm:flex-row">
                              {/* Profile picture  */}
                              <div
                                className="mx-auto flex overflow-hidden rounded-full border-2 border-white sm:mx-0"
                                style={{ height: '150px', width: '150px' }}
                              >
                                <img
                                  style={{ height: '150px', width: '150px' }}
                                  className="mx-auto rounded-full border-2 border-white object-cover"
                                  src={props?.userInfoFromDB?.image}
                                  alt=""
                                />
                              </div>
                              {/* Username and title  */}
                              <div className="self-center p-2 text-center sm:text-left">
                                <h1 className="font-serif text-3xl">
                                  {props?.userInfoFromDB?.displayName}
                                </h1>
                                <p className="pt-2 font-mono">
                                  {props?.userInfoFromDB?.profession}
                                </p>
                              </div>
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

export default ProfileBanner
