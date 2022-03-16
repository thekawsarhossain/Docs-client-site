/* eslint-disable @next/next/no-img-element */
import { Container } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
// import Image from 'next/image'

const ProfileBanner = (props) => {
  return (
    <div>
      <div
        className="relative bg-Docy-paleGeen dark:bg-Docy-Dark "
        style={{ minHeight: '350px' }}
      >
        <Container>
          <div
            style={{ minHeight: '350px' }}
            className="flex w-full text-Docy-Dark dark:text-white "
          >
            <div className="w-full self-center">
              <div className="flex flex-col pt-12 sm:flex-row">
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
        </Container>
      </div>
    </div>
  )
}

export default ProfileBanner
