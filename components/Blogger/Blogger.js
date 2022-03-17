/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Avatar, Container } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import WifiIcon from '@mui/icons-material/Wifi'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BloodtypeIcon from '@mui/icons-material/Bloodtype'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ShareIcon from '@mui/icons-material/Share'
import MessageIcon from '@mui/icons-material/Message'
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import AddSharpIcon from '@mui/icons-material/AddSharp'
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp'
import Navbar from '../Shared/Navbar/Navbar'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import UserFollowers from './UserFollowers'
import BlogerProfile from './BlogerProfile'
import Example from '../Home/HeroSection/test'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'

const Blogger = (props) => {
  const [showMore, setShowMore] = React.useState(false)
  const [data, setData] = React.useState([])

  // React.useEffect(() => {
  //   if (showMore) {
  //     setData(fakeData)
  //   } else {
  //     setData(fakeData.slice(0, 6))
  //   }
  // }, [showMore])
  return (
    <div>
      <div>
        <Navbar />
        {/* Hero section start */}
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
                          <div>
                            <div className="text-center font-bold text-white dark:text-white">
                              <h1 className="font-serif text-4xl">
                                Hello! here is Docy
                              </h1>
                              <p className="pt-2 font-mono">
                                Find your best blogger by Docy
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
        </div>
        {/* Hero section end */}
        {/* Sub banner section start */}
        <div className="bg-slate-200 dark:bg-Docy-Dark">
          <Container sx={{ py: 2 }}>
            <div className="flex justify-between text-gray-200 dark:text-black ">
              <div className="flex items-center	text-sm text-black dark:text-white">
                <>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <ArrowForwardIosRoundedIcon sx={{ fontSize: '15px' }} />
                </>
                <>
                  {' '}
                  <Link href="/">
                    <a>Docs</a>
                  </Link>{' '}
                  <ArrowForwardIosRoundedIcon sx={{ fontSize: '15px' }} />
                </>
                <a>My Profile</a>
              </div>
              <div className="time text-sm	">
                <p className="text-black dark:text-white">
                  <AccessTimeRoundedIcon sx={{ fontSize: '17px' }} /> Updated on
                  Jan 10, 2022
                </p>
              </div>
            </div>
          </Container>
        </div>
        {/* Sub banner section end */}
      </div>
      {/* here start user details */}
      <div>
        <BlogerProfile blogger={props?.blogger} />
      </div>
    </div>
  )
}

export default Blogger
