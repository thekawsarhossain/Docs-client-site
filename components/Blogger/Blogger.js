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

const Blogger = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      {/* Banner section  */}
      <div>
        {/*here user banner  */}
        <div className="">
          <div
            id="show"
            style={{
              minHeight: '350px',
              backgroundImage: `url(https://i.ibb.co/sRgf5qw/linkedin-default-background-cover-photo-1.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
          >
            <Container>
              <div className="mx-auto flex w-64 flex-col  items-center justify-center pt-20 md:mx-0">
                <div className="self-center">
                  <img
                    src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c"
                    className="h-32 w-32 rounded-full border-4 border-green-600  "
                    alt="image"
                  />
                </div>
                <div className="text-center">
                  <h3 className=" mt-1 font-bold text-white">Elon Mask</h3>
                  <p className="mt-1 mb-3 text-white">Manager</p>
                </div>
                <div className="self-center">
                  <ul className="user-icon my-1 flex">
                    <li>
                      <FacebookIcon sx={{ fontSize: '30px' }} />
                    </li>
                    <li>
                      <GoogleIcon sx={{ fontSize: '30px' }} />
                    </li>
                    <li>
                      <InstagramIcon sx={{ fontSize: '30px' }} />
                    </li>
                    <li>
                      <TwitterIcon sx={{ fontSize: '30px' }} />
                    </li>
                    <li>
                      <WifiIcon sx={{ fontSize: '30px' }} />
                    </li>
                  </ul>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      {/* here start user details */}
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 text-Docy-Dark dark:text-white md:col-span-4">
            <div className="mt-10 bg-slate-100 p-4 shadow">
              <h6 className="font-bold">About Rakib</h6>
              <ul>
                <hr className="mb-4" />
                <li className="mb-4">
                  <BusinessCenterIcon /> UX Designer At Docy
                </li>
                <li className="mb-4">
                  <LibraryBooksIcon /> BBA{' '}
                </li>
                <li className="mb-2">
                  <FavoriteIcon /> Single
                </li>
                <li className="mb-2">
                  <LocationOnIcon /> Lived In Sonargoan
                </li>
                <li className="mb-2">
                  <BloodtypeIcon /> (A+)
                </li>
              </ul>
            </div>
            <Accordion
              className="bg-slate-200 text-Docy-Dark dark:bg-Docy-Dark dark:text-slate-100"
              expanded
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>
                  What is your refund policy and terms and conditions?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We comply fully with Envato’s refund policy. We issue refunds
                  for the reasons Envato permits us to give refund and we don’t
                  issue refunds on the cases Envato does not guarantee refunds.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="mt-10">
              <Grid
                // key={blog?._id}
                className="mb-8"
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 4, sm: 12, md: 12 }}
              >
                <Grid item xs={12} sm={4} md={4}>
                  <img
                    // src={blog?.image}
                    src="https://i.ibb.co/vZFxQTW/SEI89459931-1-1.jpg"
                    className="-mb-4 h-80 w-full object-cover md:h-64 md:rounded"
                    alt=""
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <div className=" min-h-72 bg-slate-100  px-6  py-5 hover:shadow dark:bg-Docy-DarkGray md:h-64 md:rounded">
                    <div className="flex justify-between">
                      <span className="text-red-400">category</span>
                    </div>
                    <Link
                      onClick={() => dispatch(ADD_TO_BLOG(blog))}
                      // href={`/blog/${blog?._id}`}
                      href="/"
                    >
                      <a>
                        <h3 className="cursor-pointer pt-4 pb-10 font-bold hover:underline ">
                          title
                        </h3>
                      </a>
                    </Link>
                    <div className="items-center  justify-between md:flex">
                      <div className="mb-4 flex items-center">
                        <Avatar
                          alt="Bloggers image"
                          // src={blog?.blogger?.image}
                          src="https://i.ibb.co/vZFxQTW/SEI89459931-1-1.jpg"
                          sx={{ width: 40, height: 40, mr: 2 }}
                        />
                        <p>
                          {' '}
                          blogger name <br />
                          <small className="hidden md:flex"> date - time</small>
                        </p>
                      </div>
                      <div>
                        <p>
                          {' '}
                          <ForumOutlinedIcon sx={{ width: 18, height: 18 }} /> 3
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Blogger
