import { Avatar, Container } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from '../Shared/Navbar/Navbar'
import Link from 'next/link'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const QDHeroSection = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="breadcrumb_area_three relative  bg-Docy-paleGeen text-Docy-Dark dark:bg-Docy-Dark dark:text-white">
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
                <div className="relative">
                  <div className=" py-8 px-2">
                    <div>
                      <div className="">
                        <div className=" py-3">
                          <div className="relative flex">
                            <div className="w-full self-center">
                              <div className="flex w-full justify-between">
                                <p className="font-mono text-red-400">
                                  {props?.question?.category}
                                </p>
                                <div className="mb-1 self-center">
                                  <Link href="/askQuestion">
                                    <a>
                                      <span className="text-1xl rounded-lg bg-orange-500 px-3 py-3  font-semibold text-Docy-Dark dark:text-white">
                                        Ask Question{' '}
                                        <span className="">
                                          <HelpOutlineIcon className="animate-pulse" />
                                        </span>
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                              <h1 className="pt-2 font-serif text-4xl">
                                {props?.question?.title}
                              </h1>
                              <div className="mt-3 flex">
                                <p className="self-center pb-8">
                                  {props?.question?.uploadDate} |{' '}
                                  {props?.question?.uploadTime}
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
    </div>
  )
}

export default QDHeroSection
