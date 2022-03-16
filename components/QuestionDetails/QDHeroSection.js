import { Avatar, Container } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from '../Shared/Navbar/Navbar'
import Link from 'next/link'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const QDHeroSection = (props) => {
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
            <div className="w-full self-center">
              <div className="flex w-full justify-between pt-12">
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
                  {props?.question?.uploadDate} | {props?.question?.uploadTime}
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
