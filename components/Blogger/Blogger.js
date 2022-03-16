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
        <div
          style={{
            background: 'linearGradient( 60deg , #10b3d6 0%, #1d2746 100%)',
            padding: '190px 0 95px',
            position: 'relative',
          }}
          className="breadcrumb_area overflow-hidden"
        >
          <img
            className="absolute"
            style={{
              width: '150px',
              height: '145px',
              bottom: '-7px',
              left: '20px',
              zIndex: '1',
            }}
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/v.svg"
            alt=""
          />
          <img
            style={{
              width: '135px',
              height: '110px',
              right: '30px',
              bottom: '-7px',
              zIndex: '1',
            }}
            className="absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_one/b_leaf.svg"
            alt=""
          />
          <img
            style={{
              top: '0',
              width: '100%',
              left: '0',
              zIndex: '0',
              right: '0',
              height: 'auto',
            }}
            className="star absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_one/banner_bg.png"
            alt=""
          />
          <img
            style={{ bottom: '0', zIndex: '0' }}
            className="absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-classic/shap_01.png"
            alt=""
          />
          <img
            style={{ bottom: '0', zIndex: '0' }}
            className="absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-classic/shap_02.png"
            alt=""
          />
          <img
            className="absolute"
            style={{
              right: '20%',
              bottom: '25px',
              visibility: 'visible',
              animationName: 'fadeInRight',
            }}
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_one/b_man_two.png"
            alt=""
          />
          <img
            className="absolute"
            data-wow-delay="0.2s"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_one/flower.png"
            alt=""
            style={{
              left: '20%',
              bottom: '0',
              visibility: 'visible',
              animationDelay: '0.2s',
              animationName: 'fadeInUp',
            }}
          />
          <div
            className="custom_container container"
            style={{
              width: '100%',
              paddingRight: '15px',
              paddingLeft: '15px',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <form action="#" className=" pb-7">
              <div className="relative flex justify-center">
                <div className=" py-10 px-2">
                  <div>
                    <div className="md:flex">
                      <div className=" p-3">
                        <div className="relative flex">
                          <div>
                            <div className="text-center text-6xl font-bold text-white dark:text-white">
                              My Profile
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
      </div>
      {/* here start user details */}
      <div>
        <BlogerProfile />
      </div>
    </div>
  )
}

export default Blogger
